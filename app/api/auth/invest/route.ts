import prisma from "@/libs/prisma"
import { plansSchema } from "@/validations/modelValidation"
import { NextRequest, NextResponse } from "next/server"

const makeInvest = async (request: NextRequest) => {
    const body = await request.json()
    try {
        const data = await plansSchema.validate(body)
        // const bytes = CryptoJS.AES.decrypt(data.reference, process.env.SECRET as string);
        // const originalText = bytes.toString(CryptoJS.enc.Utf8);
        // const agentId = originalText.split("-")[0]
        // if (!agentId) return NextResponse.json({ error: "Agent not found" }, { status: 400 })
        // const isAgent = await prisma.agent.findUnique({
        //     where: {
        //         id: agentId
        //     }
        // })
        // if (!isAgent) return NextResponse.json({ error: "Agent not found" }, { status: 400 })
        const plan = await prisma.plans.create({
            data: data
        })
        return NextResponse.json(plan)
    } catch (error: any) {
        if (error.name === 'ValidationError') {
            return NextResponse.json({ error: error.errors[0] });
        }
        return NextResponse.json({ error: "Failed to make invest", code: error }, { status: 404 })
    }
}
export { makeInvest as POST }