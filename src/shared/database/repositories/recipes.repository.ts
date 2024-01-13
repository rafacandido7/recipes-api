import { Injectable } from '@nestjs/common'
import { type Prisma } from '@prisma/client'

import { PrismaService } from '../prisma.service'

@Injectable()
export class RecipesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.RecipeCreateArgs) {
    return this.prismaService.recipe.create(createDto)
  }

  findMany(findManyDto: Prisma.RecipeFindManyArgs) {
    return this.prismaService.recipe.findMany(findManyDto)
  }

  findFirst(findFirstDto: Prisma.RecipeFindFirstArgs) {
    return this.prismaService.recipe.findFirst(findFirstDto)
  }

  update(updateDto: Prisma.RecipeUpdateArgs) {
    return this.prismaService.recipe.update(updateDto)
  }

  delete(deleteDto: Prisma.RecipeDeleteArgs) {
    return this.prismaService.recipe.delete(deleteDto)
  }
}
