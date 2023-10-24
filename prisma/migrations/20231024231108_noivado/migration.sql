-- CreateTable
CREATE TABLE "gifts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "choseBy" TEXT NOT NULL,

    CONSTRAINT "gifts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "guests" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "guests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "gifts_id_key" ON "gifts"("id");

-- CreateIndex
CREATE UNIQUE INDEX "guests_id_key" ON "guests"("id");

-- CreateIndex
CREATE UNIQUE INDEX "guests_code_key" ON "guests"("code");
