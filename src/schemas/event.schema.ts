import { z } from "zod"

export const createEventSchema = z.object({
    body: z.object ({
        name: z.string().min(1, "name is required"),
        generalTickets: z.number().min(1, "Quantity of general tickets is required"),
        description: z.string().min(5, "Description is too short"),
        dateTime: z.string().min(1, "date is required")
    })
})

export const updateEventSchema = z.object({
    body: z.object ({
        name: z.string().min(1, "name is required").optional(),
        generalTickets: z.number().min(1, "Quantity of general tickets is required").optional(),
        description: z.string().min(5, "Description is too short").optional(),
        dateTime: z.string().min(1, "date is required").optional()
    }),
    params: z.object({
        id: z.string().min(1)
    }),
})
