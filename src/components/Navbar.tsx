import { useState } from "react";
import { Search, User, ShoppingCart, Menu, X, Bell, Heart, Globe, Filter, MessageSquare, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { MimiosLogo } from "@/components/MimiosLogo";

interface NavbarProps {
  onFilterToggle: () => void;
  onMenuClick: () => void;
}

export function Navbar({ onFilterToggle, onMenuClick }: NavbarProps) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userType, setUserType] = useState<'B2B' | 'B2B2' | 'B2C'>('B2C');
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState("EN");

  return (
    <nav 
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container flex h-16 items-center">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        <div className="flex items-center space-x-4 lg:space-x-6 mx-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <MimiosLogo 
              size="md" 
              showText={true} 
              clickable={true}
              onClick={() => navigate("/")}
            />
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate("/marketplace")}>Marketplace</Button>
            <Button variant="ghost" onClick={() => navigate("/vendors")}>Vendors</Button>
            <Button variant="ghost" onClick={() => navigate("/analytics")}>Analytics</Button>
          </div>
        </div>

        {/* Enhanced Search Bar */}
        <div className="flex-1 px-4 hidden md:block">
          <div className="relative max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products, suppliers, labs..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search products, suppliers, and labs"
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
              Clinic
            </Button>
            <Button
              variant={userType === 'B2B' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setUserType('B2B')}
              className="text-xs font-medium"
            >
              Supplier
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
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-1"
                aria-label="Select language"
                title="Language Selector"
              >
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
            </DropdownMenuContent>
          </DropdownMenu>          {/* Action Buttons */}

          <Button variant="ghost" size="icon" className="relative" aria-label="Favorites">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative" aria-label="Messages">
            <MessageSquare className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative" aria-label="Shopping Cart">
            <ShoppingCart className="h-5 w-5" />
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={() => navigate("/support")}
          >
            <HelpCircle className="h-5 w-5" />
          </Button>

          <Button variant="outline" className="font-medium">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-up">
            <div className="space-y-4">
              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                <nav aria-label="Mobile navigation">
                  <ul className="space-y-2">
                    <li>
                      <Button variant="ghost" className="w-full justify-start" onClick={() => {
                        navigate("/marketplace");
                        setIsMenuOpen(false);
                      }}>
                        <span className="text-base font-semibold">Marketplace</span>
                      </Button>
                    </li>
                    <li>
                      <Button variant="ghost" className="w-full justify-start" onClick={() => {
                        navigate("/vendors");
                        setIsMenuOpen(false);
                      }}>
                        <span className="text-base font-semibold">Vendors</span>
                      </Button>
                    </li>
                    <li>
                      <Button variant="ghost" className="w-full justify-start" onClick={() => {
                        navigate("/analytics");
                        setIsMenuOpen(false);
                      }}>
                        <span className="text-base font-semibold">Analytics</span>
                      </Button>
                    </li>
                  </ul>
                </nav>
              </div>
              
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
                <Button variant="ghost" className="flex-1" aria-label="Shopping Cart">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart
                </Button>
                <Button variant="ghost" className="flex-1" aria-label="Notifications">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
                <Button variant="ghost" className="flex-1" aria-label="Messages">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Messages
                </Button>
                <Button variant="outline" className="flex-1" aria-label="Sign In">
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