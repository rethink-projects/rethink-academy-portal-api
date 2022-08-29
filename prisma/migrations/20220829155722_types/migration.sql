-- CreateEnum
CREATE TYPE "Types" AS ENUM ('COURSE', 'WORKSHOP', 'TRAINING', 'LECTURE');

-- AlterTable
ALTER TABLE "course" ADD COLUMN     "type" "Types";
