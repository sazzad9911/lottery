import getUser from "@/functions/getUser";
import prisma from "@/utils/prisma";
import errorMessage from "@/validations/errorMessage";
import { eventSchema, eventUpdateSchema } from "@/validations/modelValidation";
import { NextRequest, NextResponse } from "next/server";

const createEvent = async (request: NextRequest) => {
    const token = request.headers.get("USER") as string
    try {
        const user = await getUser(token)
        if (!user?.isAdmin) return errorMessage(null, "admin")
        const data = await eventSchema.validate(await request.json())
        const event = await prisma.events.create({
            data: data
        })
        return NextResponse.json(event)
    } catch (error) {
        return errorMessage(error, null)
    }
}
const updateEvent = async (request: NextRequest) => {
    const token = request.headers.get("USER") as string
    try {
        const user = await getUser(token)
        if (!user?.isAdmin) return errorMessage(null, "admin")
        const data = await eventUpdateSchema.validate(await request.json())
        const event = await prisma.events.update({
            data: {
                description: data.description,
                title: data.title,
                image: data.image,
                ticketOpenFrom: data.ticketOpenFrom,
                ticketCloseTo: data.ticketCloseTo,
                drawDate: data.drawDate,
                ticketPrice: data.ticketPrice
            },
            where: {
                id: data.id
            }
        })
        return NextResponse.json(event)
    } catch (error) {
        return errorMessage(error, null)
    }
}
const deleteEvent = async (request: NextRequest) => {
    const id = request.nextUrl.searchParams.get("id")
    if (!id) return errorMessage(null, "id")
    try {
        const ev = await prisma.events.delete({
            where: {
                id: id
            }
        })
        return NextResponse.json(ev)
    } catch (error) {
        return errorMessage(error, null)
    }
}

export { createEvent as POST, updateEvent as PUT, deleteEvent as DELETE }