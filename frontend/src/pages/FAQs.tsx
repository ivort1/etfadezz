import type { ReactNode } from "react";

export default function FAQs({ children }: { children: ReactNode }) {
    return(
        <section className="px-6 py-2">
            {children}
        </section>
    )
}