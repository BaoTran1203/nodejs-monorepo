import { Inject } from '@nestjs/common';
import { ConfigService } from '../config';
import { LogService } from '../log';
import { camelCase, union, fromPairs, map } from 'lodash';

export type ServicesInject = {
  configService: ConfigService;
  pinoLogger: LogService;
  [serviceName: string]: any;
};

export type CallbackDecoratorOptions = {
  args: any[];
  method: (...args: any[]) => Promise<any> | any;
  services: ServicesInject;
  target: Object;
  propertyKey: string | symbol;
  descriptor: PropertyDescriptor;
};

type InjectType = (target: object, key: string | symbol, index?: number) => void;
type InjectClass = new (...args: any[]) => any;

export const BaseMethodDecorator = (
  callback: (options: CallbackDecoratorOptions) => Promise<any> | any,
  injects: InjectClass[] = [],
): MethodDecorator => {
  injects = union(injects, [LogService, ConfigService]);
  const injectServices: InjectType[] = injects.map((inject: InjectClass) => Inject(inject));

  return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const originMethod = descriptor.value;
    injectServices.forEach((injectService, index) => injectService(target, injects[index].name));

    descriptor.value = function (...args: any[]) {
      this.PinoLogger.setContext(Reflect.get(target, 'constructor').name);

      return callback.bind(this)({
        args,
        target,
        propertyKey,
        descriptor,
        method: originMethod.bind(this), // bind `this` help us have context when `callback` is a arrow functions.
        services: fromPairs(map(injects, (i: InjectClass) => [camelCase(i.name), this[i.name]])),
      });
    };

    return descriptor;
  };
};
