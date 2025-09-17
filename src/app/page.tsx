import Heading from "@/components/heading";
import { ticketsPath } from "@/paths";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
    <Heading title="Home page" description="Your home place to start"/>

      <div className="flex-1 flex flex-col items-center">
       <Link href={ticketsPath()} className="underline">Go to Tickets</Link>
      </div>
      </div>
  );
}
