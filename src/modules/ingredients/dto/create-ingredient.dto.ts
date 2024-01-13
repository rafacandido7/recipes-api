import { IsNotEmpty, IsString, IsNumber, IsEnum, Min } from 'class-validator'

import { Measurement } from '../entities/Measurement.entity'

export class CreateIngredientDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  quantity: number

  @IsNotEmpty()
  @IsEnum(Measurement)
  measurement: Measurement
}
