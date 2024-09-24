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


const radiocypherSchema = z.object({
    title: z.string(),
    audioUrl: z.string(),
    pubDate: z.coerce.date().optional(),
    cover: z.string().optional(),
    explicit: z.boolean().optional(),
    radiocypher: z.number().optional(),
    season: z.number().optional(),
    radiocypherType: z.string().optional(),
    duration: z.coerce.string(), //duration in format hh:mm:ss
    size: z.number(), // size in megabytes
});

export type radiocypherSchema = z.infer<typeof radiocypherSchema>;
export type episodeSchema = z.infer<typeof episodeSchema>;


const episodeCollection = defineCollection({ schema: episodeSchema });
const radiocypherCollection = defineCollection({ schema: radiocypherSchema });


export const collections = {
    'episode': episodeCollection,
    'radiocypher': radiocypherCollection,
}

