/*
  Warnings:

  - You are about to drop the column `cratedAt` on the `course` table. All the data in the column will be lost.
  - You are about to drop the column `imageTeacher` on the `course` table. All the data in the column will be lost.
  - You are about to drop the column `teacherDescription` on the `course` table. All the data in the column will be lost.
  - You are about to drop the column `teacherName` on the `course` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `course` table. All the data in the column will be lost.
  - You are about to drop the column `cratedAt` on the `lesson` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `trail` table. All the data in the column will be lost.
  - The `main` column on the `user` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `teacherId` to the `course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `lesson` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CourseStyle" AS ENUM ('COURSE', 'WORKSHOP', 'TRAINING', 'LECTURE');

-- AlterTable
ALTER TABLE "course" DROP COLUMN "cratedAt",
DROP COLUMN "imageTeacher",
DROP COLUMN "teacherDescription",
DROP COLUMN "teacherName",
DROP COLUMN "type",
ADD COLUMN     "teacherId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "lesson" DROP COLUMN "cratedAt",
ADD COLUMN     "order" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "trail" DROP COLUMN "imageUrl",
ADD COLUMN     "main" "Main" DEFAULT 'ENGINEERING';

-- AlterTable
ALTER TABLE "user" DROP COLUMN "main",
ADD COLUMN     "main" TEXT;

-- DropEnum
DROP TYPE "Types";

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
