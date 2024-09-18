import React from "react";
import "../styles/common.scss";
import { GeistSans } from "geist/font/sans";
import Providers from "../providers/userProvider"
import Navbar from "../components/home/layout/header";
import Footer from "../components/home/layout/footer";
export const metadata = {
    title: 'GymStick',
    description: 'Create your next gym experience',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={GeistSans.className}>
            <Providers>
                <body>
                    <Navbar/>
                    {children}
                    <Footer/>
                </body>
            </Providers>
        </html>
    )
}
