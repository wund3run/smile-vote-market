import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  FileCheck, 
  AlertTriangle, 
  Clock, 
  Upload, 
  Download,
  CheckCircle,
  XCircle
} from "lucide-react";

export function InsuranceCompliance() {
  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Claims</p>
                <h3 className="text-2xl font-bold mt-1">24</h3>
              </div>
              <Clock className="h-5 w-5 text-muted-foreground" />
            </div>
            <Progress value={65} className="mt-4" />
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Compliance Score</p>
                <h3 className="text-2xl font-bold mt-1">92%</h3>
              </div>
              <FileCheck className="h-5 w-5 text-primary" />
            </div>
            <Progress value={92} className="mt-4" />
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Alerts</p>
                <h3 className="text-2xl font-bold mt-1">3</h3>
              </div>
              <AlertTriangle className="h-5 w-5 text-destructive" />
            </div>
            <Progress value={25} className="mt-4" />
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="insurance">
        <TabsList>
          <TabsTrigger value="insurance">Insurance Claims</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="insurance" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Recent Claims</CardTitle>
                <Button>
                  <Upload className="mr-2 h-4 w-4" />
                  Submit New Claim
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Sample claims - replace with real data */}
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Claim #12345</p>
                    <p className="text-sm text-muted-foreground">Patient: John Doe</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline">In Progress</Badge>
                    <p className="text-sm text-muted-foreground mt-1">Submitted: July 15, 2025</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">HIPAA Compliance</p>
                      <p className="text-sm text-muted-foreground">Last verified: July 1, 2025</p>
                    </div>
                  </div>
                  <Badge>Valid</Badge>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-destructive" />
                    <div>
                      <p className="font-medium">Staff Certifications</p>
                      <p className="text-sm text-muted-foreground">2 certifications expiring soon</p>
                    </div>
                  </div>
                  <Badge variant="destructive">Action Required</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Document Library</CardTitle>
                <Button>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Document
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileCheck className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">HIPAA Compliance Certificate</p>
                      <p className="text-sm text-muted-foreground">PDF • 2.4 MB</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
