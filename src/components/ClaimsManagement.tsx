import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Search, Filter, Download } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Claim {
  id: string;
  patientName: string;
  date: string;
  amount: number;
  status: "pending" | "approved" | "rejected" | "processing";
  insuranceProvider: string;
  procedureCode: string;
  description: string;
}

export function ClaimsManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [isNewClaimOpen, setIsNewClaimOpen] = useState(false);

  const claims: Claim[] = [
    {
      id: "CLM-001",
      patientName: "John Doe",
      date: "2025-07-15",
      amount: 1500.00,
      status: "pending",
      insuranceProvider: "DentalCare Plus",
      procedureCode: "D2740",
      description: "Crown - porcelain/ceramic"
    },
    {
      id: "CLM-002",
      patientName: "Jane Smith",
      date: "2025-07-14",
      amount: 2300.00,
      status: "approved",
      insuranceProvider: "OralHealth Pro",
      procedureCode: "D3310",
      description: "Root canal - anterior"
    }
  ];

  const filteredClaims = claims.filter(claim => 
    (statusFilter === "all" || claim.status === statusFilter) &&
    (claim.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
     claim.id.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getStatusBadge = (status: Claim["status"]) => {
    const styles = {
      pending: "bg-yellow-100 text-yellow-800",
      approved: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
      processing: "bg-blue-100 text-blue-800"
    };

    return <Badge className={styles[status]}>{status}</Badge>;
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Claims Management</h2>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Claims
          </Button>
          <Dialog open={isNewClaimOpen} onOpenChange={setIsNewClaimOpen}>
            <DialogTrigger asChild>
              <Button>
                <FileText className="mr-2 h-4 w-4" />
                New Claim
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create New Claim</DialogTitle>
                <DialogDescription>
                  Fill in the claim details below. Required fields are marked with an asterisk.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Input className="col-span-4" placeholder="Patient Name *" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Input className="col-span-2" placeholder="Procedure Code *" />
                  <Input className="col-span-2" type="number" placeholder="Amount *" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Input className="col-span-4" placeholder="Insurance Provider *" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Input className="col-span-4" placeholder="Description" />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsNewClaimOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsNewClaimOpen(false)}>
                  Submit Claim
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Claims List</CardTitle>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search claims..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 w-[200px]"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredClaims.map((claim) => (
              <div key={claim.id} 
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                <div>
                  <div className="flex items-center gap-3">
                    <p className="font-medium">{claim.patientName}</p>
                    {getStatusBadge(claim.status)}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {claim.procedureCode} - {claim.description}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Provider: {claim.insuranceProvider}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">${claim.amount.toFixed(2)}</p>
                  <p className="text-sm text-muted-foreground">{claim.date}</p>
                  <p className="text-sm text-muted-foreground">ID: {claim.id}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
