import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, X } from "lucide-react"

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-10 font-display">
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="border-b border-primary/20 pb-8">
          <h1 className="font-header text-4xl font-black tracking-tight">Design System Library</h1>
          <p className="text-primary text-base">PricePulse AI brand foundation and components</p>
        </header>

        {/* Colors */}
        <section className="space-y-4">
          <h2 className="font-header text-2xl font-bold">Colors</h2>
          <div className="flex flex-wrap gap-5">
            {[
              { name: "Midnight Navy", color: "bg-[#0A1628]" },
              { name: "Cyan (Primary)", color: "bg-[#00D4AA]" },
              { name: "Lavender", color: "bg-[#8B7BFF]" },
              { name: "Coral", color: "bg-[#FF6B6B]" },
            ].map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-2">
                <div className={`w-16 h-16 rounded-full border border-primary/20 ${c.color}`} />
                <span className="text-sm font-medium">{c.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-4">
          <h2 className="font-header text-2xl font-bold">Typography</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-primary/5 border-primary/10">
              <CardHeader>
                <p className="text-sm text-primary font-medium">Headers</p>
                <CardTitle className="font-header text-3xl">Space Grotesk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-header">The quick brown fox jumps over the lazy dog.</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-primary/10">
              <CardHeader>
                <p className="text-sm text-primary font-medium">Body</p>
                <CardTitle className="font-display text-3xl">Inter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-display">The quick brown fox jumps over the lazy dog.</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-primary/10">
              <CardHeader>
                <p className="text-sm text-primary font-medium">Code</p>
                <CardTitle className="font-code text-3xl">JetBrains Mono</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-code">The quick brown fox jumps over the lazy dog.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-4">
          <h2 className="font-header text-2xl font-bold">Buttons</h2>
          <div className="flex flex-wrap gap-6">
            <Button className="bg-primary text-background hover:bg-primary/90">Primary Button</Button>
            <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">Secondary Button</Button>
            <Button variant="destructive" className="bg-red-500/20 text-red-500 border border-red-500/30 hover:bg-red-500/30">Destructive Action</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>

        {/* Inputs */}
        <section className="space-y-4">
          <h2 className="font-header text-2xl font-bold">Input Fields</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
            <div className="space-y-2">
              <label className="text-sm font-medium">Default Input</label>
              <Input placeholder="Enter text..." />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Focused Input</label>
              <Input className="ring-2 ring-primary/50 border-primary" defaultValue="Active typing..." />
            </div>
          </div>
        </section>

        {/* Badges */}
        <section className="space-y-4">
          <h2 className="font-header text-2xl font-bold">Status Badges</h2>
          <div className="flex flex-wrap gap-4">
            <Badge className="bg-primary/20 text-primary hover:bg-primary/30 rounded-full px-3 py-1 gap-1.5 border-none">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Active
            </Badge>
            <Badge variant="destructive" className="bg-red-500/20 text-red-500 hover:bg-red-500/30 rounded-full px-3 py-1 gap-1.5 border-none">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Error
            </Badge>
          </div>
        </section>

        {/* Toast */}
        <section className="space-y-4">
          <h2 className="font-header text-2xl font-bold">Toast Notifications</h2>
          <div className="max-w-md p-4 bg-card border border-primary/30 rounded-lg shadow-lg flex items-center gap-3">
            <CheckCircle2 className="text-primary" />
            <div className="flex-1">
              <p className="text-sm font-medium">Success</p>
              <p className="text-xs text-muted-foreground">Data synchronized successfully.</p>
            </div>
            <X className="w-4 h-4 text-muted-foreground cursor-pointer" />
          </div>
        </section>
      </div>
    </div>
  )
}
