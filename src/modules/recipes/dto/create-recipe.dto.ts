import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator'
import { Type } from 'class-transformer'

import { Difficulty } from '../entities/Difficulty.entity'
import { Cost } from '../entities/Cost.entity'

import { CreateIngredientDto } from '@/modules/ingredients/dto/create-ingredient.dto'

export class CreateRecipeDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  description: string

  @IsNotEmpty()
  @IsNumber()
  time: number

  @IsNotEmpty()
  @IsEnum(Difficulty)
  difficulty: Difficulty

  @IsNotEmpty()
  @IsEnum(Cost)
  cost: Cost

  @IsNotEmpty()
  @IsString()
  portions: string

  @IsOptional()
  @IsString()
  imagePath: string

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  steps: string[]

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateIngredientDto)
  @ArrayMinSize(1)
  ingredients: CreateIngredientDto[]
}
