import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './services/products.service';
import { ProductsController } from './controllers/products.controller';
import { Products } from './entities/product.entity';
import { Category } from './entities/category.entity';
import { State } from './entities/state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Products, Category, State])],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
