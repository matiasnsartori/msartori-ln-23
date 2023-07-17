import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  0: 'Deshabilitado';

  @Column()
  1: 'habilitado';

  @OneToMany(() => Product, (product) => product.id_estado)
  products: Product[];
}
