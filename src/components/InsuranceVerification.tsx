import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, CheckCircle2, AlertCircle, History, Download } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface VerificationResult {
  memberId: string;
  patientName: string;
  status: "active" | "inactive" | "expired";
  provider: string;
  plan: string;
  effectiveDate: string;
  expirationDate: string;
  coverageDetails: {
    type: string;
    coinsurance: string;
    deductible: string;
    maximumBenefit: string;
  }[];
}

export function InsuranceVerification() {
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sampleResult: VerificationResult = {
    memberId: "MEM123456",
    patientName: "John Doe",
    status: "active",
    provider: "DentalCare Plus",
    plan: "Premium PPO",
    effectiveDate: "2025-01-01",
    expirationDate: "2025-12-31",
    coverageDetails: [
      {
        type: "Preventive Care",
        coinsurance: "100%",
        deductible: "$0",
        maximumBenefit: "Unlimited"
      },
      {
        type: "Basic Services",
        coinsurance: "80%",
        deductible: "$50",
        maximumBenefit: "$2000/year"
      },
      {
        type: "Major Services",
        coinsurance: "50%",
        deductible: "$100",
        maximumBenefit: "$2000/year"
      }
    ]
  };

  const handleVerify = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setVerificationResult(sampleResult);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Insurance Verification</h2>
        <Button variant="outline">
          <History className="mr-2 h-4 w-4" />
          Verification History
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Verify Coverage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Member ID *" required />
              <Input placeholder="Group Number" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Patient First Name *" required />
              <Input placeholder="Patient Last Name *" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input type="date" placeholder="Date of Birth *" required />
              <Input placeholder="Insurance Provider *" required />
            </div>
            <Button 
              className="w-full" 
              onClick={handleVerify}
              disabled={isLoading}
            >
              {isLoading ? (
                <>Verifying...</>
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  Verify Coverage
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {verificationResult && (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Coverage Details</CardTitle>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download Report
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Summary Section */}
              <div className="flex items-start justify-between p-4 border rounded-lg bg-muted/20">
                <div>
                  <h3 className="font-medium">{verificationResult.patientName}</h3>
                  <p className="text-sm text-muted-foreground">Member ID: {verificationResult.memberId}</p>
                  <p className="text-sm text-muted-foreground">Plan: {verificationResult.plan}</p>
                </div>
                <div className="text-right">
                  <Badge className={
                    verificationResult.status === "active" ? "bg-green-100 text-green-800" :
                    verificationResult.status === "inactive" ? "bg-red-100 text-red-800" :
                    "bg-yellow-100 text-yellow-800"
                  }>
                    {verificationResult.status === "active" ? (
                      <CheckCircle2 className="mr-1 h-3 w-3 inline" />
                    ) : (
                      <AlertCircle className="mr-1 h-3 w-3 inline" />
                    )}
                    {verificationResult.status}
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-1">Effective: {verificationResult.effectiveDate}</p>
                  <p className="text-sm text-muted-foreground">Expires: {verificationResult.expirationDate}</p>
                </div>
              </div>

              {/* Coverage Details Table */}
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-2 text-left">Service Type</th>
                      <th className="px-4 py-2 text-left">Coinsurance</th>
                      <th className="px-4 py-2 text-left">Deductible</th>
                      <th className="px-4 py-2 text-left">Maximum Benefit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {verificationResult.coverageDetails.map((detail, index) => (
                      <tr key={index} className="border-t">
                        <td className="px-4 py-3">{detail.type}</td>
                        <td className="px-4 py-3">{detail.coinsurance}</td>
                        <td className="px-4 py-3">{detail.deductible}</td>
                        <td className="px-4 py-3">{detail.maximumBenefit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-muted/20 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Important Notes:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Verification is based on information provided by the insurance carrier</li>
                  <li>• Benefits are subject to change and should be re-verified periodically</li>
                  <li>• Pre-authorization may be required for certain procedures</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
