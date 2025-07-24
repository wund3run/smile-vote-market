import { useState } from "react";
import { MimiosLogo } from "@/components/MimiosLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Bell,
  ShoppingCart,
  User,
  Heart,
  Globe,
  ChevronDown,
  Filter,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ClinicHeaderProps {
  onFilterToggle?: () => void;
  userProfile?: {
    name: string;
    clinic: string;
    avatar?: string;
  };
}

export function ClinicHeader({ 
  onFilterToggle, 
  userProfile = { name: "Dr. Sarah Johnson", clinic: "SmileCare Dental" } 
}: ClinicHeaderProps) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notifications] = useState(3);
  const [cartItems] = useState(5);

  const mainNavigation = [
    { label: "Marketplace", href: "/marketplace", icon: "🏪" },
    { label: "My Orders", href: "/orders", icon: "📦" },
    { label: "Inventory", href: "/inventory", icon: "📊" },
    { label: "Analytics", href: "/analytics", icon: "📈" },
    { label: "Suppliers", href: "/suppliers", icon: "🤝" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Bar - Clinic Info & Quick Actions */}
        <div className="flex items-center justify-between h-12 text-sm border-b border-gray-100">
          <div className="flex items-center space-x-4 text-gray-600">
            <span>🏥 {userProfile.clinic}</span>
            <span>•</span>
            <span>Welcome back, {userProfile.name}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-xs">
              🔔 Compliance Status: ✅ Active
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              💳 Credit: $2,450
            </Button>
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
                  className="text-gray-700 hover:text-primary hover:bg-primary/5"
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-6 hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search products, suppliers, orders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-50 border-0 focus:bg-white focus:ring-2 focus:ring-primary/20"
              />
              {onFilterToggle && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onFilterToggle}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7"
                >
                  <Filter className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="relative hidden sm:flex">
              <Heart className="h-5 w-5" />
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
            </Button>

            {/* Shopping Cart */}
            <Button variant="ghost" size="icon" className="relative" onClick={() => navigate("/cart")}>
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-primary">
                  {cartItems}
                </Badge>
              )}
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 pl-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {userProfile.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-3 py-2 border-b">
                  <p className="font-medium">{userProfile.name}</p>
                  <p className="text-sm text-gray-500">{userProfile.clinic}</p>
                </div>
                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  <User className="mr-2 h-4 w-4" />
                  Profile Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/clinic-settings")}>
                  <Settings className="mr-2 h-4 w-4" />
                  Clinic Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/billing")}>
                  💳 Billing & Payments
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/compliance")}>
                  📋 Compliance Center
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/support")}>
                  🆘 Support Center
                </DropdownMenuItem>
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
                  placeholder="Search products, suppliers..."
                  className="pl-10"
                />
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
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
