import { z } from "zod";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const signUpSchema = z
  .object({
    email: z.string().email().regex(emailRegex, "Invalid email format"),
    password: z.string().min(4).max(8),
    confirmPassword: z.string().min(4).max(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const loginSchema = z.object({
  email: z.string().email().regex(emailRegex, "Invalid email format"),
  password: z.string().min(4).max(8),
});

export { signUpSchema, loginSchema };
