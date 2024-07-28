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
    live_link: string(),
})
const priceSchema = object({
    position: number().required(),
    amount: number().required(),
    description: string().max(500, "Description is too long").default(""),
    eventId: string().required()
})
const ticketSchema = object({
    amount: number().required().min(5, "Price is too low"),
    phone: string().required().length(11, "Phone number is invalid! Form 0**********"),
    eventId: string().required(),
    ref: string().default(""),
    quantity: number().required().min(1),
})
const paymentSchema = object({
    phone: string().required().length(11, "Phone number is invalid! Form 0**********"),
    quantity: number().required().min(1),
    amount: string().required(),
    eventId: string().required(),
    ref: string().default(""),
})
const paymentUrlSchema = object({
    phone: string().required().length(11, "Phone number is invalid! Form 0**********"),
    quantity: number().required().min(1),
    amount: string().required(),
    eventId: string().required(),
    ref: string().default(""),
    redirectUrl: string().required(),
    cancelUrl: string().required(),
})
const contactSchema = object({
    name: string().required(),
    phone: string().required().length(11, "Phone number is invalid! Form 0**********"),
    message: string().required(),
    point: string().required()
})
const resultSchema = object({
    ticket_number: number().required(),
    eventId: string().required(),
    positionId: string().required()
})
const userSchema = object({
    name: string().required(),
    password: string().required().min(4).max(16),
    token: string().required(),
    username: string().required().max(6)
})
const walletSchema = object({
    userId: string().required(),
    amount: number().required(),
    accountNumber: string().required().min(11, "Invalid number").max(12, "Invalid Number"),
    accountType: string().required(),
    walletType: string().required()
})
export {
    eventSchema, eventUpdateSchema, priceSchema, ticketSchema,
    paymentSchema, paymentUrlSchema,
    contactSchema, resultSchema, userSchema, walletSchema
}