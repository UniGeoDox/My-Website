import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    // Require a title so every post renders nicely
    title: z.string(),

    // Require a date and ensure it parses as a real date
    // (Astro will give you a Date at runtime)
    date: z.coerce.date(),

    // Optional but recommended
    summary: z.string().optional(),

    // Optional cover path, but enforce it looks like a site path
    // Example: "/images/covers/first.jpg"
    cover: z.string().startsWith("/").optional(),

    // Default draft to false if omitted
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
