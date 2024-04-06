-- CreateTable
CREATE TABLE `Delivery` (
    `id` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `total` INTEGER NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `businessName` VARCHAR(191) NOT NULL,
    `businessId` VARCHAR(191) NOT NULL,
    `jan_total` INTEGER NOT NULL,
    `feb_total` INTEGER NOT NULL,
    `mar_total` INTEGER NOT NULL,
    `apr_total` INTEGER NOT NULL,
    `may_total` INTEGER NOT NULL,
    `jun_total` INTEGER NOT NULL,
    `jul_total` INTEGER NOT NULL,
    `aug_total` INTEGER NOT NULL,
    `sep_total` INTEGER NOT NULL,
    `oct_total` INTEGER NOT NULL,
    `nov_total` INTEGER NOT NULL,
    `dec_total` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
