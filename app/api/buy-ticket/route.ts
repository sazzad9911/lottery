import prisma from "@/utils/prisma";
import errorMessage from "@/validations/errorMessage";
import { ticketSchema } from "@/validations/modelValidation";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

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
const getActiveEvents = async (request: NextRequest) => {
    try {
        const event = await prisma.events.findMany({
            orderBy: {
                drawDate: "desc"
            },
            where: {
                ticketCloseTo: {
                    gte: new Date()
                }
            }
        })
        return NextResponse.json(event)
    } catch (error) {
        return errorMessage(error, null)
    }
}
const requestPayment = async (request: NextRequest) => {
    try {
        const data = await ticketSchema.validate(await request.json())
        const ticket_number = await generateUnique7DigitNumber()
        
        
        return NextResponse.json({})
    } catch (error) {
        return errorMessage(error, null)
    }
}
export { getActiveEvents as GET, requestPayment as POST }