import { z } from "zod"

export const eventSchema = z.object({
    name: z.string().nonempty(),
    generalTickets: z.number(),
    description: z.string(),
    dateTime: z.date()
})  