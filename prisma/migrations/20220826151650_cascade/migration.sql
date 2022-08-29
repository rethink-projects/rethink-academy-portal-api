-- DropForeignKey
ALTER TABLE "course" DROP CONSTRAINT "course_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "course" DROP CONSTRAINT "course_trailId_fkey";

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_trailId_fkey" FOREIGN KEY ("trailId") REFERENCES "trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
