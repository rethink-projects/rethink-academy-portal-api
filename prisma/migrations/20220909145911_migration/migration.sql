-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "surname" TEXT,
    "role" TEXT DEFAULT 'STUDENT',
    "main" TEXT DEFAULT 'ENGINEERING',
    "avatar" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "badges" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
    CONSTRAINT "badges_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Bucket" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Bucket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "taskDate" DATETIME NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "tags" TEXT NOT NULL DEFAULT 'tags',
    "status" TEXT NOT NULL DEFAULT 'status',
    "description" TEXT NOT NULL DEFAULT 'description',
    "userId" TEXT NOT NULL,
    CONSTRAINT "tasks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "profile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bio" TEXT,
    "avatar" TEXT,
    "social" TEXT,
    "userId" TEXT NOT NULL,
    CONSTRAINT "profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "badges_userId_key" ON "badges"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Bucket_userId_key" ON "Bucket"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "profile_userId_key" ON "profile"("userId");
