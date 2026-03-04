"use client"

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts'

const data = [
  { x: 65, y: 70, name: 'Us (PricePulse)', color: '#00D4AA', z: 400 },
  { x: 30, y: 40, name: 'Competitor A', color: '#3b82f6', z: 200 },
  { x: 80, y: 30, name: 'Competitor B', color: '#a855f7', z: 300 },
  { x: 45, y: 85, name: 'Competitor C', color: '#f97316', z: 500 },
  { x: 20, y: 60, name: 'Competitor D', color: '#ec4899', z: 150 },
  { x: 85, y: 65, name: 'Competitor E', color: '#10b981', z: 250 },
]

export function MarketPositionMatrix() {
  return (
    <div className="h-[400px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" opacity={0.2} />
          <XAxis
            type="number"
            dataKey="x"
            name="Market Share"
            unit="%"
            axisLine={false}
            tickLine={false}
            label={{ value: 'MARKET SHARE (%)', position: 'bottom', fill: '#94a3b8', fontSize: 10, offset: 0 }}
            tick={{ fill: '#94a3b8', fontSize: 12 }}
          />
          <YAxis
            type="number"
            dataKey="y"
            name="Price Index"
            axisLine={false}
            tickLine={false}
            label={{ value: 'PRICE INDEX', angle: -90, position: 'insideLeft', fill: '#94a3b8', fontSize: 10 }}
            tick={{ fill: '#94a3b8', fontSize: 12 }}
          />
          <ZAxis type="number" dataKey="z" range={[50, 400]} />
          <Tooltip
            cursor={{ strokeDasharray: '3 3' }}
            contentStyle={{ backgroundColor: '#0A1628', border: '1px solid #1e293b', borderRadius: '8px' }}
          />
          <Scatter data={data}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  )
}
