import { ChartData, PerformanceMetric, ROIData } from "./types";

export const spendingData: ChartData[] = [
  { id: "1", name: "Dental Instruments", value: 12500, percentage: 32, trend: "up", color: "#0066CC" },
  { id: "2", name: "Consumables", value: 8900, percentage: 23, trend: "down", color: "#00A86B" },
  { id: "3", name: "Equipment", value: 7200, percentage: 18, trend: "up", color: "#FF6B35" },
  { id: "4", name: "Technology", value: 5800, percentage: 15, trend: "stable", color: "#9B59B6" },
  { id: "5", name: "Maintenance", value: 4600, percentage: 12, trend: "up", color: "#F39C12" }
];

export const supplierData: ChartData[] = [
  { id: "1", name: "DentalTech Solutions", value: 18700, percentage: 35, trend: "up", color: "#0066CC" },
  { id: "2", name: "MedSupply International", value: 12400, percentage: 23, trend: "stable", color: "#00A86B" },
  { id: "3", name: "Precision Instruments", value: 9800, percentage: 18, trend: "down", color: "#FF6B35" },
  { id: "4", name: "Global Dental Corp", value: 7200, percentage: 14, trend: "up", color: "#9B59B6" },
  { id: "5", name: "Others", value: 5100, percentage: 10, trend: "stable", color: "#95A5A6" }
];

export const performanceMetrics: PerformanceMetric[] = [
  {
    id: "1",
    category: "Cost Optimization",
    current: 23.5,
    previous: 19.2,
    target: 25.0,
    unit: "%",
    description: "Savings compared to previous purchasing methods"
  },
  {
    id: "2",
    category: "Order Fulfillment",
    current: 96.8,
    previous: 89.4,
    target: 98.0,
    unit: "%",
    description: "Orders delivered on time and complete"
  },
  {
    id: "3",
    category: "Supplier Reliability",
    current: 4.7,
    previous: 4.2,
    target: 4.8,
    unit: "/5",
    description: "Average supplier performance rating"
  },
  {
    id: "4",
    category: "Inventory Turnover",
    current: 8.2,
    previous: 6.8,
    target: 9.0,
    unit: "x/year",
    description: "How efficiently inventory is managed"
  }
];

export const roiData: ROIData[] = [
  { period: "Q1 2025", investment: 2400, savings: 890, roi: 37, cumulative: 37 },
  { period: "Q2 2025", investment: 1800, savings: 1340, roi: 74, cumulative: 52 },
  { period: "Q3 2025", investment: 2100, savings: 1680, roi: 80, cumulative: 63 },
  { period: "Q4 2025", investment: 1600, savings: 2100, roi: 131, cumulative: 78 }
];