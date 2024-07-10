import prisma from "@/utils/prisma"


const getUser=async(stringValue:string)=>{
    const user = JSON.parse(stringValue)
    return await prisma.users.findUnique({
        where:{id:user.id}
    })
}
export default getUser