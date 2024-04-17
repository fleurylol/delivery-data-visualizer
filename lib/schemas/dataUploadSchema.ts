import { z } from "zod";

export const dataUploadSchema = z.object({
  address: z.string().min(1, "Address cannot be empty"),
  count: z.number().int().positive("Count must be a positive number"),
  month: z
    .enum([
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ])
    .optional(),
});
