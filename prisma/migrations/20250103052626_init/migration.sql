/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Template" (
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "id" TEXT NOT NULL,

    CONSTRAINT "Template_pkey" PRIMARY KEY ("name")
);
