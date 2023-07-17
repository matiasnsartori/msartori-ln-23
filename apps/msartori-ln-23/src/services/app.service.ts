import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateProductDto } from 'apps/products/src/dto/create-product.dto';
import { UpdateProductDto } from 'apps/products/src/dto/update-user.dto';
import { Product } from 'apps/products/src/entities/product.entity';
import { Observable } from 'rxjs';
import { productCommands } from '../commands/product.commands';

@Injectable()
export class AppService {
  constructor(@Inject('PRODUCTS_SERVICE') private productClient: ClientProxy) {}

  getProducts(): Observable<Product[]> {
    return this.productClient.send(productCommands.getAll, {});
  }

  getOneProduct(id: number): Observable<Product> {
    return this.productClient.send(productCommands.getOne, id);
  }

  create(newProduct: CreateProductDto): Observable<Product> {
    return this.productClient.send(productCommands.create, newProduct);
  }

  update(id: number, body: UpdateProductDto) {
    return this.productClient.send(productCommands.update, { id, body });
  }

  delete(id: number) {
    return this.productClient.send(productCommands.delete, id);
  }
}
