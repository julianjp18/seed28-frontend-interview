"use client";

import { cn } from "@/lib/utils";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import type { BullRadarChartProps } from "./BullRadarChart.types";

const DEFAULT_DATA = [
  { subject: "C1", value: 85, fullMark: 100 },
  { subject: "C2", value: 90, fullMark: 100 },
  { subject: "C3", value: 78, fullMark: 100 },
  { subject: "C4", value: 92, fullMark: 100 },
  { subject: "C5", value: 88, fullMark: 100 },
];

const CHART_FILL = "#CCF0DA80";
const CHART_STROKE = "#3ED97C";
const GRID_STROKE = "#E5E7EB";

export function BullRadarChart({ data = DEFAULT_DATA, className }: BullRadarChartProps) {
  return (
    <div
      className={cn("size-20 shrink-0 overflow-hidden rounded-full bg-[#F1F1F1] sm:size-24", className)}
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="90%" data={data}>
          <PolarGrid stroke={GRID_STROKE} />
          <PolarAngleAxis dataKey="subject" tick={false} tickLine={false} axisLine={false} />
          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Score"
            dataKey="value"
            fill={CHART_FILL}
            stroke={CHART_STROKE}
            strokeWidth={2}
            fillOpacity={1}
            isAnimationActive={false}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
