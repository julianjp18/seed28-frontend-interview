export interface BullRadarChartDataPoint {
  subject: string;
  value: number;
  fullMark?: number;
}

export interface BullRadarChartProps {
  /** Data points for the radar (5 typically). If not passed, default values are used. */
  data?: BullRadarChartDataPoint[];
  className?: string;
}
