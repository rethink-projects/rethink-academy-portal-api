-- CreateEnum
CREATE TYPE "Titles" AS ENUM ('ENGINEERING', 'DESIGN', 'PRODUCT');

-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('STUDENT', 'AMBASSADOR', 'RETHINKER');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "surname" TEXT,
    "role" "Roles" DEFAULT 'STUDENT',
    "main" "Titles" DEFAULT 'ENGINEERING',
    "avatar" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "badges" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "product" INTEGER NOT NULL DEFAULT 0,
    "engineering" INTEGER NOT NULL DEFAULT 0,
    "academy" INTEGER NOT NULL DEFAULT 0,
    "design" INTEGER NOT NULL DEFAULT 0,
    "welcome" INTEGER NOT NULL DEFAULT 0,
    "studies" INTEGER NOT NULL DEFAULT 0,
    "timeRecord" INTEGER NOT NULL DEFAULT 0,
    "troll" INTEGER NOT NULL DEFAULT 0,
    "goals" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "badges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bucket" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Bucket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "badges_userId_key" ON "badges"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Bucket_userId_key" ON "Bucket"("userId");

-- AddForeignKey
ALTER TABLE "badges" ADD CONSTRAINT "badges_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bucket" ADD CONSTRAINT "Bucket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
