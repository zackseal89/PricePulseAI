"use client"

import { MainLayout } from "@/components/layout/main-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SettingsPage() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8 pb-20">
        <header className="flex flex-col gap-3">
          <h1 className="text-foreground text-4xl font-bold tracking-tight">Settings & Account</h1>
          <p className="text-muted-foreground text-sm">Manage your account preferences, billing, and integrations.</p>
        </header>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="bg-transparent border-b border-border w-full justify-start rounded-none h-auto p-0 gap-8">
            {["Profile", "Team", "Notifications", "Billing", "Integrations"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab.toLowerCase()}
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground text-muted-foreground pb-3 pt-4 px-0 font-bold text-sm transition-all"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="profile" className="py-6 space-y-8 animate-in fade-in slide-in-from-bottom-2">
            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight">Profile Information</h2>
              <Card className="bg-card border-border">
                <CardContent className="p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
                  <div className="flex gap-4 items-center">
                    <Avatar className="h-24 w-24 border-2 border-border">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-primary/20 text-primary text-xl font-bold">SJ</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <p className="text-xl font-bold">Sarah Jenkins</p>
                      <p className="text-sm text-muted-foreground">sarah.jenkins@example.com</p>
                    </div>
                  </div>
                  <Button className="bg-primary text-brand-dark font-bold hover:bg-primary/90">
                    Upload new avatar
                  </Button>
                </CardContent>
              </Card>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight">Personal Details</h2>
              <Card className="bg-card border-border">
                <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">First Name</label>
                    <Input defaultValue="Sarah" className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Last Name</label>
                    <Input defaultValue="Jenkins" className="bg-background/50" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                    <Input defaultValue="sarah.jenkins@example.com" type="email" className="bg-background/50" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-muted-foreground">Job Role</label>
                    <Input defaultValue="Pricing Analyst" className="bg-background/50" />
                  </div>
                </CardContent>
              </Card>
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="ghost" className="text-muted-foreground hover:bg-secondary">Cancel</Button>
                <Button className="bg-primary text-brand-dark font-bold hover:bg-primary/90">Save Changes</Button>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  )
}
