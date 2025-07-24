import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Target,
  Brain,
  DollarSign,
  Package,
  Clock,
  AlertTriangle
} from "lucide-react";

interface ProcurementInsight {
  id: string;
  category: string;
  prediction: string;
  confidence: number;
  impact: "high" | "medium" | "low";
  savings: number;
  timeframe: string;
}

interface UsagePattern {
  product: string;
  category: string;
  usage: number;
  trend: "up" | "down" | "stable";
  prediction: string;
  recommendation: string;
}

export function SmartProcurementAnalytics() {
  const [selectedTimeframe, setSelectedTimeframe] = useState<"week" | "month" | "quarter" | "year">("month");
  
  const insights: ProcurementInsight[] = [
    {
      id: "1",
      category: "Dental Instruments",
      prediction: "Expect 15% increase in demand for periodontal instruments next month",
      confidence: 87,
      impact: "high",
      savings: 2340,
      timeframe: "30 days"
    },
    {
      id: "2",
      category: "Consumables",
      prediction: "Glove usage pattern suggests bulk order opportunity",
      confidence: 92,
      impact: "medium",
      savings: 850,
      timeframe: "14 days"
    },
    {
      id: "3",
      category: "Digital Equipment",
      prediction: "Scanner maintenance supplies due for replacement",
      confidence: 95,
      impact: "high",
      savings: 1200,
      timeframe: "7 days"
    }
  ];

  const usagePatterns: UsagePattern[] = [
    {
      product: "Nitrile Gloves (Size M)",
      category: "PPE",
      usage: 85,
      trend: "up",
      prediction: "12% increase expected",
      recommendation: "Consider bulk purchase for 20% savings"
    },
    {
      product: "Composite Resin",
      category: "Restorative",
      usage: 67,
      trend: "stable",
      prediction: "Steady usage pattern",
      recommendation: "Maintain current stock levels"
    },
    {
      product: "Suture Material",
      category: "Surgical",
      usage: 45,
      trend: "down",
      prediction: "15% decrease trend",
      recommendation: "Reduce next order by 25%"
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="h-4 w-4 text-green-600" />;
      case "down": return <TrendingDown className="h-4 w-4 text-red-600" />;
      default: return <BarChart3 className="h-4 w-4 text-blue-600" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-green-100 text-green-800 border-green-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Smart Procurement Analytics
          </h2>
          <p className="text-gray-600 mt-1">
            AI-powered insights for better purchasing decisions with predictive analytics
          </p>
        </div>
        <div className="flex gap-2">
          {["week", "month", "quarter", "year"].map((period) => (
            <Button
              key={period}
              variant={selectedTimeframe === period ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTimeframe(period as any)}
              className="capitalize"
            >
              {period}
            </Button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-medium">Potential Savings</p>
                <p className="text-2xl font-bold text-blue-900">$4,390</p>
                <p className="text-xs text-blue-700">Next 30 days</p>
              </div>
              <DollarSign className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-green-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600 font-medium">Optimization Score</p>
                <p className="text-2xl font-bold text-green-900">87%</p>
                <p className="text-xs text-green-700">+5% from last month</p>
              </div>
              <Target className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-50 to-purple-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600 font-medium">Active Insights</p>
                <p className="text-2xl font-bold text-purple-900">12</p>
                <p className="text-xs text-purple-700">3 high priority</p>
              </div>
              <Brain className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-50 to-orange-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-orange-600 font-medium">Prediction Accuracy</p>
                <p className="text-2xl font-bold text-orange-900">94%</p>
                <p className="text-xs text-orange-700">Last 90 days</p>
              </div>
              <BarChart3 className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            AI-Powered Predictions
          </CardTitle>
          <CardDescription>
            Smart recommendations based on usage patterns and market trends
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.map((insight) => (
              <div key={insight.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-medium">{insight.category}</h4>
                      <Badge className={getImpactColor(insight.impact)}>
                        {insight.impact} impact
                      </Badge>
                    </div>
                    <p className="text-gray-700 mb-2">{insight.prediction}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>Confidence: {insight.confidence}%</span>
                      <span>Savings: ${insight.savings}</span>
                      <span>Timeframe: {insight.timeframe}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Apply Recommendation
                  </Button>
                </div>
                <Progress value={insight.confidence} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Usage Patterns */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChart className="h-5 w-5 text-primary" />
            Usage Pattern Analysis
          </CardTitle>
          <CardDescription>
            Track product consumption and optimize inventory levels
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {usagePatterns.map((pattern, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">{pattern.product}</h4>
                      {getTrendIcon(pattern.trend)}
                      <Badge variant="outline">{pattern.category}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{pattern.prediction}</p>
                    <p className="text-sm font-medium text-primary">{pattern.recommendation}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{pattern.usage}%</div>
                    <div className="text-xs text-gray-500">Usage Level</div>
                  </div>
                </div>
                <Progress value={pattern.usage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Recommended Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Package className="h-5 w-5 mb-2 text-blue-600" />
              <span className="font-medium">Optimize Bulk Orders</span>
              <span className="text-xs text-gray-600 mt-1">Save $850 this month</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <AlertTriangle className="h-5 w-5 mb-2 text-orange-600" />
              <span className="font-medium">Review Low Stock</span>
              <span className="text-xs text-gray-600 mt-1">3 items need attention</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <TrendingUp className="h-5 w-5 mb-2 text-green-600" />
              <span className="font-medium">Trend Analysis</span>
              <span className="text-xs text-gray-600 mt-1">View market insights</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
