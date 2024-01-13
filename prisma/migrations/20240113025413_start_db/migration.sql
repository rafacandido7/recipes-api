-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('EASY', 'NORMAL', 'HARD');

-- CreateEnum
CREATE TYPE "Cost" AS ENUM ('CHEAP', 'NORMAL', 'EXPENSIVE');

-- CreateEnum
CREATE TYPE "Measurement" AS ENUM ('XICARA', 'COLHER_DE_SOPA', 'COLHER_DE_CHA', 'GRAMA', 'QUILOGRAMA', 'UNIDADE');

-- CreateTable
CREATE TABLE "recipes" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "time" DOUBLE PRECISION NOT NULL,
    "difficulty" "Difficulty" NOT NULL,
    "cost" "Cost" NOT NULL,
    "portions" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "steps" TEXT[],

    CONSTRAINT "recipes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ingredients" (
    "id" UUID NOT NULL,
    "recipeId" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "measurement" "Measurement" NOT NULL,
    "formattedQuantity" TEXT NOT NULL,

    CONSTRAINT "ingredients_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ingredients" ADD CONSTRAINT "ingredients_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
