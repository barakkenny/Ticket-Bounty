"use server"
import { prisma } from "@/lib/prisma"
import { ticketsPath, ticketPath } from "@/paths"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const upsertTicket = async (
    id: string | undefined,
    formData: FormData
) => {
    const data = {
        title: formData.get("title"),
        content: formData.get("content")
    }

    await prisma.ticket.update({
        where: {
            id: id || "",
        },
        data:{ 
            title: data.title as string,
            content: data.content as string
        }
    })

    revalidatePath(ticketsPath())

    if(id) {
        redirect(ticketPath(id))
    }
    
}