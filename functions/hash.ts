import CryptoJS from "crypto-js"

export function encryptToken(text: string) {
    const ciphertext = CryptoJS.AES.encrypt(text, process.env.SECRET as string).toString();
    return ciphertext;
}

export function decryptToken(ciphertext: string) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, process.env.SECRET as string);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
}
export function hashMD5(data:string) {
    return CryptoJS.MD5(data).toString();
}