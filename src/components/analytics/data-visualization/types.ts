export interface ChartData {
  id: string;
  name: string;
  value: number;
  percentage: number;
  trend: "up" | "down" | "stable";
  color: string;
}

export interface PerformanceMetric {
  id: string;
  category: string;
  current: number;
  previous: number;
  target: number;
  unit: string;
  description: string;
}

export interface ROIData {
  period: string;
  investment: number;
  savings: number;
  roi: number;
  cumulative: number;
}