/*
  Warnings:

  - You are about to drop the `MonthData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `MonthData`;

-- CreateTable
CREATE TABLE `MonthStatus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `month` VARCHAR(191) NOT NULL,
    `data` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
