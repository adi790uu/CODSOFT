/*
  Warnings:

  - You are about to drop the `Cart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CartToBooks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_userId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_bookId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "_CartToBooks" DROP CONSTRAINT "_CartToBooks_A_fkey";

-- DropForeignKey
ALTER TABLE "_CartToBooks" DROP CONSTRAINT "_CartToBooks_B_fkey";

-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "rating" DROP NOT NULL;

-- DropTable
DROP TABLE "Cart";

-- DropTable
DROP TABLE "Comment";

-- DropTable
DROP TABLE "_CartToBooks";
