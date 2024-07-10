import { object, string, number, date, InferType, boolean } from 'yup';
const eventSchema = object({
    title: string().required().max(100, "Title is too long"),
    description: string().required().max(500, "Description is too long"),
    image: string().required(),
    ticketOpenFrom: date().required(),
    ticketCloseTo: date().required(),
    drawDate: date().required(),
    ticketPrice: number().required(),
    live_link: string().required()
})
const eventUpdateSchema = object({
    title: string().max(100, "Title is too long"),
    description: string().max(500, "Description is too long"),
    image: string(),
    ticketOpenFrom: date(),
    ticketCloseTo: date(),
    drawDate: date(),
    ticketPrice: number(),
    id: string().required("id is required!"),
    live_link: string()
})
const priceSchema = object({
    position: number().required(),
    amount: number().required(),
    description: string().max(500, "Description is too long").default(""),
    eventId: string().required()
})
export {
    eventSchema, eventUpdateSchema,priceSchema
}