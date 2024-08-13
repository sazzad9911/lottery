import prisma from "@/utils/prisma";
import errorMessage from "@/validations/errorMessage";
import { NextRequest, NextResponse } from "next/server";

const getCurrentEvent = async (request: NextRequest) => {
    const id = request.nextUrl.searchParams.get("id")
    if (!id) return errorMessage(null, "id")
    try {
        const event = await prisma.events.findUnique({
            where: {
                id: id
            }
        })
        return NextResponse.json(event)
    } catch (error) {
        return errorMessage(error, null)
    }
}
export {getCurrentEvent as GET}