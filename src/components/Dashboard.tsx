import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartLine, ShoppingCart, Calendar, Bell, MessageCircle } from "lucide-react";

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <QuickStatCard 
          title="Total Orders"
          value="156"
          trend="+12%"
          icon={<ShoppingCart className="h-6 w-6" />}
        />
        <QuickStatCard 
          title="Messages"
          value="24"
          trend="5 unread"
          icon={<MessageCircle className="h-6 w-6" />}
        />
        <QuickStatCard 
          title="Appointments"
          value="8"
          trend="Today"
          icon={<Calendar className="h-6 w-6" />}
        />
        <QuickStatCard 
          title="Alerts"
          value="3"
          trend="Requires action"
          icon={<Bell className="h-6 w-6" />}
        />
      </div>

      {/* Upcoming Appointments */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add appointment list component */}
        </CardContent>
      </Card>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add orders list component */}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Button variant="outline" className="h-24">
          <ShoppingCart className="mr-2 h-5 w-5" />
          Order Supplies
        </Button>
        {/* Add more quick action buttons */}
      </div>
    </div>
  );
}

function QuickStatCard({ title, value, trend, icon }: {
  title: string;
  value: string;
  trend: string;
  icon: React.ReactNode;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            <p className="text-xs text-muted-foreground mt-1">{trend}</p>
          </div>
          <div className="text-primary">{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
}
