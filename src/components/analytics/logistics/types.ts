export interface ShippingOption {
  id: string;
  carrier: string;
  service: string;
  estimatedDelivery: string;
  cost: number;
  currency: string;
  transitTime: string;
  reliability: number;
  tracking: boolean;
  insurance: boolean;
  icon: "truck" | "plane" | "ship";
  restrictions?: string[];
}

export interface GlobalRoute {
  id: string;
  origin: string;
  destination: string;
  distance: number;
  averageTransitTime: string;
  popularCarriers: string[];
  customsComplexity: "low" | "medium" | "high";
  averageCost: number;
  currency: string;
}

export interface CustomsInfo {
  country: string;
  requirements: string[];
  averageProcessingTime: string;
  documentationNeeded: string[];
  restrictedItems: string[];
  tariffRate: number;
}