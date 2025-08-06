import { Button } from "@/components/ui/button";

interface PeriodSelectorProps {
  selectedPeriod: string;
  setSelectedPeriod: (period: string) => void;
}

export function PeriodSelector({ selectedPeriod, setSelectedPeriod }: PeriodSelectorProps) {
  return (
    <div className="flex gap-2">
      <span className="text-sm font-medium text-gray-700 py-2">Time Period:</span>
      {["week", "month", "quarter", "year"].map((period) => (
        <Button
          key={period}
          variant={selectedPeriod === period ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedPeriod(period)}
          className="capitalize"
        >
          {period}
        </Button>
      ))}
    </div>
  );
}