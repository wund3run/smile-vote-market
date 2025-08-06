import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ShippingOption, CustomsInfo } from "./types";
import { getCarrierIcon, calculateTotalCost } from "./utils";

interface ShippingOptionsProps {
  shippingOptions: ShippingOption[];
  packageValue: string;
  customsInfo: CustomsInfo;
}

export function ShippingOptions({ shippingOptions, packageValue, customsInfo }: ShippingOptionsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Shipping Options</CardTitle>
        <CardDescription>
          Prices include shipping, duties, taxes, and insurance where applicable
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {shippingOptions.map((option) => (
            <div key={option.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  {getCarrierIcon(option.icon)}
                  <div>
                    <h4 className="font-medium">{option.carrier}</h4>
                    <p className="text-sm text-gray-600">{option.service}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold">
                    ${calculateTotalCost(option.cost, packageValue, customsInfo.tariffRate).toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-600">Total cost incl. duties</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                <div>
                  <div className="text-sm text-gray-600">Transit Time</div>
                  <div className="font-medium">{option.transitTime}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Delivery Date</div>
                  <div className="font-medium">{option.estimatedDelivery}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Reliability</div>
                  <div className="flex items-center gap-2">
                    <Progress value={option.reliability} className="w-16 h-2" />
                    <span className="text-sm">{option.reliability}%</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Features</div>
                  <div className="flex gap-1">
                    {option.tracking && <Badge variant="outline" className="text-xs">Tracking</Badge>}
                    {option.insurance && <Badge variant="outline" className="text-xs">Insurance</Badge>}
                  </div>
                </div>
              </div>

              {option.restrictions && (
                <div className="mb-3">
                  <div className="text-sm text-gray-600 mb-1">Restrictions:</div>
                  <div className="flex flex-wrap gap-1">
                    {option.restrictions.map((restriction, index) => (
                      <Badge key={index} variant="outline" className="text-xs text-orange-600 border-orange-200">
                        {restriction}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <Button size="sm">Select This Option</Button>
                <Button size="sm" variant="outline">View Details</Button>
                <Button size="sm" variant="outline">Get Quote</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}