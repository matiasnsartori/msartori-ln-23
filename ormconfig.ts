import 'reflect-metadata';
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'matias',
  password: 'DwightSchrute',
  database: 'postgres',
  entities: ['src/**/*.entity.ts'],
  synchronize: true,
  migrationsTableName: 'migrations',
  migrations: ['src/database/migrations/*.ts'],
});

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize();
