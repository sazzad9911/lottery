import {
    NextFetchEvent,
    NextRequest,
    NextResponse
} from "next/server";
import jwt from "jsonwebtoken"
import * as jose from 'jose'
import { decrypt } from "@/functions/JWT";
import { cookies } from "next/headers";
import { MiddlewareFactory } from "@/middleware";

const jwtConfig = {
    secret: new TextEncoder().encode(process.env.SECRET || "cluster0"),
}
const checkAuth: MiddlewareFactory = (next) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        const pathname = request.nextUrl.pathname;

        if (["/user", "/admin", "/agent"]?.some((path) => pathname.includes(path))) {
            //const cooke=cookies()
            const token = request.headers.get("Authorization");
            if (!token) return NextResponse.json({ error: "Token is required" }, { status: 404 })

            try {
                const decode = await decrypt(token.split(" ")[1])

                const headers = new Headers(request.headers);
                headers.set('USER', JSON.stringify(decode));
                return NextResponse.next({
                    request: {
                        headers: headers
                    }
                })
            } catch (error) {
                return NextResponse.json({ error: "Invalid User", code: error, secret: process.env.SECRET || "cluster0" }, { status: 404 })
            }

        }
        return next(request, _next);
    };
};
export default checkAuth