import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

import { ProductsService } from '../services/products.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '../entities/product.entity';

@Controller({ path: 'api/products', version: '1' })
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  getOneProduct(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Post()
  createProduct(@Body() newProduct: CreateProductDto): Promise<Product> {
    return this.productsService.create(newProduct);
  }

  @Put(':id')
  updateProduct(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    console.log({ body });
    return this.productsService.update(id, body);
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number): Promise<boolean> {
    return this.productsService.delete(id);
  }
}
