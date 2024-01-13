import { Module } from '@nestjs/common'

import { DatabaseModule } from '@/shared/database/database.module'

import { RecipesModule } from './modules/recipes/recipes.module'
import { IngredientsModule } from './modules/ingredients/ingredients.module'

@Module({
  imports: [DatabaseModule, RecipesModule, IngredientsModule],
})
export class AppModule {}
