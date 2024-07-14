import prisma from "@/utils/prisma";
import errorMessage from "@/validations/errorMessage";
import { paymentSchema, paymentUrlSchema, ticketSchema } from "@/validations/modelValidation";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";


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
    const host = request.headers.get("x-forwarded-host")
    const proto = request.headers.get("x-forwarded-proto")
    try {
        const data = await paymentUrlSchema.validate(await request.json())
        return NextResponse.json({ url: `${proto}://${host}/pay/${data.phone}?amount=${data.amount}&redirect=${data.redirectUrl}&cancelUrl=${data.cancelUrl}&ref=${data.ref}&quantity=${data.quantity}&eventId=${data.eventId}` })
    } catch (error) {
        return errorMessage(error, null)
    }
}
export { getActiveEvents as GET, requestPayment as POST }