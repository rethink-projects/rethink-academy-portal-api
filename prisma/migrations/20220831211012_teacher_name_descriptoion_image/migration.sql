/*
  Warnings:

  - You are about to drop the column `teacherId` on the `course` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "course" DROP CONSTRAINT "course_teacherId_fkey";

-- AlterTable
ALTER TABLE "course" DROP COLUMN "teacherId";
