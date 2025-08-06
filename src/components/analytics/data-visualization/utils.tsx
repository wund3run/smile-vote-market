import { TrendingUp, TrendingDown, Activity } from "lucide-react";

export const getTrendIcon = (trend: string) => {
  switch (trend) {
    case "up": return <TrendingUp className="h-4 w-4 text-green-600" />;
    case "down": return <TrendingDown className="h-4 w-4 text-red-600" />;
    default: return <Activity className="h-4 w-4 text-blue-600" />;
  }
};

export const getTrendColor = (trend: string) => {
  switch (trend) {
    case "up": return "text-green-600";
    case "down": return "text-red-600";
    default: return "text-blue-600";
  }
};

export const calculateChange = (current: number, previous: number) => {
  return ((current - previous) / previous * 100).toFixed(1);
};

export const getProgressColor = (current: number, target: number) => {
  const percentage = (current / target) * 100;
  if (percentage >= 90) return "bg-green-500";
  if (percentage >= 70) return "bg-yellow-500";
  return "bg-red-500";
};