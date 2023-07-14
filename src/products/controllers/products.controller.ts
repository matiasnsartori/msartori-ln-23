import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ProductsService } from '../services/products.service';

@Controller({ path: 'api/products', version: '1' })
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.findAll();
  }
  @Get(':id')
  getOneProduct(@Param('id') id: number) {
    return this.productsService.findOne(id);
  }
  @Post()
  createProduct(@Body() body: any) {
    return this.productsService.create(body);
  }
  @Put(':id')
  updateProduct(@Param('id') id: number, @Body() body: any) {
    return this.productsService.update(id, body);
  }
  @Delete(':id')
  deleteProduct(@Param('id') id: number) {
    return this.productsService.delete(id);
  }
}
