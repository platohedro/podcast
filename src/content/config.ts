import { z, defineCollection } from "astro:content";

const episodeSchema = z.object({
    title: z.string(),
    audioUrl: z.string(),
    pubDate: z.coerce.date().optional(),
    cover: z.string().optional(),
    explicit: z.boolean().optional(),
    episode: z.number().optional(),
    season: z.number().optional(),
    episodeType: z.string().optional(),
    duration: z.coerce.string(), //duration in format hh:mm:ss
    size: z.number(), // size in megabytes
});

const pepasSchema = z.object({
    title: z.string(),
    audioUrl: z.string(),
    pubDate: z.coerce.date().optional(),
    cover: z.string().optional(),
    explicit: z.boolean().optional(),
    pepas: z.number().optional(),
    season: z.number().optional(),
    pepasType: z.string().optional(),
    duration: z.coerce.string(), //duration in format hh:mm:ss
    size: z.number(), // size in megabytes
});

export type episodeSchema = z.infer<typeof episodeSchema>;
export type pepasdeSchema = z.infer<typeof pepasSchema>;

const episodeCollection = defineCollection({ schema: episodeSchema });
const pepasCollection = defineCollection({ schema: pepasSchema });

export const collections = {
    'episode': episodeCollection,
    'pepas': pepasCollection,
}

