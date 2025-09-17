export type TicketStatus = "OPEN" | "IN_PROGRESS" | "DONE"

export type Ticket = {
    id: string;
    title: string;
    status: TicketStatus;
    content: string;
}