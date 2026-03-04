"use client"

import { useState, useEffect } from "react"
import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, RefreshCw, ExternalLink, Plus } from "lucide-react"
import { agentService } from "@/lib/agents/agent-service"

export default function CompetitorsPage() {
  const [competitors, setCompetitors] = useState<any[]>([])

  useEffect(() => {
    agentService.discoverCompetitors("General").then(res => {
      if (res.success && res.data) {
        setCompetitors(res.data)
      } else {
        // Fallback for demo
        setCompetitors([
          { name: "Amazon", url: "https://amazon.com", status: "active", lastScraped: "3/4/2026" },
          { name: "BestBuy", url: "https://bestbuy.com", status: "active", lastScraped: "3/4/2026" },
          { name: "Walmart", url: "https://walmart.com", status: "active", lastScraped: "3/4/2026" },
        ])
      }
    })
  }, [])
  return (
    <MainLayout>
      <div className="flex flex-col gap-8 pb-20">
        <header className="flex flex-wrap justify-between items-end gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold tracking-tight">Competitors</h1>
            <p className="text-muted-foreground text-sm font-medium">Monitor and manage tracked competitor sources.</p>
          </div>
          <Button className="bg-primary text-brand-dark font-bold rounded-xl h-10 px-6">
            Add Competitor
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitors.map((comp) => (
            <Card key={comp.name} className="bg-card border-border overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <Globe className="size-5 text-primary" />
                    <CardTitle className="text-lg font-bold">{comp.name}</CardTitle>
                  </div>
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-none rounded-md px-2 py-0.5 text-[10px] font-bold uppercase">
                    {comp.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm mt-1">{comp.url}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Last Scraped:</span>
                  <span className="font-code">{comp.lastScraped}</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="secondary" className="flex-1 bg-secondary/50 text-foreground hover:bg-secondary border-none h-9 text-xs font-bold gap-2">
                    <ExternalLink className="size-3.5" /> Visit Site
                  </Button>
                  <Button variant="secondary" className="flex-1 bg-secondary/50 text-foreground hover:bg-secondary border-none h-9 text-xs font-bold gap-2">
                    <RefreshCw className="size-3.5" /> Rescrape
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
