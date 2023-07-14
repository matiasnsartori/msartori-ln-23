import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) {}

  findAll() {
    return this.productsRepository.find();
  }

  findOne(id) {
    return this.productsRepository.findOne(id);
  }

  create(body: any) {
    const newTask = this.productsRepository.create(body);
  }

  async update(id, body: any) {
    const task = await this.productsRepository.findOne(id);
    this.productsRepository.merge(task, body);
    return this.productsRepository.save(task);
  }

  async delete(id: number) {
    await this.productsRepository.delete(id);
    return true;
  }
}
