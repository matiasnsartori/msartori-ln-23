import {
  Controller,
  Post,
  Put,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from 'apps/products/src/entities/product.entity';
import { Observable } from 'rxjs';
import { CreateProductDto } from 'apps/products/src/dto/create-product.dto';
import { UpdateProductDto } from 'apps/products/src/dto/update-user.dto';

@Controller({ path: 'api/products', version: '1' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllProducts() {
    return this.appService.getProducts();
  }

  @Get(':id')
  getOneProduct(@Param('id', ParseIntPipe) id: number): Observable<Product> {
    return this.appService.getOneProduct(id);
  }

  @Post()
  createProduct(@Body() newProduct: CreateProductDto): Observable<Product> {
    return this.appService.create(newProduct);
  }

  @Put(':id')
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateProductDto,
  ) {
    return this.appService.update(id, body);
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number): Observable<boolean> {
    return this.appService.delete(id);
  }
}
