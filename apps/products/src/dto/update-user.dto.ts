import { IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator';
export class UpdateProductDto {
  @IsNotEmpty()
  @IsNumber()
  sku?: number;

  @IsNotEmpty()
  @IsNumber()
  id_categoria?: number;

  @IsNotEmpty()
  @IsString()
  nombre_producto?: string;

  @IsString()
  descripcion?: string;

  @IsNotEmpty()
  @IsNumber()
  precio?: number;

  @IsNotEmpty()
  @IsNumber()
  id_estado?: number;
}
