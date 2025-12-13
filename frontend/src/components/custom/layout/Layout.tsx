import type { ReactNode } from "react";

import Nav from "@/components/custom/layout/Nav"
import Footer from "@/components/custom/layout/Footer";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return(
        <main className="font-poppins grid grid-cols-1 gap-12">
            <Nav />
            {children}
            <Footer />
        </main>
    )
}