
import prisma from "@/libs/prisma"
import agentTypes from "@/types/agentTypes"
import userTypes from "@/types/userTypes"

const getAgent=async(stringValue:string)=>{
    const user = JSON.parse(stringValue) as agentTypes
    return await prisma.agent.findUnique({
        where:{id:user.id}
    })
}
export default getAgent