import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  State_0: 'Habilitado';

  @Column()
  State_1: 'Deshabilitado';

  @OneToMany(() => Product, (product) => product.id_estado)
  products: Product[];
}
