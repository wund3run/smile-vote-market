import { ShippingOption, GlobalRoute, CustomsInfo } from "./types";

export const shippingOptions: ShippingOption[] = [
  {
    id: "1",
    carrier: "DHL Express",
    service: "Worldwide Express",
    estimatedDelivery: "2025-07-22",
    cost: 89.50,
    currency: "USD",
    transitTime: "2-3 business days",
    reliability: 96,
    tracking: true,
    insurance: true,
    icon: "plane",
    restrictions: ["Hazardous materials excluded"]
  },
  {
    id: "2",
    carrier: "FedEx International",
    service: "Priority Express",
    estimatedDelivery: "2025-07-23",
    cost: 76.20,
    currency: "USD",
    transitTime: "3-4 business days",
    reliability: 94,
    tracking: true,
    insurance: true,
    icon: "plane"
  },
  {
    id: "3",
    carrier: "UPS Worldwide",
    service: "Express Saver",
    estimatedDelivery: "2025-07-24",
    cost: 65.80,
    currency: "USD",
    transitTime: "4-5 business days",
    reliability: 92,
    tracking: true,
    insurance: false,
    icon: "truck"
  },
  {
    id: "4",
    carrier: "Maersk Line",
    service: "Ocean Freight",
    estimatedDelivery: "2025-08-15",
    cost: 25.30,
    currency: "USD",
    transitTime: "25-30 days",
    reliability: 88,
    tracking: true,
    insurance: false,
    icon: "ship",
    restrictions: ["Minimum volume required", "Temperature sensitive items excluded"]
  }
];

export const globalRoutes: GlobalRoute[] = [
  {
    id: "1",
    origin: "United States",
    destination: "Germany",
    distance: 6900,
    averageTransitTime: "3-5 days",
    popularCarriers: ["DHL", "FedEx", "UPS"],
    customsComplexity: "medium",
    averageCost: 75,
    currency: "USD"
  },
  {
    id: "2",
    origin: "United States",
    destination: "Japan",
    distance: 10900,
    averageTransitTime: "4-7 days",
    popularCarriers: ["FedEx", "DHL", "Japan Post"],
    customsComplexity: "high",
    averageCost: 95,
    currency: "USD"
  },
  {
    id: "3",
    origin: "Germany",
    destination: "Brazil",
    distance: 9800,
    averageTransitTime: "5-8 days",
    popularCarriers: ["DHL", "TNT", "Correios"],
    customsComplexity: "high",
    averageCost: 110,
    currency: "EUR"
  }
];

export const sampleCustomsInfo: CustomsInfo = {
  country: "Germany",
  requirements: [
    "Commercial invoice required",
    "CE marking for medical devices",
    "Import license for restricted items",
    "VAT registration for high-value goods"
  ],
  averageProcessingTime: "1-2 business days",
  documentationNeeded: [
    "Commercial Invoice",
    "Packing List",
    "Certificate of Origin",
    "Medical Device Declaration"
  ],
  restrictedItems: [
    "Liquid medications",
    "Controlled substances",
    "Items containing mercury"
  ],
  tariffRate: 6.5
};