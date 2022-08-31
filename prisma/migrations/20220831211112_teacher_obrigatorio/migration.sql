/*
  Warnings:

  - Made the column `imageTeacher` on table `course` required. This step will fail if there are existing NULL values in that column.
  - Made the column `teacherDescription` on table `course` required. This step will fail if there are existing NULL values in that column.
  - Made the column `teacherName` on table `course` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "course" ALTER COLUMN "imageTeacher" SET NOT NULL,
ALTER COLUMN "teacherDescription" SET NOT NULL,
ALTER COLUMN "teacherName" SET NOT NULL;
