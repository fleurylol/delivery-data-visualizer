-- CreateTable
CREATE TABLE `MonthData` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jan_data` BOOLEAN NOT NULL DEFAULT false,
    `feb_data` BOOLEAN NOT NULL DEFAULT false,
    `mar_data` BOOLEAN NOT NULL DEFAULT false,
    `apr_data` BOOLEAN NOT NULL DEFAULT false,
    `may_data` BOOLEAN NOT NULL DEFAULT false,
    `jun_data` BOOLEAN NOT NULL DEFAULT false,
    `jul_data` BOOLEAN NOT NULL DEFAULT false,
    `aug_data` BOOLEAN NOT NULL DEFAULT false,
    `sep_data` BOOLEAN NOT NULL DEFAULT false,
    `oct_data` BOOLEAN NOT NULL DEFAULT false,
    `nov_data` BOOLEAN NOT NULL DEFAULT false,
    `dec_data` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
