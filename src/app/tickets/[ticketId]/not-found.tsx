
import Placeholder from "@/components/Placeholder"
import { Button } from "@/components/ui/button"
import { ticketsPath } from "@/paths"
import Link from "next/link"

export default function NotFound(){
    return(
        <Placeholder 
        label="Ticket not found"
        button={
            <Button>
                <Link href={ticketsPath()}>Go to Tickets</Link>
            </Button>
        }
        />
    )
}