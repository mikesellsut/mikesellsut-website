import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().default('Mike Price'),
    category: z.enum([
      'Market Updates',
      'Neighborhood Guides',
      'Buyer Tips',
      'Seller Tips',
      'Community Events',
      'Utah Living',
    ]),
    featured_image: z.string().optional(),
    excerpt: z.string(),
    published: z.boolean().default(true),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    client_name: z.string(),
    quote: z.string(),
    client_photo: z.string().optional(),
    date: z.date().optional(),
    featured: z.boolean().default(false),
  }),
});

const areas = defineCollection({
  type: 'content',
  schema: z.object({
    area_name: z.string(),
    county: z.enum(['Sanpete', 'Sevier', 'Millard', 'Juab']),
    description: z.string(),
    photo: z.string().optional(),
    market_highlights: z.string().optional(),
    towns: z.array(z.string()),
  }),
});

export const collections = { blog, testimonials, areas };
