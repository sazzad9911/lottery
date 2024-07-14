import prisma from "@/utils/prisma";
import errorMessage from "@/validations/errorMessage";
import { NextRequest, NextResponse } from "next/server";

const liveDraw = async (request: NextRequest) => {
    try {
        const theEvent = await prisma.events.findFirst({
            where: {
                drawDate: {
                    gte: new Date()
                }
            },
            orderBy: {
                drawDate: "desc"
            },
            include: {
                tickets: true
            }
        })
        return NextResponse.json(theEvent)

    } catch (error) {
        return errorMessage(error, null)
    }
}
export { liveDraw as GET }