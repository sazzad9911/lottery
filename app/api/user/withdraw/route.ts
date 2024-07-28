import getUser from "@/functions/getUser";
import prisma from "@/utils/prisma";
import errorMessage from "@/validations/errorMessage";
import { walletSchema } from "@/validations/modelValidation";
import { NextRequest, NextResponse } from "next/server";

const createWithdraw = async (request: NextRequest) => {
    const token = request.headers.get("USER") as string
    try {
        const user = await getUser(token)
        if (!user) return NextResponse.json({ error: "Invalid user" }, { status: 404 })
        const data = await walletSchema.validate(await request.json())
        if (user.balance < data.amount) return NextResponse.json({ error: "Low balance" }, { status: 404 })
        const withdraw = await prisma.withdraws.create({
            data: {...data,userId: user.id}
        })
        await prisma.users.update({
            where: {
                id: user.id,
            },
            data: {
                balance: {
                    decrement: data.amount
                }
            }
        })
        return NextResponse.json(withdraw)

    } catch (error) {
        return errorMessage(error, null)
    }
}

export { createWithdraw as POST }