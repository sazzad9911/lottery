
import { NextRequest, NextResponse } from "next/server";
import md5 from "md5"
import jwt from "jsonwebtoken"
import getUser from "@/functions/getUser";
import { encrypt } from "@/functions/JWT";
import prisma from "@/utils/prisma";
import errorMessage from "@/validations/errorMessage";
const secret = process.env.SECRET || "cluster0"

interface loginTypes {
    phone: string,
    password: string
}


const POST = async (request: NextRequest) => {


    const { phone, password } = await request.json() as loginTypes


    if (!phone || !password) {
        return NextResponse.json({ error: "Invalid phone number and password" }, { status: 404 })
    }
    try {
        const encryptedPassword = md5(password);
        const user = await prisma.users.findUnique({
            where: {
                phone: phone,
                password: encryptedPassword
            }
        })
        if (!user) {
            return NextResponse.json({ error: "Phone number and password are incorrect" }, { status: 404 })
        }
        const userToken = await encrypt(user.id.toString(), secret)
        return NextResponse.json({ user, userToken })
    } catch (error) {

        return NextResponse.json({ error: "Failed to login with this device ", code: error }, { status: 400 })
    }

}
const checkUsername = async (request: NextRequest) => {
    const username = request.nextUrl.searchParams.get('username') || "";
    try {
        const user = await prisma.users.findUnique({
            where: {
                username: username
            }
        })
        return NextResponse.json(user)
    } catch (error) {
        return errorMessage(error, null)
    }
}

export { POST, checkUsername as GET }