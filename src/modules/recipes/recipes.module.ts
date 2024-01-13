import { Module } from '@nestjs/common'
import { RecipesService } from './recipes.service'
import { RecipesController } from './recipes.controller'

import { IngredientsService } from '../ingredients/ingredients.service'
import { IngredientsModule } from '../ingredients/ingredients.module'

@Module({
  controllers: [RecipesController],
  providers: [RecipesService, IngredientsService],
  imports: [IngredientsModule],
})
export class RecipesModule {}
