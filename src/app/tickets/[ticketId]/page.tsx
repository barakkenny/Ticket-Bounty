import { initialTickets } from "@/data"
import TicketItem from "@/features/ticket/components/ticket-item"
import { notFound } from "next/navigation"


type TicketPageProps = {
    params: Promise<{
        ticketId: string
    }>
}

const TicketPage = async ({ params}: TicketPageProps) => {
    const {ticketId} = await params
    const ticket = initialTickets.find((ticket) => ticket.id === ticketId)

    if(!ticket){
      notFound()
    }
  return (
    <div className="flex justify-center">
      <TicketItem ticket={ticket} isDetail/>
    </div>
  )
}

export default TicketPage
