/*
  Warnings:

  - A unique constraint covering the columns `[address]` on the table `Delivery` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Delivery_address_key` ON `Delivery`(`address`);
