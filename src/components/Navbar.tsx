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
    <nav className="bg-card border-b shadow-soft sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
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
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search products, equipment, services, tourism packages..."
                className="pl-12 pr-14 py-3 w-full bg-muted/50 focus:bg-background transition-colors border-0 focus:ring-2 focus:ring-primary/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 hover:bg-primary/10"
                onClick={onFilterToggle}
              >
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Enhanced User Type Toggle & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Enhanced User Type Toggle */}
            <div className="flex bg-muted/70 rounded-xl p-1.5 border">
              <Button
                variant={userType === 'B2C' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setUserType('B2C')}
                className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200"
              >
                Individual
              </Button>
              <Button
                variant={userType === 'B2B' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setUserType('B2B')}
                className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200"
              >
                Business
              </Button>
              <Button
                variant={userType === 'B2B2' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setUserType('B2B2')}
                className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200"
              >
                Professional
              </Button>
            </div>

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2 hover:bg-muted/50 transition-colors">
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
            <Button variant="ghost" size="icon" className="relative hover:bg-muted/50 transition-colors">
              <Heart className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative hover:bg-muted/50 transition-colors">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-accent">
                3
              </Badge>
            </Button>

            <Button variant="ghost" size="icon" className="relative hover:bg-muted/50 transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-accent">
                2
              </Badge>
            </Button>

            <Button variant="default" className="font-medium px-6 shadow-soft hover:shadow-medium transition-all duration-200">
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