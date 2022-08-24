-- DropForeignKey
ALTER TABLE "lesson" DROP CONSTRAINT "lesson_moduleId_fkey";

-- AddForeignKey
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "module"("id") ON DELETE CASCADE ON UPDATE CASCADE;
