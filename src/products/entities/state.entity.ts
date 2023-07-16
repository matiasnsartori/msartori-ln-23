import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Products } from './product.entity';
import { join } from 'path';

export type Status = 'Habilitado' | 'Deshabilitado';

@Entity()
export class State {
  @PrimaryGeneratedColumn()
  @OneToOne(() => Products, (products) => products.id_estado)
  @JoinColumn({ name: 'id_estado' })
  id: number;

  @Column({
    type: 'enum',
    enum: ['Habilitado', 'Deshabilitado'],
    default: 'Deshabilitado',
  })
  status: Status;
}
