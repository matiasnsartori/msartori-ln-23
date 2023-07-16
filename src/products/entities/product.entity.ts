import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Category } from './category.entity';
import { State } from './state.entity';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sku: number;

  @Column()
  id_categoria!: number;

  @OneToOne(() => Category, (category) => category.id)
  category!: Category;

  @Column()
  nombre_producto: string;

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  price: number;

  @Column()
  id_estado: number;

  @OneToOne(() => State, (state) => state.id)
  state!: State;
}
