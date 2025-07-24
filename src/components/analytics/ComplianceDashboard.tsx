import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  Download,
  Calendar,
  Award,
  AlertCircle,
  Zap
} from "lucide-react";

interface ComplianceItem {
  id: string;
  name: string;
  type: "certification" | "document" | "inspection" | "training";
  status: "valid" | "expiring" | "expired" | "pending";
  expiryDate: string;
  daysUntilExpiry: number;
  issuer: string;
  category: string;
}

interface SupplierCompliance {
  id: string;
  name: string;
  overallScore: number;
  certifications: number;
  documentsStatus: "complete" | "incomplete";
  lastAudit: string;
  riskLevel: "low" | "medium" | "high";
}

export function ComplianceDashboard() {
  const [selectedTab, setSelectedTab] = useState("overview");
  
  const complianceItems: ComplianceItem[] = [
    {
      id: "1",
      name: "ISO 13485 Medical Devices",
      type: "certification",
      status: "valid",
      expiryDate: "2026-03-15",
      daysUntilExpiry: 245,
      issuer: "BSI Group",
      category: "Quality Management"
    },
    {
      id: "2",
      name: "FDA 510(k) Clearance",
      type: "certification",
      status: "expiring",
      expiryDate: "2025-09-20",
      daysUntilExpiry: 65,
      issuer: "FDA",
      category: "Medical Device Approval"
    },
    {
      id: "3",
      name: "CE Marking Documentation",
      type: "document",
      status: "expired",
      expiryDate: "2025-06-10",
      daysUntilExpiry: -38,
      issuer: "Notified Body",
      category: "European Compliance"
    },
    {
      id: "4",
      name: "Sterilization Validation",
      type: "inspection",
      status: "pending",
      expiryDate: "2025-08-30",
      daysUntilExpiry: 42,
      issuer: "Internal QA",
      category: "Process Validation"
    }
  ];

  const supplierCompliance: SupplierCompliance[] = [
    {
      id: "1",
      name: "DentalTech Solutions",
      overallScore: 96,
      certifications: 8,
      documentsStatus: "complete",
      lastAudit: "2025-05-15",
      riskLevel: "low"
    },
    {
      id: "2",
      name: "MedSupply International",
      overallScore: 87,
      certifications: 6,
      documentsStatus: "incomplete",
      lastAudit: "2025-04-22",
      riskLevel: "medium"
    },
    {
      id: "3",
      name: "Precision Instruments Ltd",
      overallScore: 78,
      certifications: 4,
      documentsStatus: "incomplete",
      lastAudit: "2025-03-10",
      riskLevel: "high"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "valid": return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "expiring": return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case "expired": return <AlertCircle className="h-4 w-4 text-red-600" />;
      case "pending": return <Clock className="h-4 w-4 text-blue-600" />;
      default: return <Shield className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "valid": return "bg-green-100 text-green-800 border-green-200";
      case "expiring": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "expired": return "bg-red-100 text-red-800 border-red-200";
      case "pending": return "bg-blue-100 text-blue-800 border-blue-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low": return "bg-green-100 text-green-800 border-green-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "high": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            Compliance Dashboard
          </h2>
          <p className="text-gray-600 mt-1">
            Track certifications, expiry dates, and regulatory requirements in real-time
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button size="sm">
            <Zap className="h-4 w-4 mr-2" />
            Auto-Renewal Setup
          </Button>
        </div>
      </div>

      {/* Compliance Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-green-50 to-green-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600 font-medium">Valid Certifications</p>
                <p className="text-2xl font-bold text-green-900">24</p>
                <p className="text-xs text-green-700">Active & Current</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-yellow-600 font-medium">Expiring Soon</p>
                <p className="text-2xl font-bold text-yellow-900">3</p>
                <p className="text-xs text-yellow-700">Next 90 days</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-red-50 to-red-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-600 font-medium">Action Required</p>
                <p className="text-2xl font-bold text-red-900">1</p>
                <p className="text-xs text-red-700">Expired items</p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-medium">Compliance Score</p>
                <p className="text-2xl font-bold text-blue-900">94%</p>
                <p className="text-xs text-blue-700">+2% this month</p>
              </div>
              <Award className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Compliance Content */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
          <TabsTrigger value="suppliers">Supplier Compliance</TabsTrigger>
          <TabsTrigger value="automation">Automation</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          {/* Critical Items */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                Critical Items Requiring Attention
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {complianceItems
                  .filter(item => item.status === "expired" || item.daysUntilExpiry < 30)
                  .map((item) => (
                    <div key={item.id} className="p-4 border border-red-200 rounded-lg bg-red-50">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            {getStatusIcon(item.status)}
                            <h4 className="font-medium">{item.name}</h4>
                            <Badge className={getStatusColor(item.status)}>
                              {item.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">
                            Issued by: {item.issuer} | Category: {item.category}
                          </p>
                          <p className="text-sm font-medium text-red-600 mt-1">
                            {item.status === "expired" 
                              ? `Expired ${Math.abs(item.daysUntilExpiry)} days ago`
                              : `Expires in ${item.daysUntilExpiry} days`
                            }
                          </p>
                        </div>
                        <Button size="sm" variant="outline" className="ml-4">
                          Renew Now
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          {/* Compliance Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Upcoming Renewals (Next 6 Months)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {complianceItems
                  .filter(item => item.daysUntilExpiry > 0 && item.daysUntilExpiry <= 180)
                  .sort((a, b) => a.daysUntilExpiry - b.daysUntilExpiry)
                  .map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(item.status)}
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-600">{item.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{item.expiryDate}</p>
                        <p className="text-xs text-gray-500">{item.daysUntilExpiry} days</p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="certifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Certifications & Documents</CardTitle>
              <CardDescription>
                Complete overview of your compliance documentation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complianceItems.map((item) => (
                  <div key={item.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {getStatusIcon(item.status)}
                          <h4 className="font-medium">{item.name}</h4>
                          <Badge className={getStatusColor(item.status)}>
                            {item.status}
                          </Badge>
                          <Badge variant="outline">{item.type}</Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">Issuer:</span> {item.issuer}
                          </div>
                          <div>
                            <span className="font-medium">Category:</span> {item.category}
                          </div>
                          <div>
                            <span className="font-medium">Expires:</span> {item.expiryDate}
                          </div>
                          <div>
                            <span className="font-medium">Days Left:</span> {item.daysUntilExpiry}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button size="sm" variant="outline">
                          <FileText className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="suppliers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Supplier Compliance Status</CardTitle>
              <CardDescription>
                Monitor compliance status of all your suppliers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {supplierCompliance.map((supplier) => (
                  <div key={supplier.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-medium text-lg">{supplier.name}</h4>
                          <Badge className={getRiskColor(supplier.riskLevel)}>
                            {supplier.riskLevel} risk
                          </Badge>
                          <Badge className={supplier.documentsStatus === "complete" 
                            ? "bg-green-100 text-green-800 border-green-200" 
                            : "bg-red-100 text-red-800 border-red-200"
                          }>
                            {supplier.documentsStatus}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">Certifications:</span> {supplier.certifications}
                          </div>
                          <div>
                            <span className="font-medium">Last Audit:</span> {supplier.lastAudit}
                          </div>
                          <div>
                            <span className="font-medium">Score:</span> {supplier.overallScore}%
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold mb-1">{supplier.overallScore}%</div>
                        <Progress value={supplier.overallScore} className="w-24 h-2" />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                      <Button size="sm" variant="outline">
                        Request Update
                      </Button>
                      <Button size="sm" variant="outline">
                        Schedule Audit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="automation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Automated Compliance Management
              </CardTitle>
              <CardDescription>
                Set up automatic renewals and notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Auto-Renewal Settings</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Automatically initiate renewal processes before expiration
                  </p>
                  <Button variant="outline" className="w-full">
                    Configure Auto-Renewal
                  </Button>
                </Card>
                
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Notification Alerts</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Get notified 90, 60, and 30 days before expiration
                  </p>
                  <Button variant="outline" className="w-full">
                    Setup Notifications
                  </Button>
                </Card>
                
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Supplier Monitoring</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Automatically track supplier compliance changes
                  </p>
                  <Button variant="outline" className="w-full">
                    Enable Monitoring
                  </Button>
                </Card>
                
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Document Management</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Auto-organize and archive compliance documents
                  </p>
                  <Button variant="outline" className="w-full">
                    Setup Document Flow
                  </Button>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
