-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_gifts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "choseBy" TEXT NOT NULL
);
INSERT INTO "new_gifts" ("choseBy", "id", "name") SELECT "choseBy", "id", "name" FROM "gifts";
DROP TABLE "gifts";
ALTER TABLE "new_gifts" RENAME TO "gifts";
CREATE UNIQUE INDEX "gifts_id_key" ON "gifts"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
