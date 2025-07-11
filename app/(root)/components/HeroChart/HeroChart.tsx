"use client"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", desktop: 100, mobile: 80 },
  { month: "February", desktop: 200, mobile: 180 },
  { month: "March", desktop: 300, mobile: 280 },
  { month: "April", desktop: 400, mobile: 390 },
  { month: "May", desktop: 500, mobile: 490 },
  { month: "June", desktop: 600, mobile: 590 },
]
const chartConfig = {
  desktop: {
    label: "Ventas",
    color: "#2563eb",
  },
  mobile: {
    label: "Envios",
    color: "#60a5fa",
  },
} satisfies ChartConfig
export function HeroChart() {
  return (
    <>
    <p className="font-bold">Hace crecer tu marca</p>
    <ChartContainer  config={chartConfig} className="min-h-[500px]  ">
      <BarChart  width={800} height={800} accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip  content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="#16205A" radius={4} />
        <Bar dataKey="mobile" fill="#F05928" radius={4} />
      </BarChart>
    </ChartContainer>
    </>
  )
}