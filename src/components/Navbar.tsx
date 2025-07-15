import { useState } from "react";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userType, setUserType] = useState<'B2B' | 'B2C'>('B2C');

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

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products, equipment, services..."
                className="pl-10 w-full"
              />
            </div>
          </div>

          {/* User Type Toggle & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* User Type Toggle */}
            <div className="flex bg-muted rounded-lg p-1">
              <Button
                variant={userType === 'B2C' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setUserType('B2C')}
                className="text-xs"
              >
                B2C
              </Button>
              <Button
                variant={userType === 'B2B' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setUserType('B2B')}
                className="text-xs"
              >
                B2B
              </Button>
            </div>

            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="outline">
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
              <div className="flex bg-muted rounded-lg p-1">
                <Button
                  variant={userType === 'B2C' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setUserType('B2C')}
                  className="flex-1 text-xs"
                >
                  B2C
                </Button>
                <Button
                  variant={userType === 'B2B' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setUserType('B2B')}
                  className="flex-1 text-xs"
                >
                  B2B
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