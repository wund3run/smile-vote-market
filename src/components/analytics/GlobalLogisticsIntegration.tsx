import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogisticsHeader } from "./logistics/LogisticsHeader";
import { LogisticsStats } from "./logistics/LogisticsStats";
import { ShippingCalculator } from "./logistics/ShippingCalculator";
import { ShippingOptions } from "./logistics/ShippingOptions";
import { shippingOptions, globalRoutes, sampleCustomsInfo } from "./logistics/data";

export function GlobalLogisticsIntegration() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [originCountry, setOriginCountry] = useState("United States");
  const [destinationCountry, setDestinationCountry] = useState("Germany");
  const [packageWeight, setPackageWeight] = useState("2.5");
  const [packageValue, setPackageValue] = useState("500");

  return (
    <div className="space-y-6">
      <LogisticsHeader />
      <LogisticsStats />
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="calculator">Shipping Calculator</TabsTrigger>
          <TabsTrigger value="routes">Global Routes</TabsTrigger>
          <TabsTrigger value="customs">Customs Info</TabsTrigger>
          <TabsTrigger value="tracking">Live Tracking</TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-4">
          <ShippingCalculator
            originCountry={originCountry}
            setOriginCountry={setOriginCountry}
            destinationCountry={destinationCountry}
            setDestinationCountry={setDestinationCountry}
            packageWeight={packageWeight}
            setPackageWeight={setPackageWeight}
            packageValue={packageValue}
            setPackageValue={setPackageValue}
          />
          <ShippingOptions
            shippingOptions={shippingOptions}
            packageValue={packageValue}
            customsInfo={sampleCustomsInfo}
          />
        </TabsContent>

        <TabsContent value="routes" className="space-y-4">
          {/* TODO: Extract routes component */}
          <div>Routes content will be extracted...</div>
        </TabsContent>

        <TabsContent value="customs" className="space-y-4">
          {/* TODO: Extract customs component */}
          <div>Customs content will be extracted...</div>
        </TabsContent>

        <TabsContent value="tracking" className="space-y-4">
          {/* TODO: Extract tracking component */}
          <div>Tracking content will be extracted...</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}