import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Products } from './product.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  @OneToOne(() => Products, (products) => products.id_categoria)
  @JoinColumn({ name: 'id_categoria' })
  id!: number;

  @Column()
  importado!: 1;

  @Column()
  nacional!: 2;
}
