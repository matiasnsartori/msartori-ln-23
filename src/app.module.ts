import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'matias',
      password: 'DwightSchrute',
      database: 'postgres',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryAttempts: 5,
      retryDelay: 3000,
    }),
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
