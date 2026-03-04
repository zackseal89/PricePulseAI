"use client"

import { useState, useEffect } from "react"
import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { agentService } from "@/lib/agents/agent-service"
import {
  Calendar,
  Download,
  MoreHorizontal,
  FileText,
  Search,
  ChevronDown
} from "lucide-react"
import { MarketPositionMatrix } from "@/components/analytics/market-position-matrix"
import { ShareOfVoiceChart } from "@/components/analytics/share-of-voice-chart"
import { cn } from "@/lib/utils"

export default function AnalyticsPage() {
  const [categoryIndex, setCategoryIndex] = useState<any[]>([])

  useEffect(() => {
    agentService.getAnalytics().then(res => {
      if (res.success && res.data) {
        setCategoryIndex(res.data.categoryIndex)
      }
    })
  }, [])

  return (
    <MainLayout>
      <div className="flex flex-col gap-8 pb-20">
        <header className="flex flex-wrap justify-between items-end gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold leading-tight">Analytics & Reporting</h1>
            <p className="text-muted-foreground text-sm font-medium">Comprehensive competitive intelligence insights across all tracked markets</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="rounded-full bg-secondary/50 border-border h-10 px-4 text-sm font-medium gap-2">
              <Calendar className="size-4 text-primary" />
              Last 30 Days (Sep 15 - Oct 15)
              <ChevronDown className="size-4 text-muted-foreground" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-secondary/50 border-border h-10 w-10">
              <Download className="size-5" />
            </Button>
          </div>
        </header>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[auto]">

          {/* Market Position Matrix */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-2 bg-card border-border p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-bold">Market Position Matrix</h3>
                <p className="text-sm text-muted-foreground">Price Premium vs. Market Share</p>
              </div>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <MoreHorizontal className="size-5" />
              </Button>
            </div>
            <MarketPositionMatrix />
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              {[
                { name: "Us (PricePulse)", color: "bg-primary" },
                { name: "Competitor A", color: "bg-blue-500" },
                { name: "Competitor B", color: "bg-orange-500" },
              ].map(item => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className={cn("w-3 h-3 rounded-full", item.color)} />
                  <span className="text-xs font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Category Pricing Index */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-1 bg-card border-border p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-base font-bold">Category Pricing Index</h3>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <MoreHorizontal className="size-5" />
              </Button>
            </div>
            <div className="space-y-6">
              {categoryIndex.map(item => (
                <div key={item.name} className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.name}</span>
                    <span className={cn("font-bold", item.color.replace('bg-', 'text-'))}>{item.value}</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className={cn("h-2 rounded-full", item.color)} style={{ width: item.width }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Share of Voice */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-1 bg-card border-border p-6 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base font-bold">Share of Voice</h3>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <MoreHorizontal className="size-5" />
              </Button>
            </div>
            <ShareOfVoiceChart />
            <div className="grid grid-cols-2 gap-3 mt-6">
              {[
                { name: "Brand X", value: "42%", color: "bg-primary" },
                { name: "Brand Y", value: "35%", color: "bg-blue-500" },
                { name: "Brand Z", value: "15%", color: "bg-slate-800" },
                { name: "Others", value: "8%", color: "bg-slate-700" },
              ].map(item => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className={cn("w-2 h-2 rounded", item.color)} />
                  <span className="text-xs font-medium text-muted-foreground">{item.name} ({item.value})</span>
                </div>
              ))}
            </div>
          </Card>

        </div>
      </div>
    </MainLayout>
  )
}
