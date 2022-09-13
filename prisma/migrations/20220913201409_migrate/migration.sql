-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('STUDENT', 'AMBASSADOR', 'RETHINKER');

-- CreateEnum
CREATE TYPE "Titles" AS ENUM ('ENGINEERING', 'DESIGN', 'PRODUCT');

-- CreateEnum
CREATE TYPE "Main" AS ENUM ('ENGINEERING', 'DESIGN', 'PRODUCT');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "surname" TEXT,
    "role" "Roles" NOT NULL DEFAULT 'STUDENT',
    "main" "Main" NOT NULL DEFAULT 'ENGINEERING',
    "avatar" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "note" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "content" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categories" TEXT,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,

    CONSTRAINT "note_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "info" (
    "id" TEXT NOT NULL,
    "college" TEXT,
    "semester" TEXT,
    "workTime" TEXT,
    "transportationVoucher" TEXT,
    "providedEquipment" TEXT,
    "status" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "badges" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "product" TEXT[],
    "engineering" TEXT[],
    "academy" TEXT[],
    "design" TEXT[],
    "welcome" TEXT[],
    "studies" TEXT[],
    "timeRecord" TEXT[],
    "troll" TEXT[],
    "goals" TEXT[],

    CONSTRAINT "badges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "monthEvaluate" (
    "id" TEXT NOT NULL,
    "skillType" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "skill1" INTEGER NOT NULL,
    "skill2" INTEGER NOT NULL,
    "skill3" INTEGER NOT NULL,
    "skill4" INTEGER NOT NULL,
    "skill5" INTEGER NOT NULL,
    "skill6" INTEGER NOT NULL,

    CONSTRAINT "monthEvaluate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bucket" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Bucket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "goalList" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "goalList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "goal" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "conclude" BOOLEAN NOT NULL,
    "goalListId" TEXT NOT NULL,

    CONSTRAINT "goal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "taskDate" TIMESTAMP(3) NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "tags" TEXT NOT NULL DEFAULT 'tags',
    "status" TEXT NOT NULL DEFAULT 'status',
    "description" TEXT NOT NULL DEFAULT 'description',
    "userId" TEXT NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "info_userId_key" ON "info"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "badges_userId_key" ON "badges"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Bucket_userId_key" ON "Bucket"("userId");

-- AddForeignKey
ALTER TABLE "note" ADD CONSTRAINT "note_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "info" ADD CONSTRAINT "info_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "badges" ADD CONSTRAINT "badges_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "monthEvaluate" ADD CONSTRAINT "monthEvaluate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bucket" ADD CONSTRAINT "Bucket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goalList" ADD CONSTRAINT "goalList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goal" ADD CONSTRAINT "goal_goalListId_fkey" FOREIGN KEY ("goalListId") REFERENCES "goalList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
