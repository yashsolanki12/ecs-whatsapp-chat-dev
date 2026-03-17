import { z } from "zod";

export const phoneSchema = z.object({
  phone_number: z
    .string()
    .min(1, { message: "Phone number is required" })
    .refine((val) => val === "" || /^\d+$/.test(val), {
      message: "Only digits are allowed in phone number",
    }),

  country_code: z
    .string()
    .min(1, { message: "Country code is required." })
    .refine((val) => val === "" || /^\+\d{1,5}/.test(val), {
      message: "Country code must start with '+', 1 to 5 digits (e.g., +91).",
    }),
});
