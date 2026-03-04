"use client"

import { Sidebar } from "./sidebar"
import { Bell, Search, Menu, Zap } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 border-b border-border bg-card">
          <div className="flex items-center gap-2">
            <Zap className="size-6 text-primary fill-current" />
            <h2 className="font-bold text-lg">PricePulse</h2>
          </div>
          <Button variant="ghost" size="icon">
            <Menu className="size-6" />
          </Button>
        </header>

        {/* Desktop Header / Global Search */}
        <header className="hidden md:flex items-center justify-end p-6 gap-4">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-10 bg-card border-border rounded-full h-10 focus-visible:ring-primary"
            />
          </div>
          <div className="relative">
            <Button variant="outline" size="icon" className="rounded-full bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 transition-colors">
              <Bell className="size-5" />
            </Button>
            <span className="absolute top-0 right-0 size-2.5 bg-red-500 rounded-full border-2 border-background"></span>
          </div>
          <div className="size-10 rounded-full bg-primary/20 border border-primary/30" />
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
