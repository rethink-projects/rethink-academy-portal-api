/*
  Warnings:

  - You are about to drop the column `title` on the `user` table. All the data in the column will be lost.
  - Made the column `role` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Levels" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- AlterTable
ALTER TABLE "user" DROP COLUMN "title",
ADD COLUMN     "main" TEXT,
ADD COLUMN     "watched" TEXT[],
ALTER COLUMN "role" SET NOT NULL;

-- DropEnum
DROP TYPE "Titles";

-- CreateTable
CREATE TABLE "trail" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,

    CONSTRAINT "trail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "course" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "level" "Levels" NOT NULL,
    "workload" INTEGER NOT NULL,
    "learning" TEXT NOT NULL,
    "skills" TEXT NOT NULL,
    "trailId" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,

    CONSTRAINT "course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lesson" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "embedUrl" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "moduleId" TEXT NOT NULL,

    CONSTRAINT "lesson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "module" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,

    CONSTRAINT "module_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "trail_name_key" ON "trail"("name");

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_trailId_fkey" FOREIGN KEY ("trailId") REFERENCES "trail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "module"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "module" ADD CONSTRAINT "module_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
