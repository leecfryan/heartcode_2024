"use client"

// import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { age: "<20", year1: 83, year2: 94 },
  { age: "20-29", year1: 317, year2: 386 },
  { age: "30-39", year1: 250, year2: 281 },
  { age: "40-49", year1: 101, year2: 122 },
  { age: "50-59", year1: 33, year2: 52 },
  { age: ">60", year1: 18, year2: 9 },
]

const chartConfig = {
  year1: {
    label: "2022",
    color: "hsl(var(--chart-1))",
  },
  year2: {
    label: "2023",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function ChartComponent() {
  return (
    <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="age"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              // tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="year1" fill="var(--color-year1)" radius={4} />
            <Bar dataKey="year2" fill="var(--color-year2)" radius={4} />
          </BarChart>
        </ChartContainer>
  )
}