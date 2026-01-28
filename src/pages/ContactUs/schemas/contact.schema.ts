import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(7, "Phone number is required")
    .regex(/^[0-9+\-\s()]+$/, "Invalid phone number"),
  message: z
    .string()
    .max(500, "Message is too long")
    .optional()
    .or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const referralSchema = z.object({
  yourName: z.string().min(1, "Your name is required"),
  friendPhone: z.string().min(7, "Friend phone is required"),
  friendEmail: z.string().email("Invalid email address"),
});

export type ReferralFormData = z.infer<typeof referralSchema>;
