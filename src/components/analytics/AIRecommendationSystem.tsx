import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Brain,
  TrendingUp,
  Target,
  Lightbulb,
  Star,
  ShoppingCart,
  Users,
  BarChart3,
  Zap,
  ThumbsUp,
  ThumbsDown,
  Filter
} from "lucide-react";

interface Recommendation {
  id: string;
  type: "product" | "supplier" | "optimization" | "trend";
  title: string;
  description: string;
  confidence: number;
  priority: "high" | "medium" | "low";
  category: string;
  impact: {
    savings?: number;
    efficiency?: number;
    quality?: number;
  };
  reasoning: string[];
  actionable: boolean;
  estimatedTimeToImplement: string;
}

interface MarketTrend {
  id: string;
  category: string;
  trend: "rising" | "declining" | "stable";
  growth: number;
  timeframe: string;
  description: string;
  opportunity: string;
}

export function AIRecommendationSystem() {
  const [activeTab, setActiveTab] = useState("recommendations");
  const [filterPriority, setFilterPriority] = useState<string>("all");
  const [userFeedback, setUserFeedback] = useState<{[key: string]: "positive" | "negative" | null}>({});

  const recommendations: Recommendation[] = [
    {
      id: "1",
      type: "product",
      title: "Switch to Eco-Friendly Dental Bibs",
      description: "Based on your practice profile and recent market trends, switching to biodegradable dental bibs could reduce costs by 15% while improving your environmental rating.",
      confidence: 92,
      priority: "high",
      category: "Consumables",
      impact: {
        savings: 240,
        efficiency: 5,
        quality: 10
      },
      reasoning: [
        "Your current supplier has 23% higher pricing than market average",
        "Patient surveys show 78% preference for eco-friendly practices",
        "New supplier offers bulk discounts matching your usage patterns"
      ],
      actionable: true,
      estimatedTimeToImplement: "2-3 days"
    },
    {
      id: "2",
      type: "supplier",
      title: "Partner with RegionalDental Supply Co.",
      description: "This supplier offers 18% better pricing on your top 5 product categories and has excellent delivery reliability in your area.",
      confidence: 87,
      priority: "high",
      category: "Supplier Relations",
      impact: {
        savings: 1850,
        efficiency: 25
      },
      reasoning: [
        "Average delivery time: 1.2 days vs your current 2.8 days",
        "Quality rating: 4.8/5 with excellent customer reviews",
        "Offers volume discounts on your high-usage items"
      ],
      actionable: true,
      estimatedTimeToImplement: "1 week"
    },
    {
      id: "3",
      type: "optimization",
      title: "Optimize Inventory Reorder Points",
      description: "AI analysis suggests adjusting reorder points for 12 items could reduce holding costs by 22% without stockout risk.",
      confidence: 94,
      priority: "medium",
      category: "Inventory Management",
      impact: {
        savings: 420,
        efficiency: 15
      },
      reasoning: [
        "Historical usage data shows seasonal patterns not reflected in current settings",
        "Supplier lead times have improved, allowing lower safety stock",
        "Storage costs can be reduced with optimized turnover"
      ],
      actionable: true,
      estimatedTimeToImplement: "1 day"
    },
    {
      id: "4",
      type: "trend",
      title: "Consider Digital Impression Materials",
      description: "Market trend analysis shows 34% growth in digital dentistry. Early adoption could position your practice competitively.",
      confidence: 78,
      priority: "low",
      category: "Technology Trends",
      impact: {
        quality: 30,
        efficiency: 20
      },
      reasoning: [
        "3 nearby practices have already adopted digital workflows",
        "Patient satisfaction scores show 15% improvement with digital impressions",
        "Long-term cost benefits outweigh initial investment"
      ],
      actionable: false,
      estimatedTimeToImplement: "3-6 months"
    }
  ];

  const marketTrends: MarketTrend[] = [
    {
      id: "1",
      category: "Digital Dentistry",
      trend: "rising",
      growth: 34,
      timeframe: "12 months",
      description: "Rapid adoption of digital impression systems and CAD/CAM technology",
      opportunity: "Early adopters seeing 20% efficiency gains and improved patient satisfaction"
    },
    {
      id: "2",
      category: "Eco-Friendly Products",
      trend: "rising",
      growth: 28,
      timeframe: "6 months",
      description: "Increased demand for biodegradable and sustainable dental supplies",
      opportunity: "Marketing advantage and potential cost savings through bulk eco-product purchasing"
    },
    {
      id: "3",
      category: "Bulk Purchasing",
      trend: "stable",
      growth: 12,
      timeframe: "12 months",
      description: "Consistent growth in group purchasing arrangements",
      opportunity: "Join purchasing groups for 15-25% cost savings on high-volume items"
    }
  ];

  const handleFeedback = (recommendationId: string, feedback: "positive" | "negative") => {
    setUserFeedback(prev => ({
      ...prev,
      [recommendationId]: feedback
    }));
  };

  const filteredRecommendations = recommendations.filter(rec => 
    filterPriority === "all" || rec.priority === filterPriority
  );

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low": return "bg-blue-100 text-blue-800 border-blue-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "rising": return <TrendingUp className="h-4 w-4 text-green-600" />;
      case "declining": return <TrendingUp className="h-4 w-4 text-red-600 rotate-180" />;
      default: return <BarChart3 className="h-4 w-4 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            AI Recommendation System
          </h2>
          <p className="text-gray-600 mt-1">
            Smart suggestions based on practice type, history, and industry trends
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button size="sm">
            <Zap className="h-4 w-4 mr-2" />
            Refresh Recommendations
          </Button>
        </div>
      </div>

      {/* AI Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-purple-50 to-purple-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600 font-medium">Active Recommendations</p>
                <p className="text-2xl font-bold text-purple-900">12</p>
                <p className="text-xs text-purple-700">4 high priority</p>
              </div>
              <Lightbulb className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-green-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600 font-medium">Acceptance Rate</p>
                <p className="text-2xl font-bold text-green-900">87%</p>
                <p className="text-xs text-green-700">Last 30 days</p>
              </div>
              <ThumbsUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-medium">Estimated Savings</p>
                <p className="text-2xl font-bold text-blue-900">$2,510</p>
                <p className="text-xs text-blue-700">If all implemented</p>
              </div>
              <Target className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-50 to-orange-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-orange-600 font-medium">AI Confidence</p>
                <p className="text-2xl font-bold text-orange-900">91%</p>
                <p className="text-xs text-orange-700">Average score</p>
              </div>
              <Brain className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="trends">Market Trends</TabsTrigger>
          <TabsTrigger value="performance">AI Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="recommendations" className="space-y-4">
          {/* Filter Controls */}
          <div className="flex gap-2 mb-4">
            <span className="text-sm font-medium text-gray-700 py-2">Filter by priority:</span>
            {["all", "high", "medium", "low"].map((priority) => (
              <Button
                key={priority}
                variant={filterPriority === priority ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterPriority(priority)}
                className="capitalize"
              >
                {priority}
              </Button>
            ))}
          </div>

          {/* Recommendations List */}
          <div className="space-y-4">
            {filteredRecommendations.map((rec) => (
              <Card key={rec.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-lg">{rec.title}</CardTitle>
                        <Badge className={getPriorityColor(rec.priority)}>
                          {rec.priority} priority
                        </Badge>
                        <Badge variant="outline">{rec.category}</Badge>
                      </div>
                      <CardDescription className="text-base">
                        {rec.description}
                      </CardDescription>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-sm text-gray-600 mb-1">AI Confidence</div>
                      <div className="text-2xl font-bold">{rec.confidence}%</div>
                      <Progress value={rec.confidence} className="w-20 h-2 mt-1" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Impact Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                    {rec.impact.savings && (
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">${rec.impact.savings}</div>
                        <div className="text-xs text-gray-600">Monthly Savings</div>
                      </div>
                    )}
                    {rec.impact.efficiency && (
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">+{rec.impact.efficiency}%</div>
                        <div className="text-xs text-gray-600">Efficiency Gain</div>
                      </div>
                    )}
                    {rec.impact.quality && (
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">+{rec.impact.quality}%</div>
                        <div className="text-xs text-gray-600">Quality Improvement</div>
                      </div>
                    )}
                  </div>

                  {/* AI Reasoning */}
                  <div className="mb-4">
                    <h5 className="font-medium text-sm text-gray-700 mb-2">AI Analysis:</h5>
                    <ul className="space-y-1">
                      {rec.reasoning.map((reason, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {rec.actionable ? (
                        <Button size="sm">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Implement ({rec.estimatedTimeToImplement})
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline">
                          Learn More
                        </Button>
                      )}
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                    
                    {/* Feedback */}
                    <div className="flex gap-1">
                      <Button
                        size="sm"
                        variant={userFeedback[rec.id] === "positive" ? "default" : "ghost"}
                        onClick={() => handleFeedback(rec.id, "positive")}
                      >
                        <ThumbsUp className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant={userFeedback[rec.id] === "negative" ? "default" : "ghost"}
                        onClick={() => handleFeedback(rec.id, "negative")}
                      >
                        <ThumbsDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Market Trend Analysis
              </CardTitle>
              <CardDescription>
                AI-identified trends and opportunities in the dental industry
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {marketTrends.map((trend) => (
                  <div key={trend.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        {getTrendIcon(trend.trend)}
                        <h4 className="font-medium text-lg">{trend.category}</h4>
                        <Badge className={trend.trend === "rising" 
                          ? "bg-green-100 text-green-800 border-green-200" 
                          : "bg-blue-100 text-blue-800 border-blue-200"
                        }>
                          {trend.trend}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-600">+{trend.growth}%</div>
                        <div className="text-xs text-gray-500">{trend.timeframe}</div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-2">{trend.description}</p>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm font-medium text-blue-900 mb-1">Opportunity:</p>
                      <p className="text-sm text-blue-800">{trend.opportunity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>AI Learning Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Practice Pattern Recognition</span>
                      <span>94%</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Market Trend Analysis</span>
                      <span>87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Supplier Performance Prediction</span>
                      <span>91%</span>
                    </div>
                    <Progress value={91} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Cost Optimization</span>
                      <span>89%</span>
                    </div>
                    <Progress value={89} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Interaction Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Recommendations Accepted</span>
                    <span className="font-bold">87%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Average Implementation Time</span>
                    <span className="font-bold">2.3 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cost Savings Achieved</span>
                    <span className="font-bold">$12,480</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">User Satisfaction Score</span>
                    <span className="font-bold">4.6/5</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
