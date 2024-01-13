import { CreateIngredientDto } from '@/modules/ingredients/dto/create-ingredient.dto'

import { IngredientsRepository } from '@/shared/database/repositories/ingredients.repository'
import { Injectable } from '@nestjs/common'

@Injectable()
export class IngredientsService {
  constructor(private readonly ingredientsRepository: IngredientsRepository) {}

  async createIngredient(
    createIngredientDto: CreateIngredientDto,
    recipeId: string,
  ) {
    const { name, quantity, measurement } = createIngredientDto

    return await this.ingredientsRepository.create({
      data: {
        recipeId,
        name,
        quantity,
        measurement,
      },
    })
  }

  async createIngredients(
    createIngredientsDto: CreateIngredientDto[],
    recipeId: string,
  ) {
    const createIngredientPromises = createIngredientsDto.map(
      async (ingredientDto) => {
        const { name, quantity, measurement } = ingredientDto

        return this.ingredientsRepository.create({
          data: {
            recipeId,
            name,
            quantity,
            measurement,
          },
        })
      },
    )

    return await Promise.all(createIngredientPromises)
  }

  async getIngredientsByRecipeId(recipeId: string) {
    return await this.ingredientsRepository.findMany({
      where: { recipeId },
    })
  }
}
