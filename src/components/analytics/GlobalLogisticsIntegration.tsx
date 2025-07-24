import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Globe,
  Truck,
  Plane,
  Ship,
  Package,
  Clock,
  DollarSign,
  MapPin,
  AlertTriangle,
  CheckCircle,
  Calculator,
  Zap
} from "lucide-react";

interface ShippingOption {
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

interface GlobalRoute {
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

interface CustomsInfo {
  country: string;
  requirements: string[];
  averageProcessingTime: string;
  documentationNeeded: string[];
  restrictedItems: string[];
  tariffRate: number;
}

export function GlobalLogisticsIntegration() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [originCountry, setOriginCountry] = useState("United States");
  const [destinationCountry, setDestinationCountry] = useState("Germany");
  const [packageWeight, setPackageWeight] = useState("2.5");
  const [packageValue, setPackageValue] = useState("500");

  const shippingOptions: ShippingOption[] = [
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

  const globalRoutes: GlobalRoute[] = [
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

  const customsInfo: CustomsInfo = {
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

  const getCarrierIcon = (icon: string) => {
    switch (icon) {
      case "plane": return <Plane className="h-5 w-5 text-blue-600" />;
      case "ship": return <Ship className="h-5 w-5 text-blue-600" />;
      default: return <Truck className="h-5 w-5 text-blue-600" />;
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "low": return "bg-green-100 text-green-800 border-green-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "high": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const calculateTotalCost = (shippingCost: number, packageValue: string, tariffRate: number) => {
    const tariff = (parseFloat(packageValue) * tariffRate) / 100;
    const vat = ((parseFloat(packageValue) + tariff) * 19) / 100; // German VAT
    return shippingCost + tariff + vat;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
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

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-medium">Active Routes</p>
                <p className="text-2xl font-bold text-blue-900">45</p>
                <p className="text-xs text-blue-700">Worldwide coverage</p>
              </div>
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-green-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600 font-medium">Avg. Transit Time</p>
                <p className="text-2xl font-bold text-green-900">4.2</p>
                <p className="text-xs text-green-700">days globally</p>
              </div>
              <Clock className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-50 to-purple-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600 font-medium">Carrier Partners</p>
                <p className="text-2xl font-bold text-purple-900">12</p>
                <p className="text-xs text-purple-700">Major logistics providers</p>
              </div>
              <Package className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-50 to-orange-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-orange-600 font-medium">Cost Savings</p>
                <p className="text-2xl font-bold text-orange-900">23%</p>
                <p className="text-xs text-orange-700">vs individual quotes</p>
              </div>
              <DollarSign className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="calculator">Shipping Calculator</TabsTrigger>
          <TabsTrigger value="routes">Global Routes</TabsTrigger>
          <TabsTrigger value="customs">Customs Info</TabsTrigger>
          <TabsTrigger value="tracking">Live Tracking</TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-4">
          {/* Calculator Form */}
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

          {/* Shipping Options */}
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
        </TabsContent>

        <TabsContent value="routes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Popular Global Routes
              </CardTitle>
              <CardDescription>
                Most frequently used shipping routes with performance data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {globalRoutes.map((route) => (
                  <div key={route.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-lg">
                          {route.origin} → {route.destination}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {route.distance.toLocaleString()} km • {route.averageTransitTime}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold">
                          {route.currency} {route.averageCost}
                        </div>
                        <div className="text-sm text-gray-600">Average cost</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Popular Carriers</div>
                        <div className="flex flex-wrap gap-1">
                          {route.popularCarriers.map((carrier, index) => (
                            <Badge key={index} variant="outline">{carrier}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Customs Complexity</div>
                        <Badge className={getComplexityColor(route.customsComplexity)}>
                          {route.customsComplexity}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Get Quote
                        </Button>
                        <Button size="sm" variant="outline">
                          Route Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                Customs Information: {customsInfo.country}
              </CardTitle>
              <CardDescription>
                Important customs requirements and documentation needed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {customsInfo.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Documentation Needed</h4>
                  <ul className="space-y-2">
                    {customsInfo.documentationNeeded.map((doc, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Package className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Processing Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Average Processing Time:</span>
                      <span className="font-medium">{customsInfo.averageProcessingTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tariff Rate:</span>
                      <span className="font-medium">{customsInfo.tariffRate}%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Restricted Items</h4>
                  <ul className="space-y-2">
                    {customsInfo.restrictedItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tracking" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Live Shipment Tracking
              </CardTitle>
              <CardDescription>
                Real-time tracking for all your international shipments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-600 mb-2">No Active Shipments</h3>
                <p className="text-gray-500 mb-6">
                  Your tracked shipments will appear here once you start using our logistics services.
                </p>
                <Button>
                  Create First Shipment
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
