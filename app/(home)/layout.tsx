import React from "react";
import "../../styles/home.scss"
import Footer from "../../components/home/layout/footer";
import Navbar from "../../components/home/layout/header";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    );
}

export default Layout;