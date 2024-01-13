import { IsNotEmpty, IsString, IsNumber, IsEnum } from 'class-validator'

import { Measurement } from '../entities/Measurement.entity'

export class CreateIngredientDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsNumber()
  quantity: number

  @IsNotEmpty()
  @IsEnum(Measurement)
  measurement: Measurement
}
