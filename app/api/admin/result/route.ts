import getUser from "@/functions/getUser";
import prisma from "@/utils/prisma";
import errorMessage from "@/validations/errorMessage";
import { resultSchema } from "@/validations/modelValidation";
import { NextRequest, NextResponse } from "next/server";

const createResult = async (request: NextRequest) => {
    const token = request.headers.get("USER") as string
    try {
        const user = await getUser(token)
        if (!user?.isAdmin) return errorMessage(null, "admin")
        const data = await resultSchema.validate(await request.json())
        const result = await prisma.results.create({
            data: data
        })
        return NextResponse.json(result)
    } catch (error) {
        return errorMessage(error, null)
    }
}
const getResults=async (request: NextRequest)=>{
    const eventId= request.nextUrl.searchParams.get("eventId");
    try {
        const results=await prisma.results.findMany({
            where:{
                eventId:eventId || undefined
            }
        })
        return NextResponse.json(results)
    } catch (error) {
        return errorMessage(error,null)
    }
}
export { createResult as POST,getResults as GET }