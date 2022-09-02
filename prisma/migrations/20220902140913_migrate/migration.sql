/*
  Warnings:

  - You are about to drop the column `userId` on the `goal` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_goal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "conclude" BOOLEAN NOT NULL,
    "goalListId" TEXT NOT NULL,
    CONSTRAINT "goal_goalListId_fkey" FOREIGN KEY ("goalListId") REFERENCES "goalList" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_goal" ("conclude", "goalListId", "id", "title") SELECT "conclude", "goalListId", "id", "title" FROM "goal";
DROP TABLE "goal";
ALTER TABLE "new_goal" RENAME TO "goal";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
