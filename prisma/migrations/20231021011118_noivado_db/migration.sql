-- CreateTable
CREATE TABLE "gifts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "choseBy" TEXT NOT NULL DEFAULT 'Livre'
);

-- CreateTable
CREATE TABLE "guests" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT ''
);

-- CreateIndex
CREATE UNIQUE INDEX "gifts_id_key" ON "gifts"("id");

-- CreateIndex
CREATE UNIQUE INDEX "guests_id_key" ON "guests"("id");

-- CreateIndex
CREATE UNIQUE INDEX "guests_code_key" ON "guests"("code");
