import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Category_0: 'Nacional';

  @Column()
  Category_1: 'Importado';

  @OneToMany(() => Product, (product) => product.id_categoria)
  products: Product[];
}
