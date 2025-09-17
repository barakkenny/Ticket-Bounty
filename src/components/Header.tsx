import { LucideKanban } from "lucide-react"
import { buttonVariants } from "./ui/button"
import { homePath, ticketsPath } from "@/paths"
import Link from "next/link"
import ThemeSwitcher from "./theme/theme-provider"

const Header = () => {
    return(
    <nav
        className="supports-backdrop-blur:bg-background/60
        fixed left-0 right-0 top-0 z-20 border-b bg-background/95
        backdrop-blur w-full flex py-2.5 px-5 justify-between"
        >
         <div>
          <Link 
          className={buttonVariants({ variant: "ghost"})}
          href={homePath()}>
            <LucideKanban />
            <h1 className="ml-2 text-lg font-semibold">TicketBounty</h1>
            </Link>
         </div>
         <div>
         <ThemeSwitcher />
         <Link 
         className={buttonVariants({ variant: "default"})}
         href={ticketsPath()}>
          Tickets
          </Link>
         </div>
        </nav>
    )
}

export default Header