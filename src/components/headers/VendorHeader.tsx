import { useState } from "react";
import { MimiosLogo } from "@/components/MimiosLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Bell,
  User,
  Globe,
  ChevronDown,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
  Briefcase,
  Calendar,
  Users,
  FileText,
  MapPin,
  Award
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface VendorHeaderProps {
  userProfile?: {
    name: string;
    company: string;
    avatar?: string;
  };
}

export function VendorHeader({ 
  userProfile = { name: "Dr. James Mitchell", company: "Mitchell Services Group" } 
}: VendorHeaderProps) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notifications] = useState(4);

  const mainNavigation = [
    { label: "Dashboard", href: "/vendor/dashboard", icon: <Briefcase className="h-4 w-4" /> },
    { label: "Services", href: "/vendor/services", icon: <Award className="h-4 w-4" /> },
    { label: "Bookings", href: "/vendor/bookings", icon: <Calendar className="h-4 w-4" /> },
    { label: "Clients", href: "/vendor/clients", icon: <Users className="h-4 w-4" /> },
    { label: "Locations", href: "/vendor/locations", icon: <MapPin className="h-4 w-4" /> },
    { label: "Reports", href: "/vendor/reports", icon: <FileText className="h-4 w-4" /> },
  ];

  const quickStats = [
    { label: "Today's Bookings", value: "7", change: "+2" },
    { label: "This Week", value: "$8,450", change: "+18%" },
    { label: "Rating", value: "4.9★", change: "↑0.1" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Bar - Vendor Info & Quick Stats */}
        <div className="flex items-center justify-between h-12 text-sm border-b border-gray-100">
          <div className="flex items-center space-x-4 text-gray-600">
            <span>🏢 {userProfile.company}</span>
            <span>•</span>
            <span>Service Provider</span>
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">
              ⭐ Premium
            </Badge>
            <Badge className="bg-green-100 text-green-800 border-green-200">
              ✅ Verified
            </Badge>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {quickStats.map((stat) => (
              <div key={stat.label} className="text-xs">
                <span className="text-gray-500">{stat.label}: </span>
                <span className="font-medium">{stat.value}</span>
                <span className="text-green-600 ml-1">{stat.change}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between h-16">
          {/* Logo & Navigation */}
          <div className="flex items-center space-x-6">
            <MimiosLogo 
              size="md" 
              showText={true} 
              clickable={true}
              onClick={() => navigate("/")}
            />
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {mainNavigation.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  onClick={() => navigate(item.href)}
                  className="text-gray-700 hover:text-primary hover:bg-primary/5 flex items-center space-x-2"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Button>
              ))}
            </nav>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-6 hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search bookings, clients, services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-50 border-0 focus:bg-white focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Quick Actions */}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => navigate("/vendor/services/new")}
              className="hidden sm:flex"
            >
              + Add Service
            </Button>

            {/* Calendar Quick Access */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate("/vendor/calendar")}
              className="hidden sm:flex"
            >
              <Calendar className="h-5 w-5" />
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-red-500">
                  {notifications}
                </Badge>
              )}
            </Button>

            {/* Messages */}
            <Button variant="ghost" size="icon" className="relative hidden sm:flex">
              <MessageSquare className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-2 w-2 bg-green-500 rounded-full"></Badge>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 pl-2">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {userProfile.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="hidden sm:block text-left">
                    <p className="text-sm font-medium">{userProfile.name}</p>
                    <p className="text-xs text-gray-500">Service Provider</p>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-3 py-2 border-b">
                  <p className="font-medium">{userProfile.name}</p>
                  <p className="text-sm text-gray-500">{userProfile.company}</p>
                </div>
                <DropdownMenuItem onClick={() => navigate("/vendor/profile")}>
                  <User className="mr-2 h-4 w-4" />
                  Profile Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/vendor/business")}>
                  <Briefcase className="mr-2 h-4 w-4" />
                  Business Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/vendor/calendar")}>
                  <Calendar className="mr-2 h-4 w-4" />
                  Calendar & Availability
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/vendor/locations")}>
                  <MapPin className="mr-2 h-4 w-4" />
                  Service Locations
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/vendor/credentials")}>
                  🎓 Credentials & Licenses
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/vendor/pricing")}>
                  💰 Pricing & Packages
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/vendor/reviews")}>
                  ⭐ Reviews & Ratings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/vendor/support")}>
                  🆘 Vendor Support
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/marketplace")}>
                  👁️ View as Customer
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white py-4">
            <div className="space-y-2">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search bookings, clients..."
                  className="pl-10"
                />
              </div>

              {/* Quick Stats Mobile */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {quickStats.map((stat) => (
                  <div key={stat.label} className="bg-gray-50 p-2 rounded text-center">
                    <div className="text-xs text-gray-500">{stat.label}</div>
                    <div className="font-medium">{stat.value}</div>
                    <div className="text-xs text-green-600">{stat.change}</div>
                  </div>
                ))}
              </div>
              
              {/* Mobile Navigation */}
              {mainNavigation.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  onClick={() => {
                    navigate(item.href);
                    setIsMenuOpen(false);
                  }}
                  className="w-full justify-start"
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Button>
              ))}

              {/* Mobile Quick Actions */}
              <div className="pt-2 border-t">
                <Button
                  variant="outline"
                  onClick={() => navigate("/vendor/services/new")}
                  className="w-full justify-start"
                >
                  + Add New Service
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => navigate("/vendor/calendar")}
                  className="w-full justify-start mt-2"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Calendar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
