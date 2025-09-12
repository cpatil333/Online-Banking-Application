-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'USER';
