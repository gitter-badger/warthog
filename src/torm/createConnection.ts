import { createConnection, ConnectionOptions } from 'typeorm';

import { SnakeNamingStrategy } from './SnakeNamingStrategy';

export const createDBConnection = (dbOptions: Partial<ConnectionOptions> = {}) => {
  // TODO: Fix any
  const baseConfig: any = {
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber'
    },
    database: process.env.TYPEORM_DATABASE,
    entities: process.env.TYPEORM_ENTITIES || ['src/**/*.entity.ts'],
    host: process.env.TYPEORM_HOST || 'localhost',
    logger: 'advanced-console',
    logging: process.env.TYPEORM_LOGGING || 'all',
    migrations: ['src/migration/**/*.ts'],
    namingStrategy: new SnakeNamingStrategy(),
    port: parseInt(process.env.TYPEORM_PORT || '', 10) || 5432,
    subscribers: ['src/**/*.entity.ts'],
    synchronize:
      typeof process.env.TYPEORM_SYNCHRONIZE !== 'undefined'
        ? process.env.TYPEORM_SYNCHRONIZE
        : process.env.NODE_ENV === 'development',
    type: 'postgres',
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD
  };

  const config = {
    ...baseConfig,
    ...dbOptions
  };

  if (!config.database) {
    throw new Error("createConnection: 'database' is required");
  }

  return createConnection(config);
};
