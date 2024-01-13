import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common'
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger'

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
  findAll() {
    return this.recipesService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipesService.findOne(id)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipesService.remove(id)
  }
}
