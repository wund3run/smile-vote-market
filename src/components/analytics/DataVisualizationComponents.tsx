import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  PieChart,
  TrendingUp,
  TrendingDown,
  Activity,
  Target,
  Eye,
  Download,
  Filter,
  Calendar,
  RefreshCw
} from "lucide-react";

interface ChartData {
  id: string;
  name: string;
  value: number;
  percentage: number;
  trend: "up" | "down" | "stable";
  color: string;
}

interface PerformanceMetric {
  id: string;
  category: string;
  current: number;
  previous: number;
  target: number;
  unit: string;
  description: string;
}

interface ROIData {
  period: string;
  investment: number;
  savings: number;
  roi: number;
  cumulative: number;
}

export function DataVisualizationComponents() {
  const [selectedPeriod, setSelectedPeriod] = useState("month");
  const [activeChart, setActiveChart] = useState("spending");

  const spendingData: ChartData[] = [
    { id: "1", name: "Dental Instruments", value: 12500, percentage: 32, trend: "up", color: "#0066CC" },
    { id: "2", name: "Consumables", value: 8900, percentage: 23, trend: "down", color: "#00A86B" },
    { id: "3", name: "Equipment", value: 7200, percentage: 18, trend: "up", color: "#FF6B35" },
    { id: "4", name: "Technology", value: 5800, percentage: 15, trend: "stable", color: "#9B59B6" },
    { id: "5", name: "Maintenance", value: 4600, percentage: 12, trend: "up", color: "#F39C12" }
  ];

  const supplierData: ChartData[] = [
    { id: "1", name: "DentalTech Solutions", value: 18700, percentage: 35, trend: "up", color: "#0066CC" },
    { id: "2", name: "MedSupply International", value: 12400, percentage: 23, trend: "stable", color: "#00A86B" },
    { id: "3", name: "Precision Instruments", value: 9800, percentage: 18, trend: "down", color: "#FF6B35" },
    { id: "4", name: "Global Dental Corp", value: 7200, percentage: 14, trend: "up", color: "#9B59B6" },
    { id: "5", name: "Others", value: 5100, percentage: 10, trend: "stable", color: "#95A5A6" }
  ];

  const performanceMetrics: PerformanceMetric[] = [
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

  const roiData: ROIData[] = [
    { period: "Q1 2025", investment: 2400, savings: 890, roi: 37, cumulative: 37 },
    { period: "Q2 2025", investment: 1800, savings: 1340, roi: 74, cumulative: 52 },
    { period: "Q3 2025", investment: 2100, savings: 1680, roi: 80, cumulative: 63 },
    { period: "Q4 2025", investment: 1600, savings: 2100, roi: 131, cumulative: 78 }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="h-4 w-4 text-green-600" />;
      case "down": return <TrendingDown className="h-4 w-4 text-red-600" />;
      default: return <Activity className="h-4 w-4 text-blue-600" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up": return "text-green-600";
      case "down": return "text-red-600";
      default: return "text-blue-600";
    }
  };

  const calculateChange = (current: number, previous: number) => {
    return ((current - previous) / previous * 100).toFixed(1);
  };

  const getProgressColor = (current: number, target: number) => {
    const percentage = (current / target) * 100;
    if (percentage >= 90) return "bg-green-500";
    if (percentage >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            Data Visualization Dashboard
          </h2>
          <p className="text-gray-600 mt-1">
            Intuitive and actionable analytics for better decision making
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Period Selector */}
      <div className="flex gap-2">
        <span className="text-sm font-medium text-gray-700 py-2">Time Period:</span>
        {["week", "month", "quarter", "year"].map((period) => (
          <Button
            key={period}
            variant={selectedPeriod === period ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedPeriod(period)}
            className="capitalize"
          >
            {period}
          </Button>
        ))}
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-medium">Total Spend</p>
                <p className="text-2xl font-bold text-blue-900">$53,200</p>
                <p className="text-xs text-blue-700 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +12.5% vs last month
                </p>
              </div>
              <BarChart3 className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-green-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600 font-medium">Cost Savings</p>
                <p className="text-2xl font-bold text-green-900">$8,450</p>
                <p className="text-xs text-green-700 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +23.1% improvement
                </p>
              </div>
              <Target className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-50 to-purple-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600 font-medium">Active Suppliers</p>
                <p className="text-2xl font-bold text-purple-900">24</p>
                <p className="text-xs text-purple-700 flex items-center gap-1">
                  <Activity className="h-3 w-3" />
                  Avg rating: 4.6/5
                </p>
              </div>
              <PieChart className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-50 to-orange-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-orange-600 font-medium">Order Efficiency</p>
                <p className="text-2xl font-bold text-orange-900">96.8%</p>
                <p className="text-xs text-orange-700 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +7.4% this month
                </p>
              </div>
              <Activity className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Visualization Tabs */}
      <Tabs value={activeChart} onValueChange={setActiveChart} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="spending">Spending Analysis</TabsTrigger>
          <TabsTrigger value="suppliers">Supplier Performance</TabsTrigger>
          <TabsTrigger value="roi">ROI Tracking</TabsTrigger>
          <TabsTrigger value="trends">Market Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="spending" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Spending Breakdown Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-primary" />
                  Spending by Category
                </CardTitle>
                <CardDescription>
                  Distribution of procurement costs across product categories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {spendingData.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full"
                          data-color={item.color}
                        ></div>
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-600">${item.value.toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {getTrendIcon(item.trend)}
                        <span className="font-medium">{item.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trend Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Monthly Trend Analysis
                </CardTitle>
                <CardDescription>
                  Track spending patterns over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {spendingData.slice(0, 3).map((item) => (
                    <div key={item.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{item.name}</span>
                        <div className="flex items-center gap-2">
                          {getTrendIcon(item.trend)}
                          <span className={`text-sm font-medium ${getTrendColor(item.trend)}`}>
                            {item.trend === "up" ? "+" : item.trend === "down" ? "-" : ""}
                            {Math.floor(Math.random() * 15) + 5}%
                          </span>
                        </div>
                      </div>
                      <Progress 
                        value={item.percentage * 2} 
                        className="h-2"
                      />
                      <div className="text-xs text-gray-600">
                        ${item.value.toLocaleString()} ({item.percentage}% of total)
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="suppliers" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Supplier Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Top Suppliers by Volume
                </CardTitle>
                <CardDescription>
                  Your most important supplier relationships
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supplierData.map((supplier, index) => (
                    <div key={supplier.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-gray-400">#{index + 1}</span>
                          <span className="font-medium">{supplier.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {getTrendIcon(supplier.trend)}
                          <span className="font-medium">${supplier.value.toLocaleString()}</span>
                        </div>
                      </div>
                      <Progress 
                        value={supplier.percentage * 2} 
                        className="h-3"
                      />
                      <div className="text-xs text-gray-500 flex items-center gap-1">
                        <span>
                          {supplier.trend === "up" ? "↗" : supplier.trend === "down" ? "↘" : "→"} 
                          {supplier.trend}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Performance Metrics
                </CardTitle>
                <CardDescription>
                  Key performance indicators vs targets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {performanceMetrics.map((metric) => (
                    <div key={metric.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{metric.category}</span>
                        <span className="text-lg font-bold">
                          {metric.current}{metric.unit}
                        </span>
                      </div>
                      <Progress 
                        value={(metric.current / metric.target) * 100} 
                        className="h-2"
                      />
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>Target: {metric.target}{metric.unit}</span>
                        <span className={getTrendColor(metric.current > metric.previous ? "up" : "down")}>
                          {calculateChange(metric.current, metric.previous)}% vs last period
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">{metric.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="roi" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                ROI & Savings Calculation
              </CardTitle>
              <CardDescription>
                Track return on investment and cost savings over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-4">Quarterly ROI Performance</h4>
                  <div className="space-y-4">
                    {roiData.map((quarter) => (
                      <div key={quarter.period} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{quarter.period}</span>
                          <Badge className="bg-green-100 text-green-800 border-green-200">
                            {quarter.roi}% ROI
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Investment:</span>
                            <span className="font-medium ml-2">${quarter.investment.toLocaleString()}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Savings:</span>
                            <span className="font-medium ml-2 text-green-600">${quarter.savings.toLocaleString()}</span>
                          </div>
                        </div>
                        <Progress value={quarter.roi} className="h-2 mt-2" />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Cumulative Impact</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-900 mb-1">78%</div>
                        <div className="text-sm text-blue-700">Average ROI</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-green-50 rounded-lg text-center">
                        <div className="text-xl font-bold text-green-900">$6,010</div>
                        <div className="text-xs text-green-700">Total Savings</div>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg text-center">
                        <div className="text-xl font-bold text-purple-900">$7,900</div>
                        <div className="text-xs text-purple-700">Total Investment</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-medium">Savings Breakdown:</div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Process Optimization:</span>
                          <span className="font-medium">$2,340</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Bulk Purchase Discounts:</span>
                          <span className="font-medium">$1,890</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Supplier Negotiations:</span>
                          <span className="font-medium">$1,280</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Inventory Optimization:</span>
                          <span className="font-medium">$500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                Market Intelligence
              </CardTitle>
              <CardDescription>
                Stay ahead with market trends and competitive insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-600 mb-2">Advanced Analytics Coming Soon</h3>
                <p className="text-gray-500 mb-6">
                  We're developing advanced market intelligence features with real-time trend analysis.
                </p>
                <Button>
                  <Calendar className="h-4 w-4 mr-2" />
                  Request Early Access
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
