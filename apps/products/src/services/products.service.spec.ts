import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { Product } from '../entities/product.entity';
import { Repository } from 'typeorm';

describe('ProductsService', () => {
  let service: ProductsService;
  let productRepository: Repository<Product>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useValue: {
            create: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            save: jest.fn(),
            findAll: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    productRepository = module.get<Repository<Product>>(
      getRepositoryToken(Product),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('userRepo should be defined', () => {
    expect(productRepository).toBeDefined();
  });
  describe('create', () => {
    it('should create a product', async () => {
      const newProduct = {
        id: 1,
        sku: 1233,
        id_categoria: 123,
        nombre_producto: 'club lanacion',
        descripcion: 'app',
        precio: 22,
        id_estado: 2,
      };
      jest.spyOn(productRepository, 'create').mockReturnValue(newProduct);
      jest.spyOn(productRepository, 'save').mockResolvedValue(newProduct);
      expect(await service.create(newProduct)).toEqual(newProduct);
    });

    it('should throw an error', async () => {
      const newProduct = {
        id: 1,
        sku: 1233,
        id_categoria: 123,
        nombre_producto: ' ',
        descripcion: ' ',
        precio: 22,
        id_estado: 2,
      };
      jest.spyOn(productRepository, 'create').mockReturnValue(newProduct);
      jest.spyOn(productRepository, 'save').mockRejectedValue(new Error());
      await expect(service.create(newProduct)).rejects.toThrowError();
    });

    describe('findOne', () => {
      it('should return a product', async () => {
        const product = {
          id: 1,
          sku: 1233,
          id_categoria: 123,
          nombre_producto: 'club lanacion',
          descripcion: 'web',
          precio: 22,
          id_estado: 2,
        };
        jest.spyOn(productRepository, 'findOne').mockResolvedValue(product);
        expect(await service.findOne(1)).toEqual(product);
      });
      it('should throw an error', async () => {
        jest.spyOn(productRepository, 'findOne').mockRejectedValue(new Error());
        await expect(service.findOne(1)).rejects.toThrowError();
      });
    });
    describe('delete', () => {
      it('should delete a product', async () => {
        expect(await service.delete(1)).toEqual(true);
      });
      it('should throw an error', async () => {
        jest.spyOn(productRepository, 'delete').mockRejectedValue(new Error());
        await expect(service.delete(1)).rejects.toThrowError();
      });
    });
  });
});
