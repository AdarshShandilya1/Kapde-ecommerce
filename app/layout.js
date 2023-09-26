
import Navbar from "@/components/Navbar"
import {Providers} from "./providers";
import "./globals.css"
import { Inter } from "next/font/google"
import { Proza_Libre } from "next/font/google"
import { Oxygen } from "next/font/google"
import { Questrial } from "next/font/google"
import { Montserrat } from "next/font/google"
import { DM_Sans } from "next/font/google"
import { Lexend_Deca } from "next/font/google"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })
const proza = Proza_Libre({ weight: "400", subsets: ["latin"] })
const oxygen = Oxygen({ weight: "400", subsets: ["latin"] })
const ques = Questrial({ weight: "400", subsets: ["latin"] })
const mont = Montserrat({ weight: "400", subsets: ["latin"] })
const sans = DM_Sans({ weight: "400", subsets: ["latin"] })
const lex = Lexend_Deca({ weight:"300", subsets: ["latin"] })
export const metadata = {
  title: "Kapde",
  description: "An E-commerce website where you can buy trendy clothes",
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lex.className}>
      <Providers>
        <Navbar />
        {children}
        <Footer/>
      </Providers>
      </body>
    </html>
  )
}
