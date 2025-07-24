import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Package, 
  Clock, 
  TrendingUp, 
  Calendar,
  ShoppingCart,
  AlertCircle,
  CheckCircle,
  Percent
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface GroupBuy {
  id: string;
  title: string;
  description: string;
  supplier: string;
  originalPrice: number;
  discountedPrice: number;
  minParticipants: number;
  currentParticipants: number;
  deadline: string;
  status: "active" | "completed" | "expired";
  category: string;
  image: string;
}

interface BulkOrder {
  id: string;
  product: string;
  quantity: number;
  regularPrice: number;
  bulkPrice: number;
  supplier: string;
  deliveryDate: string;
  status: "available" | "limited" | "sold-out";
}

export function BulkPurchasing() {
  const [activeTab, setActiveTab] = useState<"group" | "bulk">("group");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const groupBuys: GroupBuy[] = [
    {
      id: "GB001",
      title: "Premium Dental Chairs Bundle",
      description: "High-quality dental chairs with latest ergonomic features",
      supplier: "DentalEquip Pro",
      originalPrice: 5000,
      discountedPrice: 3750,
      minParticipants: 10,
      currentParticipants: 7,
      deadline: "2025-08-15",
      status: "active",
      category: "equipment",
      image: "/placeholder.svg"
    },
    {
      id: "GB002",
      title: "Sterilization Equipment Set",
      description: "Complete sterilization solution for modern dental practices",
      supplier: "MedTech Solutions",
      originalPrice: 8000,
      discountedPrice: 6000,
      minParticipants: 5,
      currentParticipants: 5,
      deadline: "2025-08-01",
      status: "completed",
      category: "equipment",
      image: "/placeholder.svg"
    }
  ];

  const bulkOrders: BulkOrder[] = [
    {
      id: "BO001",
      product: "Dental Implants (Premium)",
      quantity: 50,
      regularPrice: 150,
      bulkPrice: 95,
      supplier: "ImplantTech",
      deliveryDate: "2025-08-30",
      status: "available"
    },
    {
      id: "BO002",
      product: "Composite Filling Materials",
      quantity: 100,
      regularPrice: 45,
      bulkPrice: 30,
      supplier: "DentalSupplies Co",
      deliveryDate: "2025-08-15",
      status: "limited"
    }
  ];

  const calculateSavings = (original: number, discounted: number) => {
    const savings = ((original - discounted) / original) * 100;
    return Math.round(savings);
  };

  const daysRemaining = (deadline: string) => {
    const days = Math.ceil((new Date(deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 0;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Bulk Purchasing</h2>
          <p className="text-muted-foreground">Join group buys and access bulk discounts</p>
        </div>
        <div className="flex gap-4">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="equipment">Equipment</SelectItem>
              <SelectItem value="supplies">Supplies</SelectItem>
              <SelectItem value="instruments">Instruments</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <TrendingUp className="mr-2 h-4 w-4" />
            View Analytics
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Active Group Buys */}
        {groupBuys.map((groupBuy) => (
          <Card key={groupBuy.id} className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                <img 
                  src={groupBuy.image} 
                  alt={groupBuy.title}
                  className="object-cover w-full h-full"
                />
                <Badge 
                  className={
                    groupBuy.status === "active" ? "bg-green-100 text-green-800" :
                    groupBuy.status === "completed" ? "bg-blue-100 text-blue-800" :
                    "bg-red-100 text-red-800"
                  }
                  variant="secondary"
                >
                  {groupBuy.status === "active" ? (
                    <Clock className="mr-1 h-3 w-3" />
                  ) : groupBuy.status === "completed" ? (
                    <CheckCircle className="mr-1 h-3 w-3" />
                  ) : (
                    <AlertCircle className="mr-1 h-3 w-3" />
                  )}
                  {groupBuy.status.charAt(0).toUpperCase() + groupBuy.status.slice(1)}
                </Badge>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">{groupBuy.title}</h3>
                  <p className="text-sm text-muted-foreground">{groupBuy.supplier}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">${groupBuy.discountedPrice}</p>
                    <p className="text-sm text-muted-foreground line-through">
                      ${groupBuy.originalPrice}
                    </p>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10">
                    <Percent className="mr-1 h-3 w-3" />
                    {calculateSavings(groupBuy.originalPrice, groupBuy.discountedPrice)}% OFF
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">
                      {groupBuy.currentParticipants}/{groupBuy.minParticipants} joined
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-primary transition-all`}
                      style={{ 
                        width: `${Math.min((groupBuy.currentParticipants / groupBuy.minParticipants) * 100, 100)}%` 
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Users className="mr-1 h-4 w-4" />
                    {groupBuy.minParticipants - groupBuy.currentParticipants} spots left
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="mr-1 h-4 w-4" />
                    {daysRemaining(groupBuy.deadline)} days left
                  </div>
                </div>

                <Button className="w-full">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Join Group Buy
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bulk Orders Section */}
      <Card>
        <CardHeader>
          <CardTitle>Bulk Order Deals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {bulkOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-start space-x-4">
                  <div>
                    <h4 className="font-medium">{order.product}</h4>
                    <p className="text-sm text-muted-foreground">{order.supplier}</p>
                    <div className="flex items-center mt-1">
                      <Badge 
                        variant="secondary" 
                        className={
                          order.status === "available" ? "bg-green-100 text-green-800" :
                          order.status === "limited" ? "bg-yellow-100 text-yellow-800" :
                          "bg-red-100 text-red-800"
                        }
                      >
                        {order.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground ml-2">
                        Delivery by {order.deliveryDate}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center justify-end mb-1">
                    <p className="text-lg font-bold">${order.bulkPrice}</p>
                    <p className="text-sm text-muted-foreground line-through ml-2">
                      ${order.regularPrice}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Min. Quantity: {order.quantity} units
                  </p>
                  <Button size="sm" className="mt-2">
                    Place Order
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
