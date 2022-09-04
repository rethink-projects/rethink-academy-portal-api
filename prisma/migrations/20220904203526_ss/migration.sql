/*
  Warnings:

  - Made the column `main` on table `trail` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "trail" ALTER COLUMN "main" SET NOT NULL;
