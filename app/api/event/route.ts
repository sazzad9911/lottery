import cache from "@/functions/cache";
import prisma from "@/utils/prisma";
import errorMessage from "@/validations/errorMessage";
import { paymentSchema, ticketSchema } from "@/validations/modelValidation";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
interface RequestCount {
    quantity: number;
    ref: string;
    amount: number;
    eventId: string;
}

const generateUnique7DigitNumber = async (): Promise<number> => {
    let unique = false;
    let uniqueNumber: number = 1334543;

    while (!unique) {
        // Generate a random 7-digit number
        uniqueNumber = Math.floor(1000000 + Math.random() * 9000000);

        // Check if the number exists in the database
        const existingRecord = await prisma.tickets.findUnique({
            where: {
                ticket_number: uniqueNumber
            }
        });

        // If no record is found, the number is unique
        if (!existingRecord) {
            unique = true;
        }
    }

    return uniqueNumber;
};

const acceptTicket = async (request: NextRequest) => {

    try {
        const data = await ticketSchema.validate(await request.json())
        if (!data) return NextResponse.json({ error: "Data not not found" }, { status: 404 })
        const tickets = [];
        for (let i = 0; i < data.quantity; i++) {
            const ticketNumber = await generateUnique7DigitNumber();
            const ticket = await prisma.tickets.create({
                data: {
                    phone: `+88${data.phone}`,
                    price: (data.amount / data.quantity),
                    eventId: data.eventId,
                    ref: data.ref,
                    ticket_number: ticketNumber
                }
            });
            tickets.push(ticket);
        }
        return NextResponse.json(tickets)
    } catch (error) {
        return errorMessage(error, null)
    }
}
const viewTickets = async (request: NextRequest) => {
    const ticket = request.nextUrl.searchParams.get("tickets") as string;
    if (!ticket) return NextResponse.json({ error: "Give tickets" }, { status: 404 })
    try {
        const ticketNumbers = ticket.split(/&|%/);
        console.log(ticketNumbers)
        const result = await Promise.all(ticketNumbers.map(async (tick) => {
            const tickets = await prisma.tickets.findUnique({
                where: {
                    ticket_number: parseInt(tick)
                },
                include:{
                    event:true
                }
            })
            return tickets
        }))
        return NextResponse.json(result)
    } catch (error) {
        return errorMessage(error, null)
    }
}
export { acceptTicket as POST, viewTickets as GET }