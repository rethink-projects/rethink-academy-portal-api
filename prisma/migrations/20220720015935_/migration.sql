/*
  Warnings:

  - You are about to drop the `role` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `social` to the `profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('STUDENT', 'EMBASSADOR', 'RETHINKER');

-- DropForeignKey
ALTER TABLE "role" DROP CONSTRAINT "role_userId_fkey";

-- AlterTable
ALTER TABLE "profile" ADD COLUMN     "social" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "role" "Roles" NOT NULL;

-- DropTable
DROP TABLE "role";
