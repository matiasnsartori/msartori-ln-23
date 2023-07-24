import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator';

@Entity({ name: 'productos' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @IsNumber()
  @Column('int', { unique: true })
  sku: number;

  @IsNotEmpty()
  @IsNumber()
  @Column('int')
  id_categoria: number;

  @IsNotEmpty()
  @IsString()
  @Column('string')
  nombre_producto: string;

  @IsString()
  @Column('varchar', { length: 200 })
  descripcion: string;

  @IsNotEmpty()
  @IsNumber()
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  precio: number;

  @IsNotEmpty()
  @IsNumber()
  @Column('int')
  id_estado: number;
}
