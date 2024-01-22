import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common'
import { ApiBody, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger'

import { RecipesService } from './recipes.service'

import { CreateRecipeDto } from './dto/create-recipe.dto'
import { RecipeDto } from './dto/recipe.dto'

@ApiTags('Recipes')
@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post()
  @ApiBody({ type: CreateRecipeDto })
  @ApiCreatedResponse({
    description: 'Recipe created successfully',
    type: RecipeDto,
  })
  async create(@Body() createRecipeDto: CreateRecipeDto) {
    return await this.recipesService.create(createRecipeDto)
  }

  @Get()
  @ApiOkResponse({
    description: 'Array of recipes',
    type: RecipeDto,
    isArray: true,
  })
  findAll() {
    return this.recipesService.findAll()
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Recipe found',
    type: RecipeDto,
  })
  findOne(@Param('id') id: string) {
    return this.recipesService.findOne(id)
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Recipe deleted successfully',
  })
  @ApiNotFoundResponse({
    description: 'Recipe not found',
  })
  remove(@Param('id') id: string) {
    return this.recipesService.remove(id)
  }
}
