import { Card, CardContent } from "@/components/ui/card";
import { Globe, Clock, Package, DollarSign } from "lucide-react";

export function LogisticsStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 font-medium">Active Routes</p>
              <p className="text-2xl font-bold text-blue-900">45</p>
              <p className="text-xs text-blue-700">Worldwide coverage</p>
            </div>
            <Globe className="h-8 w-8 text-blue-600" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-green-50 to-green-100">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 font-medium">Avg. Transit Time</p>
              <p className="text-2xl font-bold text-green-900">4.2</p>
              <p className="text-xs text-green-700">days globally</p>
            </div>
            <Clock className="h-8 w-8 text-green-600" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-purple-50 to-purple-100">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-600 font-medium">Carrier Partners</p>
              <p className="text-2xl font-bold text-purple-900">12</p>
              <p className="text-xs text-purple-700">Major logistics providers</p>
            </div>
            <Package className="h-8 w-8 text-purple-600" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-orange-50 to-orange-100">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-orange-600 font-medium">Cost Savings</p>
              <p className="text-2xl font-bold text-orange-900">23%</p>
              <p className="text-xs text-orange-700">vs individual quotes</p>
            </div>
            <DollarSign className="h-8 w-8 text-orange-600" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}