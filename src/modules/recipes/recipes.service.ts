import { Injectable } from '@nestjs/common'

import { CreateRecipeDto } from './dto/create-recipe.dto'

import { RecipesRepository } from '@/shared/database/repositories/recipes.repository'
import { IngredientsService } from '../ingredients/ingredients.service'

@Injectable()
export class RecipesService {
  constructor(
    private readonly recipesRepository: RecipesRepository,
    private readonly ingredientsService: IngredientsService,
  ) {}

  async create(createRecipeDto: CreateRecipeDto) {
    const {
      name,
      cost,
      description,
      difficulty,
      imagePath,
      portions,
      steps,
      time,
      ingredients,
    } = createRecipeDto

    const recipe = await this.recipesRepository.create({
      data: {
        name,
        cost,
        description,
        difficulty,
        imagePath,
        portions,
        steps,
        time,
      },
    })

    if (!recipe) {
      throw new Error('Error on create recipe')
    }

    const { id: recipeId } = recipe

    const ingredientsRecipe = await this.ingredientsService.createIngredients(
      ingredients,
      recipeId,
    )

    if (!ingredientsRecipe) {
      throw new Error('Error on create ingredientrs')
    }

    return recipe
  }

  async findAll() {
    return await this.recipesRepository.findMany({})
  }

  async findOne(id: string) {
    return await this.recipesRepository.findFirst({ where: { id } })
  }

  async remove(id: string) {
    return await this.recipesRepository.delete({ where: { id } })
  }
}
