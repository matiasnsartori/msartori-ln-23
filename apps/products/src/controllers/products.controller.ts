import { Controller } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { Product } from '../entities/product.entity';
import { UpdateProductDto } from '../dto/update-user.dto';
import { productCommands } from 'apps/msartori-ln-23/src/commands/product.commands';

@Controller()
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @MessagePattern(productCommands.getAll)
  async getAllProducts(): Promise<Product[]> {
    return await this.productsService.findAll();
  }

  @MessagePattern(productCommands.getOne)
  async getOneProduct(id: number): Promise<Product> {
    return await this.productsService.findOne(id);
  }

  @MessagePattern(productCommands.create)
  async createProduct(product: Product): Promise<Product> {
    console.log({ product });
    return await this.productsService.create(product);
  }

  @MessagePattern(productCommands.update)
  async updateProduct(data: { id: number; body: UpdateProductDto }) {
    const { id, body } = data;
    return await this.productsService.update(id, body);
  }

  @MessagePattern(productCommands.delete)
  async deleteProduct(id: number): Promise<boolean> {
    return await this.productsService.delete(id);
  }
}
