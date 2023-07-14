import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sku: number;

  @Column()
  id_categoria: number;

  @Column()
  nombre_producto: string;

  @Column({ type: 'longtext' })
  descripcion: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  price: number;

  @Column()
  id_estado: number;
}
