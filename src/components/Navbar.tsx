import { useState } from "react";
import { Search, User, ShoppingCart, Menu, X, Bell, Heart, Globe, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  onFilterToggle: () => void;
}

export function Navbar({ onFilterToggle }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userType, setUserType] = useState<'B2B' | 'B2B2' | 'B2C'>('B2C');
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState("EN");

  return (
    <nav className="bg-card border-b shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                DentalMarket
              </h1>
            </div>
          </div>

          {/* Enhanced Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products, equipment, services, tourism packages..."
                className="pl-10 pr-12 w-full bg-muted/50 focus:bg-background transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7"
                onClick={onFilterToggle}
              >
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Enhanced User Type Toggle & Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Enhanced User Type Toggle */}
            <div className="flex bg-muted rounded-lg p-1">
              <Button
                variant={userType === 'B2C' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setUserType('B2C')}
                className="text-xs font-medium"
              >
                Individual
              </Button>
              <Button
                variant={userType === 'B2B' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setUserType('B2B')}
                className="text-xs font-medium"
              >
                Business
              </Button>
              <Button
                variant={userType === 'B2B2' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setUserType('B2B2')}
                className="text-xs font-medium"
              >
                Professional
              </Button>
            </div>

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1">
                  <Globe className="h-4 w-4" />
                  {language}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage("EN")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("ES")}>
                  Español
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("FR")}>
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("DE")}>
                  Deutsch
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Action Buttons */}
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs">
                3
              </Badge>
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs">
                2
              </Badge>
            </Button>

            <Button variant="outline" className="font-medium">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-up">
            <div className="space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 w-full"
                />
              </div>

              {/* Mobile User Type Toggle */}
              <div className="grid grid-cols-3 bg-muted rounded-lg p-1 gap-1">
                <Button
                  variant={userType === 'B2C' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setUserType('B2C')}
                  className="text-xs font-medium"
                >
                  Individual
                </Button>
                <Button
                  variant={userType === 'B2B' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setUserType('B2B')}
                  className="text-xs font-medium"
                >
                  Business
                </Button>
                <Button
                  variant={userType === 'B2B2' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setUserType('B2B2')}
                  className="text-xs font-medium"
                >
                  Pro
                </Button>
              </div>

              {/* Mobile Actions */}
              <div className="flex space-x-2">
                <Button variant="ghost" className="flex-1">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart
                </Button>
                <Button variant="outline" className="flex-1">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}