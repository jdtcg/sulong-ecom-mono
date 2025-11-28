"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Book, ShoppingBag, Users, Briefcase } from "lucide-react"

export default function SubNav() {
  const pathname = usePathname() || "/"
  const navItems = [
    { label: "Sulong Design Market", href: "/design-market", icon: ShoppingBag },
    { label: "Sulong Learning Hub", href: "/learning-hub", icon: Book },
    { label: "Sulong Connect", href: "/connect", icon: Users },
    { label: "Sulong Job Postings", href: "/job-postings", icon: Briefcase },
  ]

  return (
    <nav className="w-full mb-4 mt-3">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-y-4 gap-x-10 py-3">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
          const baseClasses =
            "text-base border border-gray-200 rounded-md py-4 flex items-center justify-center font-medium transition-colors whitespace-nowrap"
          const activeClasses = isActive
            ? "bg-cyan-900 text-white"
            : "bg-cyan-700 text-gray-50 hover:bg-cyan-800"

          return (
            <Link key={item.href} href={item.href} className={`${baseClasses} ${activeClasses}`}>
              <div className="flex items-center gap-2">
                {Icon ? <Icon className="w-5 h-5" aria-hidden /> : null}
                <span>{item.label}</span>
            </div>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
