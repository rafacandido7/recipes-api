import { Global, Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'

import { IngredientsRepository } from './repositories/ingredients.repository'
import { RecipesRepository } from './repositories/recipes.repository'

@Global()
@Module({
  providers: [PrismaService, IngredientsRepository, RecipesRepository],
  exports: [IngredientsRepository, RecipesRepository],
})
export class DatabaseModule {}
