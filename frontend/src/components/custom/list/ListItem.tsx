// components/ListItem.tsx
import type { ReactNode } from "react"
import { Link } from "react-router"

export interface ListItemProps {
  href: string
  imgSrc: string
  title: string
  description: string
  children?: ReactNode
}

export default function ListItem({ href, imgSrc, title, description, children, }: ListItemProps) {
  return (
    <Link to={href} className="block">
      <div className="flex items-center justify-between gap-4">
        <img src={imgSrc} alt={title} className="w-12 h-12" />

        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-base font-medium">{title}</h3>
          <p className="text-gray-500 text-sm text-balance">{description}</p>
          <p className="text-sm">{children}</p>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" className="rotate-[-90deg] text-muted-foreground pointer-events-none w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </Link>
  )
}