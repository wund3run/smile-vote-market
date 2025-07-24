import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SmartProcurementAnalytics } from "@/components/analytics/SmartProcurementAnalytics";
import { ComplianceDashboard } from "@/components/analytics/ComplianceDashboard";
import { AIRecommendationSystem } from "@/components/analytics/AIRecommendationSystem";
import { GlobalLogisticsIntegration } from "@/components/analytics/GlobalLogisticsIntegration";
import { DataVisualizationComponents } from "@/components/analytics/DataVisualizationComponents";
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  Package, 
  Users,
  Calendar,
  Download,
  ArrowUpRight,
  Activity,
  Brain,
  Shield,
  Globe,
  Eye,
  Zap
} from "lucide-react";

export default function Analytics() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Advanced Analytics Hub
          </span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive data-driven insights with AI-powered recommendations for smarter dental commerce
        </p>
      </div>

      {/* Analytics Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6 mb-8">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="procurement" className="flex items-center gap-2">
            <Brain className="h-4 w-4" />
            Smart Analytics
          </TabsTrigger>
          <TabsTrigger value="compliance" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Compliance
          </TabsTrigger>
          <TabsTrigger value="ai" className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            AI Insights
          </TabsTrigger>
          <TabsTrigger value="logistics" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Global Logistics
          </TabsTrigger>
          <TabsTrigger value="visualization" className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            Data Viz
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$54,231</div>
                <p className="text-xs text-muted-foreground">
                  <span className="inline-flex items-center text-green-600">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +12.5%
                  </span>
                  from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">
                  <span className="inline-flex items-center text-green-600">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +5.2%
                  </span>
                  from last week
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cost Savings</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$8,450</div>
                <p className="text-xs text-muted-foreground">
                  <span className="inline-flex items-center text-green-600">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +23.1%
                  </span>
                  this month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Suppliers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">
                  <span className="inline-flex items-center text-blue-600">
                    <Activity className="h-3 w-3 mr-1" />
                    4.6/5 avg rating
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <Button variant="outline" className="flex flex-col h-auto p-4">
                  <Download className="h-5 w-5 mb-2" />
                  <span className="text-sm">Export Report</span>
                </Button>
                <Button variant="outline" className="flex flex-col h-auto p-4">
                  <Calendar className="h-5 w-5 mb-2" />
                  <span className="text-sm">Schedule Report</span>
                </Button>
                <Button variant="outline" className="flex flex-col h-auto p-4">
                  <BarChart3 className="h-5 w-5 mb-2" />
                  <span className="text-sm">Custom Dashboard</span>
                </Button>
                <Button variant="outline" className="flex flex-col h-auto p-4">
                  <Users className="h-5 w-5 mb-2" />
                  <span className="text-sm">Team Access</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="procurement">
          <SmartProcurementAnalytics />
        </TabsContent>

        <TabsContent value="compliance">
          <ComplianceDashboard />
        </TabsContent>

        <TabsContent value="ai">
          <AIRecommendationSystem />
        </TabsContent>

        <TabsContent value="logistics">
          <GlobalLogisticsIntegration />
        </TabsContent>

        <TabsContent value="visualization">
          <DataVisualizationComponents />
        </TabsContent>
      </Tabs>
    </div>
  );
}
