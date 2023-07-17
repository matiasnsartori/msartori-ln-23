import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  0: 'Nacional';

  @Column()
  1: 'Importado';

  @OneToMany(() => Product, (product) => product.id_categoria)
  products: Product[];
}
