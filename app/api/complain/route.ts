import prisma from "@/utils/prisma";
import errorMessage from "@/validations/errorMessage";
import { contactSchema } from "@/validations/modelValidation";
import { NextRequest, NextResponse } from "next/server";
const TOPICS = [
    "About buy tickets from website",
    "Wrong information from agents",
    "Questions about lottery draws"
]

const makeComplain = async (request: NextRequest) => {
    try {
        const data=await contactSchema.validate(await request.json())
        const contacts=await prisma.contacts.create({
            data:data
        })
        return NextResponse.json(contacts)
    } catch (error) {
        return errorMessage(error,null)
    }
}
const getTopics = async (request: NextRequest) => {
    return NextResponse.json(TOPICS)
}
export { getTopics as GET, makeComplain as POST }