<div align="center">
  <h1>jobhopin-http-client</h1>
  <p>Core Libraries such as type definitions, api clients and utils serving for backend services and frontend services</p>
  </div>
</div>

## Installation

Use the package manager to install @baotg/http-client (if you have been published to npm registry)

```bash
yarn add @baotg/http-client
```

## Local Development
For development, a package can be linked into another project. This is often useful to test out new features

```bash
  cd jobhopin-core
  yarn link
```

Use `yarn link @baotg/http-client` to link another package that you’d like to test into your current project.

## Usage

```javascript
import { isDev } from '@baotg/http-client/dist/utils';

isDev();
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
