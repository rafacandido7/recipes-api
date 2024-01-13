import { Injectable } from '@nestjs/common'
import { type Prisma } from '@prisma/client'

import { PrismaService } from '../prisma.service'

@Injectable()
export class IngredientsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.IngredientCreateArgs) {
    return this.prismaService.ingredient.create(createDto)
  }

  findMany(findManyDto: Prisma.IngredientFindManyArgs) {
    return this.prismaService.ingredient.findMany(findManyDto)
  }

  findFirst(findFirstDto: Prisma.IngredientFindFirstArgs) {
    return this.prismaService.ingredient.findFirst(findFirstDto)
  }

  update(updateDto: Prisma.IngredientUpdateArgs) {
    return this.prismaService.ingredient.update(updateDto)
  }

  delete(deleteDto: Prisma.IngredientDeleteArgs) {
    return this.prismaService.ingredient.delete(deleteDto)
  }
}
