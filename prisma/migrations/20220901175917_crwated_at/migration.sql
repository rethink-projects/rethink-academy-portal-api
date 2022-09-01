/*
  Warnings:

  - You are about to drop the column `order` on the `lesson` table. All the data in the column will be lost.
  - You are about to drop the column `order` on the `module` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "course" ADD COLUMN     "cratedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "lesson" DROP COLUMN "order",
ADD COLUMN     "cratedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "module" DROP COLUMN "order",
ADD COLUMN     "cratedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
