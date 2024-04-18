/*
  Warnings:

  - A unique constraint covering the columns `[month]` on the table `MonthStatus` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `MonthStatus_month_key` ON `MonthStatus`(`month`);
