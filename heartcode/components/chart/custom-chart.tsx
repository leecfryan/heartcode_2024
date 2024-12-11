"use client"

import { Bar, BarChart } from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [
  { month: "January", 2022: 100, 2023: 110 },
]

const chartConfig = {
  2022: {
    label: "2022",
    color: "#554666",
  },
  2023: {
    label: "2023",
    color: "#535f85",
  },
} satisfies ChartConfig

export function ChartComponent() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <Bar dataKey="2022" fill="var(--color-2022)" radius={4} />
        <Bar dataKey="2023" fill="var(--color-2023)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}