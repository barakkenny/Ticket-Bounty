import Link from "next/link"
import { initialTickets } from "@/data"
import { ticketPath } from "@/paths"
import clsx from "clsx"
import { FaCheck } from "react-icons/fa6";
import { HiOutlinePencil } from "react-icons/hi2";
import { FaRegFile } from "react-icons/fa";

const TICKET_ICONS = {
    OPEN: <FaRegFile />,
    DONE: <FaCheck />,
    IN_PROGRESS: <HiOutlinePencil />,
}

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8 mt-8">
        <div>
        <h2 className="text-3xl font-bold tracking-tight">TicketsPage</h2>
        <p className="text-sm text-muted-foreground">
            All your tickets at one place
        </p>
        </div>

      <div className="flex-1 flex flex-col items-center gap-y-4"> 
      {initialTickets.map((ticket) => (
        <div key={ticket.id} className="w-full max-w-[420px] p-4 border border-slate-100 rounded">
            <div>{TICKET_ICONS[ticket.status]}</div>
            <h2 className="text-lg truncate">{ticket.title}</h2>
            <h2 className={clsx("text-sm text-slate-500 truncate", {
                "line-through": ticket.status === "DONE", 
            })}>{ticket.content}</h2>

            <Link href={ticketPath(ticket.id)} className="text-sm underline">
            View
            </Link>
        </div>
      ))}
      </div>
    </div>
  )
}

export default TicketsPage
