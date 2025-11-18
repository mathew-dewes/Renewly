import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navigation/Navbar";
import { getSession } from "@/server/auth/auth";
import Features from "./(home)/_components/Featues";




const poppins = Poppins({

  subsets: ["latin"],
  weight: ["600", "500", "400", "300"]
});



export const metadata: Metadata = {
  title: "Renewly",
  description: "Keep track of your renewals",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getSession();
  return (
    <html lang="en">

      <body
        className={`${poppins.className} antialiased`}
      >         
      <Navbar session={session}/>
        <main className="mx-5 md:mx-10 mt-5">
 
          {children}
          <div>
            <Features/>
          </div>
        </main>
        <footer className="h-20"></footer>

      </body>
    </html>
  );
}
