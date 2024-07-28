import getUser from "@/functions/getUser";
import prisma from "@/utils/prisma";
import errorMessage from "@/validations/errorMessage";
import { NextRequest, NextResponse } from "next/server";

const getSells = async (request: NextRequest) => {
    const token = request.headers.get("USER") as string
    try {
        const user = await getUser(token)
        if (!user) return NextResponse.json({ error: "Invalid user" }, { status: 404 })
        const sells = await prisma.tickets.findMany({
            where: {
                ref: user?.username
            }
        })
        return NextResponse.json(sells)
    } catch (error) {
        return errorMessage(error, null)
    }
}
export { getSells }