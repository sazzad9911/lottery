import cache from "@/functions/cache";
import generateRandomKey from "@/functions/randomKey";
import errorMessage from "@/validations/errorMessage";
import { bkashPaymentSchema } from "@/validations/modelValidation";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";


const app_key = "4f6o0cjiki2rfm34kfdadl1eqq";
const app_secret = "2is7hdktrekvrbljjh44ll3d9l1dtjo4pasmjvs5vl5qr3fug4b"
const username = "sandboxTokenizedUser02"
const password = "sandboxTokenizedUser02@12345"


const getBKashUrl = async (request: NextRequest) => {
    const host = request.headers.get("x-forwarded-host")
    const proto = request.headers.get("x-forwarded-proto")

    try {
        const data = await bkashPaymentSchema.validate(await request.json())
        const callBack = `${proto}://${host}/pay/${data.phone}`
        const tokenRes = await axios.post(
            "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/token/grant",
            {
                app_key: app_key,
                app_secret: app_secret,
            },
            {
                headers: {
                    username: username,
                    password: password,
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            }
        );
        const { id_token } = tokenRes.data;
        if (!id_token)
            return NextResponse.json({ error: "Get token failed" }, { status: 404 })
        const createPay = await axios.post("https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/create", {
            "mode": "0011",
            "payerReference": data.phone,
            "callbackURL": callBack,
            "amount": data.amount,
            "currency": "BDT",
            "intent": "sale",
            "merchantInvoiceNumber": generateRandomKey()
        }, {
            headers: {
                Authorization: "Bearer " + id_token,
                "X-APP-Key": app_key,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        const { bkashURL } = createPay.data
        if (!bkashURL) return NextResponse.json({ error: "Failed to get url" }, { status: 404 })
        cache.set(data.phone, {
            ref: data.ref,
            eventId: data.eventId,
            quantity: data.quantity,
            amount: parseInt(data.amount)
        })
        return NextResponse.json({ url: bkashURL })
    } catch (error: any) {
        return errorMessage(error, null)
    }
}
export { getBKashUrl as POST }