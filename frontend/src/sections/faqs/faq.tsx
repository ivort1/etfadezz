import { Link } from "react-router";
import type { Category } from "@/database/database";

interface FaqProps {
    category: Category;
    index: number;
}

export default function ListItem({category, index}: FaqProps) {
    return(
        <Link to={`/${category.path}`}>
            <div className="flex flex-row items-center justify-between gap-2" key={index}>
                <div className="flex flex-row items-start gap-3">

                    <img src={`/src/assets/faqs/${category.svg}`} alt={category.description} className="w-10 h-10"/>

                    <div className="max-w-[65%] flex flex-col gap-1">
                        <h3 className="font-medium text-sm">
                            {category.name}
                        </h3>
                        <p className="text-gray-500 text-xs text-pretty">
                            {category.description}
                        </p>
                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-[-90deg] text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
            </div>
        </Link>
    )
}