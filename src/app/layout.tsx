import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import { homePath } from '@/paths'
import { ticketsPath } from "@/paths"
import { Button, buttonVariants } from "@/components/ui/button"
import { LucideKanban } from "lucide-react"


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Road to next",
  description: "Full stack ticket bounty application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        
      >
        <nav
        className="supports-backdrop-blur:bg-background/60
        fixed left-0 right-0 top-0 z-20 border-b bg-background/95
        backdrop-blur w-full flex py-2.5 px-5 justify-between"
        >
         <div>
          <Link 
          className={buttonVariants({ variant: "ghost"})}
          href={homePath()}>
            <span><LucideKanban /></span>
            <h1 className="ml-2 text-lg font-semibold">TicketBounty</h1>
            </Link>
         </div>
         <div>
         <Link 
         className={buttonVariants({ variant: "outline"})}
         href={ticketsPath()}>
          
          <h3>Tickets</h3>
          </Link>
         </div>
        </nav>
        <main
         className="min-h-screen flex-1 overflow-y-auto
         overflow-x-hidden py-24 px-8 bg-secondary/20 flex
         flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
