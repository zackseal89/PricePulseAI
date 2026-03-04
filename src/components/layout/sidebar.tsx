"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Bell,
  TrendingUp,
  Settings,
  LogOut,
  Zap
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Overview", href: "/", icon: LayoutDashboard },
  { name: "Competitors", href: "/competitors", icon: Users },
  { name: "Alerts", href: "/alerts", icon: Bell },
  { name: "Analytics", href: "/analytics", icon: TrendingUp },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-card border-r border-border flex flex-col justify-between hidden md:flex">
      <div className="flex flex-col gap-8 p-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="size-10 bg-primary rounded-full flex items-center justify-center text-brand-dark">
            <Zap className="fill-current" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-foreground text-lg font-bold leading-none">PricePulse AI</h1>
            <p className="text-muted-foreground text-xs">Admin Account</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-full transition-colors text-sm font-medium",
                pathname === item.href
                  ? "bg-primary/20 text-primary"
                  : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
              )}
            >
              <item.icon className="size-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-border space-y-2">
        <Link
          href="/settings"
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-full transition-colors text-sm font-medium",
            pathname === "/settings"
              ? "bg-primary/20 text-primary"
              : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
          )}
        >
          <Settings className="size-5" />
          <span>Settings</span>
        </Link>
        <button className="flex items-center gap-3 px-4 py-3 rounded-full text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors text-sm font-medium w-full">
          <LogOut className="size-5" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  )
}
