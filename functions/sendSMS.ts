import axios from "axios"

const sendSMS = async (number: string, message: string) => {
    const res = await axios.post("https://login.esms.com.bd/api/v3/sms/send", {
        "recipient": number,
        "sender_id": "8809601001335",
        "type": "plain",
        "message": message
    }, {
        headers: {
            Authorization: "Bearer " + process.env.SMS_TOKEN
        }
    })
    return res
}
export default sendSMS