import { z } from "zod";

export const nameSchema = z
  .string()
  .refine((value) => /^[A-Za-z\s]+$/.test(value), {
    message: "Name can only contain letters and spaces.",
  })
  .refine((value) => value.length >= 3, {
    message: "Name must be at least 3 characters long.",
  })
  .refine((value) => value.length <= 50, {
    message: "Name cannot exceed 50 characters.",
  });

export const emailSchema = z
  .string()
  .email({
    message: "Invalid email format.",
  })
  .refine((value) => value.length <= 100, {
    message: "Email cannot exceed 100 characters.",
  });
