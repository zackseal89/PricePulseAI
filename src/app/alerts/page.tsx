"use client"

import { MainLayout } from "@/components/layout/main-layout"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowDown,
  ChevronRight,
  Store,
  TrendingUp,
  PackageX,
  Search,
  Bell,
  Loader2
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useQuery } from "@tanstack/react-query"
import { agentService } from "@/lib/agents/agent-service"
import { PriceAlert } from "@/lib/agents/types"

const filters = ["All Alerts", "Price Drops", "Stock Out", "Competitors", "Trending"]

const iconMap: Record<string, any> = {
  price_drop: ArrowDown,
  stock_out: PackageX,
  new_entrant: Store,
  surge: TrendingUp,
}

const colorMap: Record<string, string> = {
  high: "text-red-500",
  medium: "text-orange-500",
  low: "text-primary",
}

export default function AlertsPage() {
  const { data: response, isLoading } = useQuery({
    queryKey: ['alerts'],
    queryFn: () => agentService.monitorCompetitors()
  })

  const alerts = response?.data || []

  return (
    <MainLayout>
      <div className="max-w-[450px] mx-auto bg-card border border-border min-h-[800px] rounded-3xl overflow-hidden flex flex-col shadow-2xl">
        <header className="flex items-center justify-between border-b border-primary/20 px-4 py-3 bg-card shrink-0">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <TrendingUp className="size-5" />
            </div>
            <h2 className="text-lg font-bold tracking-tight">PricePulse</h2>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full bg-primary/10 text-primary hover:bg-primary/20">
              <Search className="size-5" />
            </Button>
            <div className="relative">
              <Button variant="ghost" size="icon" className="rounded-full bg-primary/10 text-primary hover:bg-primary/20">
                <Bell className="size-5" />
              </Button>
              <span className="absolute top-0 right-0 size-3 bg-red-500 rounded-full border-2 border-card"></span>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto hide-scrollbar pb-20">
          <div className="px-4 pt-5 pb-3 flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Alert Center</h1>
            <Badge className="bg-primary/20 text-primary hover:bg-primary/20 font-semibold rounded-full border-none">
              {isLoading ? "..." : `${alerts.length} New`}
            </Badge>
          </div>

          <div className="flex gap-2 px-4 pb-4 overflow-x-auto no-scrollbar">
            {filters.map((filter, i) => (
              <Button
                key={filter}
                variant={i === 0 ? "default" : "secondary"}
                className={cn(
                  "h-8 rounded-full px-4 text-sm font-medium whitespace-nowrap",
                  i === 0 ? "bg-primary text-brand-dark hover:bg-primary/90" : "bg-primary/10 text-primary hover:bg-primary/20 border-none"
                )}
              >
                {filter}
              </Button>
            ))}
          </div>

          <div className="flex flex-col gap-2 px-4">
            {isLoading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="size-8 text-primary animate-spin" />
              </div>
            ) : alerts.map((alert: PriceAlert) => {
              const Icon = iconMap[alert.type] || Bell
              const color = colorMap[alert.priority] || "text-primary"

              return (
                <div
                  key={alert.id}
                  className={cn(
                    "border rounded-xl p-4 flex flex-col gap-3 relative overflow-hidden transition-all bg-primary/5 border-primary/10",
                    alert.priority === 'high' && "ring-1 ring-red-500/30"
                  )}
                >
                  <div className={cn("absolute inset-y-0 left-0 w-1 rounded-l-xl", color.replace('text-', 'bg-'))} />

                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <Icon className={cn("size-5", color)} />
                      <span className={cn("text-sm font-medium uppercase", color)}>
                        {alert.type.replace('_', ' ')}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground font-code">Just now</span>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base mb-1">{alert.productName}</h3>
                    <p className="text-sm text-muted-foreground leading-snug">
                      Significant change detected on <span className="text-foreground">Competitor #{alert.competitorId}</span>
                    </p>
                  </div>

                  <div className="flex items-end justify-between mt-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold font-code">${alert.newPrice.toFixed(2)}</span>
                      {alert.oldPrice !== alert.newPrice && (
                        <span className="text-sm line-through text-muted-foreground font-code">${alert.oldPrice.toFixed(2)}</span>
                      )}
                    </div>
                    <Button variant="link" className="text-primary text-sm font-medium p-0 h-auto gap-1">
                      Details <ChevronRight className="size-4" />
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <nav className="bg-card border-t border-primary/20 px-6 py-3 flex justify-between items-center shrink-0">
          {[
            { label: "Home", icon: TrendingUp, active: false },
            { label: "Alerts", icon: Bell, active: true },
            { label: "Products", icon: Store, active: false },
            { label: "Profile", icon: Search, active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={cn(
                "flex flex-col items-center gap-1 transition-colors",
                item.active ? "text-primary" : "text-muted-foreground hover:text-primary"
              )}
            >
              <item.icon className={cn("size-6", item.active && "fill-current")} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </MainLayout>
  )
}
