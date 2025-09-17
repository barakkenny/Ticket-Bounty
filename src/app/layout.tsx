import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Link from 'next/link'
// import { homePath } from '@/paths'
// import { ticketsPath } from "@/paths"
// import { buttonVariants } from "@/components/ui/button"
// import { LucideKanban } from "lucide-react"
import Header from "@/components/Header";
import ThemeProvider from "@/components/theme/theme-switcher";


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
        <ThemeProvider>
       <Header />
        <main
         className="min-h-screen flex-1 overflow-y-auto
         overflow-x-hidden py-24 px-8 bg-secondary/20 flex
         flex-col">
          {children}
        </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
