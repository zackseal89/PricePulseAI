"use client"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts'

const data = [
  { name: 'Oct 1', us: 50, competitors: 60 },
  { name: 'Oct 8', us: 30, competitors: 40 },
  { name: 'Oct 15', us: 60, competitors: 55 },
  { name: 'Oct 22', us: 20, competitors: 30 },
  { name: 'Oct 29', us: 80, competitors: 70 },
]

export function MarketPulseChart() {
  return (
    <div className="h-[300px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUs" x1="0" y1="0" x2="0" y2="100%">
              <stop offset="5%" stopColor="#00D4AA" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#00D4AA" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" opacity={0.2} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#94a3b8', fontSize: 12, fontFamily: 'JetBrains Mono' }}
            dy={10}
          />
          <YAxis hide />
          <Tooltip
            contentStyle={{ backgroundColor: '#0A1628', border: '1px solid #1e293b', borderRadius: '8px' }}
            itemStyle={{ fontSize: '12px' }}
          />
          <Area
            type="monotone"
            dataKey="us"
            stroke="#00D4AA"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorUs)"
          />
          <Area
            type="monotone"
            dataKey="competitors"
            stroke="#8B7BFF"
            strokeWidth={2}
            fill="transparent"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
