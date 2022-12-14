export enum MigrationMessagePattern {
  MIGRATION_SNAPSHOT = 'MigrationMessagePattern_MIGRATION_SNAPSHOT',
  START_LISTENER_FROM_BIN_BLOG = 'MigrationMessagePattern_START_LISTENER_FROM_BIN_BLOG',
  STOP_LISTENER_FROM_BIN_BLOG = 'MigrationMessagePattern_STOP_LISTENER_FROM_BIN_BLOG',
  START_SYNC_DATA_FROM_MYSQL_TO_MONGO = 'MigrationMessagePattern_START_SYNC_DATA_FROM_MYSQL_TO_MONGO',
  STOP_SYNC_DATA_FROM_MYSQL_TO_MONGO = 'MigrationMessagePattern_STOP_SYNC_DATA_FROM_MYSQL_TO_MONGO',
  START_LISTENER_FROM_CHANGE_STREAM = 'MigrationMessagePattern_START_LISTENER_FROM_CHANGE_STREAM',
}
