import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller({ path: 'api/products', version: '1' })
export class ProductsController {
  @Get()
  getAllProducts() {
    return 'getAllProducts';
  }
  @Get(':id')
  getOneProduct(@Param('id') id: number) {
    return `require product ${id}`;
  }
  @Post()
  createProduct(@Body() body: any) {
    return body;
  }
  @Put(':id')
  updateProduct(@Param('id') id: number, @Body() body: any) {
    return `update product ${id}`;
  }
  @Delete(':id')
  deleteProduct(@Param('id') id: number) {
    return true;
  }
}
