import getUser from "@/functions/getUser";
import prisma from "@/utils/prisma";
import errorMessage from "@/validations/errorMessage";
import { priceSchema } from "@/validations/modelValidation";
import { NextRequest, NextResponse } from "next/server";

const createPrize = async (request: NextRequest) => {
    const token = request.headers.get("USER") as string
    try {
        const user = await getUser(token)
        if (!user?.isAdmin) return errorMessage(null, "admin")
        const data = await priceSchema.validate(await request.json())
        const prize = await prisma.prize_list.create({
            data: data
        })
        return NextResponse.json(prize)
    } catch (error) {
        return errorMessage(error, null)
    }
}
export { createPrize as POST }