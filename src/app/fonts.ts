import localFont from "next/font/local";
import { Montserrat, Poppins, Playfair_Display, Noto_Serif_Display } from 'next/font/google'

export const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
    weight: "400",
    variable: '--font-playfair-display',
})

export const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    weight: ["200", "300", "400", "500"],
    variable: '--font-montserrat',
})

export const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ["200", "300" ,"400", "500"],
    variable: '--font-poppins',
})

export const notoSerifDisplay = Noto_Serif_Display({
    subsets: ['latin'],
    display: 'swap',
    weight: ["300" ,"400", "500", "600"],
    variable: '--font-noto-serif-display',
})