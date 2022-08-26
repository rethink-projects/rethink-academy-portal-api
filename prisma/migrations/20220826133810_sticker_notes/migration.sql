-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_stickerNotes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "data" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "priority" INTEGER DEFAULT 3,
    "userId" TEXT NOT NULL,
    CONSTRAINT "stickerNotes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_stickerNotes" ("data", "description", "id", "priority", "userId") SELECT "data", "description", "id", "priority", "userId" FROM "stickerNotes";
DROP TABLE "stickerNotes";
ALTER TABLE "new_stickerNotes" RENAME TO "stickerNotes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
