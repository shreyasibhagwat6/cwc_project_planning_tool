/*
  Warnings:

  - Added the required column `email` to the `Cwcname` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Cwcname` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Cwcname` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Cwcname` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cwcname` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `email` VARCHAR(255) NOT NULL,
    ADD COLUMN `password` VARCHAR(255) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `username` VARCHAR(255) NOT NULL,
    MODIFY `name` VARCHAR(255) NOT NULL;
