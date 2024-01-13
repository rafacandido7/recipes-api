import { OmitType } from '@nestjs/swagger'
import { CreateRecipeDto } from './create-recipe.dto'
import { IsNotEmpty, IsString, IsUUID } from 'class-validator'

export class RecipeDto extends OmitType(CreateRecipeDto, [
  'ingredients',
] as const) {
  @IsUUID()
  @IsNotEmpty()
  id: string
}
