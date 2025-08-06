import { Button } from "@/components/ui/button";
import { BarChart3, Filter, Download, RefreshCw } from "lucide-react";

export function DataVisualizationHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-primary" />
          Data Visualization Dashboard
        </h2>
        <p className="text-gray-600 mt-1">
          Intuitive and actionable analytics for better decision making
        </p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
        <Button size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>
    </div>
  );
}