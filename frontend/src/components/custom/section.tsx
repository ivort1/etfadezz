import type React from "react";

export default function Section({ children }: { children: React.ReactNode }) {
    return(
        <section className="flex flex-col gap-6 px-6 py-2">
            {children}
        </section>
    )
}