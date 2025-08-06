import { Button } from "@/components/ui/button";
import { Globe, MapPin, Zap } from "lucide-react";

export function LogisticsHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Globe className="h-6 w-6 text-primary" />
          Global Logistics Integration
        </h2>
        <p className="text-gray-600 mt-1">
          Real-time shipping costs and delivery estimates across international borders
        </p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">
          <MapPin className="h-4 w-4 mr-2" />
          Track Shipments
        </Button>
        <Button size="sm">
          <Zap className="h-4 w-4 mr-2" />
          Bulk Quote
        </Button>
      </div>
    </div>
  );
}