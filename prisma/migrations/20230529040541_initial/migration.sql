-- CreateEnum
CREATE TYPE "Greeting" AS ENUM ('HELLO', 'HOWDY');

-- CreateTable
CREATE TABLE "Hello" (
    "id" SERIAL NOT NULL,
    "greeting" "Greeting" NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Hello_pkey" PRIMARY KEY ("id")
);
