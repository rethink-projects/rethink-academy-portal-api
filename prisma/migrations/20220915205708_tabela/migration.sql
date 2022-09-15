/*
  Warnings:

  - You are about to drop the `gifreceived` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "gifreceived" DROP CONSTRAINT "gifreceived_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "receiveGIF" TEXT;

-- DropTable
DROP TABLE "gifreceived";
