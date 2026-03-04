"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Brand X', value: 42, color: '#00D4AA' },
  { name: 'Brand Y', value: 35, color: '#3b82f6' },
  { name: 'Brand Z', value: 15, color: '#1e293b' },
  { name: 'Others', value: 8, color: '#334155' },
]

export function ShareOfVoiceChart() {
  return (
    <div className="h-[200px] w-full relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-2xl font-bold">42%</span>
        <span className="text-[10px] text-muted-foreground uppercase">Brand X</span>
      </div>
    </div>
  )
}
