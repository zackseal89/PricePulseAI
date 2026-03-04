import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Eye,
  ArrowUpDown,
  AlertTriangle,
  BrainCircuit,
  ArrowDownRight,
  ArrowUpRight,
  Plus
} from "lucide-react"
import { MarketPulseChart } from "@/components/dashboard/market-pulse-chart"
import { cn } from "@/lib/utils"

const stats = [
  {
    label: "Active Monitors",
    value: "1,245",
    change: "+5.2%",
    icon: Eye,
    iconColor: "text-primary"
  },
  {
    label: "Price Changes",
    value: "342",
    change: "+12.4%",
    icon: ArrowUpDown,
    iconColor: "text-brand-lavender"
  },
  {
    label: "Alert Status",
    value: "12 Critical",
    change: "-2.1%",
    icon: AlertTriangle,
    iconColor: "text-brand-coral"
  },
]

const movers = [
  { name: "Quantum Smartphone X", brand: "TechNova", price: "$899.00", change: "12%", down: true },
  { name: "Aero Noise Cancelling", brand: "SoundMax", price: "$249.50", change: "5%", down: false },
]

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8 pb-20">
        <header className="flex flex-wrap justify-between items-center gap-4">
          <h2 className="text-foreground text-3xl font-bold tracking-tight">Dashboard Overview</h2>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="bg-card border-border">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                  <stat.icon className={cn(stat.iconColor, "size-4")} />
                  {stat.label}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <p className="text-3xl font-bold font-code">{stat.value.split(' ')[0]} {stat.value.includes('Critical') && <span className="text-lg font-display font-medium text-muted-foreground">Critical</span>}</p>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-none rounded-full px-2 py-0.5">
                    {stat.change}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chart & Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 bg-card border-border p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <CardTitle className="text-lg font-bold">Market Pulse</CardTitle>
                <p className="text-muted-foreground text-sm">Index vs Competitor Average</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" /> Us
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-brand-lavender" /> Competitors
                </div>
              </div>
            </div>
            <MarketPulseChart />
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/20 p-6 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <BrainCircuit className="text-primary size-5" />
                AI Insights
              </h3>
              <Badge className="bg-primary/20 text-primary font-code border-none font-bold">87% CONFIDENCE</Badge>
            </div>
            <div className="space-y-4 flex-1">
              <div className="bg-background/40 rounded-lg p-4 backdrop-blur-sm border border-primary/10">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Competitor A</strong> is likely to drop prices on electronics by 15% this weekend based on historical patterns.
                </p>
              </div>
              <div className="bg-background/40 rounded-lg p-4 backdrop-blur-sm border border-primary/10">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Suggestion: Maintain current pricing on Home Goods; demand elasticity indicates low sensitivity.
                </p>
              </div>
            </div>
            <Button className="w-full mt-4 bg-primary text-brand-dark hover:bg-primary/90 font-bold">
              View Detailed Analysis
            </Button>
          </Card>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Movers */}
          <Card className="bg-card border-border p-6">
            <h3 className="text-lg font-bold mb-6">Top Movers</h3>
            <div className="flex flex-col gap-4">
              {movers.map((item) => (
                <div key={item.name} className="flex items-center gap-4 p-3 hover:bg-secondary/30 rounded-lg transition-colors group cursor-pointer border border-transparent hover:border-border">
                  <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center overflow-hidden">
                    <div className="size-full bg-slate-800" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.brand}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold font-code">{item.price}</p>
                    <p className={cn(
                      "text-xs font-medium flex items-center justify-end gap-1",
                      item.down ? "text-brand-coral" : "text-primary"
                    )}>
                      {item.down ? <ArrowDownRight className="size-3" /> : <ArrowUpRight className="size-3" />}
                      {item.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Heatmap Placeholder */}
          <Card className="bg-card border-border p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold">Promotional Heatmap</h3>
              <span className="text-xs text-muted-foreground">Next 14 Days</span>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "aspect-square rounded flex items-center justify-center text-xs font-code",
                    i === 4 ? "bg-primary text-brand-dark font-bold" :
                    [1, 8, 13].includes(i) ? "bg-primary/20 text-primary" :
                    [2, 10].includes(i) ? "bg-primary/40 text-foreground" :
                    [3].includes(i) ? "bg-primary/60 text-foreground" :
                    "bg-secondary text-muted-foreground"
                  )}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center text-xs text-muted-foreground">
              <span>Low Activity</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded bg-secondary" />
                <div className="w-3 h-3 rounded bg-primary/40" />
                <div className="w-3 h-3 rounded bg-primary" />
              </div>
              <span>High Activity</span>
            </div>
          </Card>
        </div>
      </div>

      <Button className="fixed bottom-8 right-8 w-14 h-14 bg-primary hover:bg-primary/90 text-brand-dark rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 z-50 p-0 border-none">
        <Plus className="size-8" />
      </Button>
    </MainLayout>
  )
}
