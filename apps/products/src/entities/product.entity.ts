import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator';

@Entity({ name: 'productos' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @IsNumber()
  @Column({ unique: true })
  sku: number;

  @IsNotEmpty()
  @IsNumber()
  @Column()
  id_categoria: number;

  @IsNotEmpty()
  @IsString()
  @Column()
  nombre_producto: string;

  @IsString()
  @Column({ type: 'text' })
  descripcion: string;

  @IsNotEmpty()
  @IsNumber()
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  precio: number;

  @IsNotEmpty()
  @IsNumber()
  @Column()
  id_estado: number;
}
