import { Plane, Ship, Truck } from "lucide-react";

export const getCarrierIcon = (icon: string) => {
  switch (icon) {
    case "plane": return <Plane className="h-5 w-5 text-blue-600" />;
    case "ship": return <Ship className="h-5 w-5 text-blue-600" />;
    default: return <Truck className="h-5 w-5 text-blue-600" />;
  }
};

export const getComplexityColor = (complexity: string) => {
  switch (complexity) {
    case "low": return "bg-green-100 text-green-800 border-green-200";
    case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "high": return "bg-red-100 text-red-800 border-red-200";
    default: return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export const calculateTotalCost = (shippingCost: number, packageValue: string, tariffRate: number) => {
  const tariff = (parseFloat(packageValue) * tariffRate) / 100;
  const vat = ((parseFloat(packageValue) + tariff) * 19) / 100; // German VAT
  return shippingCost + tariff + vat;
};