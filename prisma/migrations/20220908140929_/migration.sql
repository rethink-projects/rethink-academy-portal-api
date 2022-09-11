/*
  Warnings:

  - You are about to drop the column `teacherId` on the `course` table. All the data in the column will be lost.
  - Added the required column `imageTeacher` to the `course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherDescription` to the `course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherName` to the `course` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "course" DROP CONSTRAINT "course_teacherId_fkey";

-- AlterTable
ALTER TABLE "course" DROP COLUMN "teacherId",
ADD COLUMN     "cratedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "imageTeacher" TEXT NOT NULL,
ADD COLUMN     "teacherDescription" TEXT NOT NULL,
ADD COLUMN     "teacherName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "lesson" ADD COLUMN     "cratedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "profile" ADD COLUMN     "cratedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "timeline" ADD COLUMN     "cratedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "trail" ADD COLUMN     "cratedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "cratedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
