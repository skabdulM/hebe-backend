import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  productName?: string;

  @IsString()
  @IsOptional()
  productDescription?: string;

  @IsNumber()
  @IsOptional()
  productPrice?: number;

  @IsString()
  @IsOptional()
  productImg?: string;
  
  @IsString()
  category?: string;
}
