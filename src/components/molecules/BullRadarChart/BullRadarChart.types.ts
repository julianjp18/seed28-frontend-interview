export interface BullRadarChartDataPoint {
  subject: string;
  value: number;
  fullMark?: number;
}

export interface BullRadarChartProps {
  /** Datos para el radar (5 criterios típicamente). Si no se pasa, se usan valores por defecto. */
  data?: BullRadarChartDataPoint[];
  className?: string;
}
