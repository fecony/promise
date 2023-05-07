/*
  Warnings:

  - You are about to drop the `SocialAuth` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `authorId` on the `Promise` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "SocialAuth_provider_providerId_userId_key";

-- DropIndex
DROP INDEX "User_email_key";

-- DropIndex
DROP INDEX "User_username_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "SocialAuth";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Promise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "isDone" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Promise" ("createdAt", "id", "isDone", "text", "updatedAt") SELECT "createdAt", "id", "isDone", "text", "updatedAt" FROM "Promise";
DROP TABLE "Promise";
ALTER TABLE "new_Promise" RENAME TO "Promise";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
