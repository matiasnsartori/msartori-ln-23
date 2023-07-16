import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Product } from './product.entity';
import { join } from 'path';

export type Status = 'Habilitado' | 'Deshabilitado';

@Entity()
export class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
}
