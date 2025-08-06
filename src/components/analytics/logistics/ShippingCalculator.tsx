import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator } from "lucide-react";

interface ShippingCalculatorProps {
  originCountry: string;
  setOriginCountry: (value: string) => void;
  destinationCountry: string;
  setDestinationCountry: (value: string) => void;
  packageWeight: string;
  setPackageWeight: (value: string) => void;
  packageValue: string;
  setPackageValue: (value: string) => void;
}

export function ShippingCalculator({
  originCountry,
  setOriginCountry,
  destinationCountry,
  setDestinationCountry,
  packageWeight,
  setPackageWeight,
  packageValue,
  setPackageValue,
}: ShippingCalculatorProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          International Shipping Calculator
        </CardTitle>
        <CardDescription>
          Get instant quotes from multiple carriers with all-in costs including duties and taxes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">From</label>
            <Input 
              value={originCountry} 
              onChange={(e) => setOriginCountry(e.target.value)}
              placeholder="Origin country"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">To</label>
            <Input 
              value={destinationCountry} 
              onChange={(e) => setDestinationCountry(e.target.value)}
              placeholder="Destination country"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Weight (kg)</label>
            <Input 
              value={packageWeight} 
              onChange={(e) => setPackageWeight(e.target.value)}
              placeholder="Package weight"
              type="number"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Value (USD)</label>
            <Input 
              value={packageValue} 
              onChange={(e) => setPackageValue(e.target.value)}
              placeholder="Package value"
              type="number"
            />
          </div>
        </div>
        <Button className="w-full md:w-auto">
          <Calculator className="h-4 w-4 mr-2" />
          Calculate Shipping Options
        </Button>
      </CardContent>
    </Card>
  );
}