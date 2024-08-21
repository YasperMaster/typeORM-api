import { query } from "express"
import { z } from "zod"

export const createEventSchema = z.object({
    body: z.object ({
        name: z.string(),
        generalTickets: z.number(),
        description: z.string(),
        dateTime: z.string()
    })
})

export const updateEventSchema = z.object({
    body: z.object ({
        name: z.string().optional(),
        generalTickets: z.number().optional(),
        description: z.string().optional(),
        dateTime: z.string().optional()
    }),
    params: z.object({
        id: z.string().min(3)
    }),
    query: z.object({
        title: z.string()
    })
})

export type createEventType = z.infer<typeof createEventSchema>["body"]

export type updateEventBodyType = z.infer<typeof updateEventSchema>["body"]
export type updateEventParamsType = z.infer<typeof updateEventSchema>["params"]
export type updateEventQueryType = z.infer<typeof updateEventSchema>["query"]