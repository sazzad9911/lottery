import generateRandomKey from "@/functions/randomKey";
import axios from "axios";
import { toast } from "react-toastify";

const bkashPay = async (data: {
    username: string;
    password: string;
    app_key: string;
    app_secret: string;
    callBack: string,
    amount: string
}) => {
    try {
        const tokenRes = await axios.post(
            "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/token/grant",
            {
                app_key: data.app_key,
                app_secret: data.app_secret,
            },
            {
                headers: {
                    username: data.username,
                    password: data.password,
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            }
        );
        const { id_token } = tokenRes.data;
        if (!id_token)
            return toast.error("Token generate failed!", { autoClose: 2000 });
        const createPay = await axios.post("https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/create", {
            "mode": "0011",
            "payerReference": "01761143991",
            "callbackURL": data.callBack,
            "amount": data.amount,
            "currency": "BDT",
            "intent": "sale",
            "merchantInvoiceNumber": generateRandomKey()
        }, {
            headers: {
                Authorization: "Bearer " + id_token,
                "X-APP-Key": data.app_key,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        const { bkashURL } = createPay.data
        return bkashURL
    } catch (error: any) {
        return toast.error(error.message, { autoClose: 2000 });
    }
};
export default bkashPay