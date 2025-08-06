import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataVisualizationHeader } from "./data-visualization/DataVisualizationHeader";
import { PeriodSelector } from "./data-visualization/PeriodSelector";
import {
  spendingData,
  supplierData, 
  performanceMetrics,
  roiData
} from "./data-visualization/data";

export function DataVisualizationComponents() {
  const [selectedPeriod, setSelectedPeriod] = useState("month");
  const [activeChart, setActiveChart] = useState("spending");

  return (
    <div className="space-y-6">
      <DataVisualizationHeader />
      
      <PeriodSelector 
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
      />

      <Tabs value={activeChart} onValueChange={setActiveChart} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="spending">Spending Analysis</TabsTrigger>
          <TabsTrigger value="suppliers">Supplier Performance</TabsTrigger>
          <TabsTrigger value="performance">Key Metrics</TabsTrigger>
          <TabsTrigger value="roi">ROI Tracking</TabsTrigger>
        </TabsList>

        <TabsContent value="spending" className="space-y-4">
          {/* TODO: Extract spending analysis component */}
          <div>Spending analysis charts will be extracted...</div>
        </TabsContent>

        <TabsContent value="suppliers" className="space-y-4">
          {/* TODO: Extract supplier performance component */}
          <div>Supplier performance charts will be extracted...</div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          {/* TODO: Extract performance metrics component */}
          <div>Performance metrics will be extracted...</div>
        </TabsContent>

        <TabsContent value="roi" className="space-y-4">
          {/* TODO: Extract ROI tracking component */}
          <div>ROI tracking charts will be extracted...</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}