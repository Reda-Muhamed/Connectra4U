import { z } from "zod";

export const ProfileValidation = z.object({
  cover: z.custom<File[]>(),
  avatar: z.custom<File[]>(),
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  surname: z
    .string()
    .min(3, { message: "Name must be at least 3 characters." }),
  username: z
    .string()
    .min(3, { message: "Name must be at least 3 characters." }),
  school: z.string(),
  work: z.string(),
  faculty: z.string(),
  bio: z.string(),
  city: z.string(),
  linkedin: z.string(),
  github: z.string(),
});
