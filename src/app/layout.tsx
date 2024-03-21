"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "../lib/provider";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-[500px]">
          <ReduxProvider >
            {children}
          </ReduxProvider>
        </div>
      </body>
    </html >
  );
}
