import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingBag,
  Users,
  Repeat,
  Grid,
  List,
  SlidersHorizontal,
  TrendingUp,
  Award,
  Clock,
  MapPin,
  Star,
  ShoppingCart,
  Heart,
  GitCompare,
  Filter,
  Search,
  Package,
  Truck,
  Shield,
  CreditCard,
  Building2,
  UserCheck,
  Globe
} from "lucide-react";
import { BulkPurchasing } from "@/components/BulkPurchasing";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ProductCard } from "@/components/ProductCard";
import AdvancedSearch from "@/components/AdvancedSearch";
import { categories, featuredProducts } from "@/data/marketplace";
import { useAuth } from "@/contexts/AuthContext";

interface UserJourney {
  type: "new" | "experienced" | "enterprise";
  needsAssessment: boolean;
  preferredView: "guided" | "expert" | "bulk";
}

export default function Marketplace() {
  const { user, isAuthenticated } = useAuth();
  const [activeView, setActiveView] = useState<"regular" | "bulk" | "subscription">("regular");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [userJourney, setUserJourney] = useState<UserJourney>({
    type: "new",
    needsAssessment: !isAuthenticated,
    preferredView: "guided"
  });
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [compareList, setCompareList] = useState<string[]>([]);
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [searchFilters, setSearchFilters] = useState({
    category: "",
    location: "",
    priceRange: "",
    dateRange: "",
    supplier: "",
    rating: ""
  });

  const handleSearch = (filters: any) => {
    setSearchFilters(filters);
    // Implement search logic
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleCompare = (productId: string) => {
    if (compareList.length >= 4 && !compareList.includes(productId)) {
      // Max 4 items for comparison
      return;
    }
    setCompareList(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (productId: string) => {
    setCartItems(prev => 
      prev.includes(productId) ? prev : [...prev, productId]
    );
  };

  // Smart recommendations based on user type
  const getRecommendations = () => {
    if (user?.type === "clinic") return "New Practice Setup";
    if (user?.type === "supplier") return "Bulk Equipment";
    if (user?.type === "vendor") return "Specialist Tools";
    return "Popular Items";
  };

  const filteredProducts = featuredProducts.filter(product => {
    if (selectedCategory === "all") return true;
    return product.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        {/* Enhanced Header Section with User Journey */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">
                  Smart Procurement Hub
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                {isAuthenticated 
                  ? `Welcome back, ${user?.name}! Continue your procurement journey.`
                  : "Discover verified suppliers and premium dental equipment for your practice"
                }
              </p>
              {isAuthenticated && (
                <div className="flex items-center gap-4 mt-3">
                  <Badge variant="outline" className="text-[#0066CC]">
                    <Building2 className="w-3 h-3 mr-1" />
                    {user?.type === "clinic" ? "Clinic" : user?.type === "supplier" ? "Supplier" : "Professional"}
                  </Badge>
                  <Badge variant="outline" className="text-[#00A86B]">
                    <Award className="w-3 h-3 mr-1" />
                    Verified Member
                  </Badge>
                </div>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="hidden md:flex flex-col items-end gap-4">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0066CC]">500+</div>
                  <div className="text-sm text-gray-600">Suppliers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00A86B]">98%</div>
                  <div className="text-sm text-gray-600">Quality Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0066CC]">35%</div>
                  <div className="text-sm text-gray-600">Avg Savings</div>
                </div>
              </div>
              
              {/* Quick Action Buttons */}
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => {}}>
                  <Heart className="w-4 h-4 mr-2" />
                  Wishlist ({wishlist.length})
                </Button>
                <Button variant="outline" size="sm" onClick={() => {}}>
                  <GitCompare className="w-4 h-4 mr-2" />
                  Compare ({compareList.length})
                </Button>
                <Button size="sm" className="bg-[#0066CC] hover:bg-[#0066CC]/90">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Cart ({cartItems.length})
                </Button>
              </div>
            </div>
          </div>
          
          {/* User Journey Guide */}
          {userJourney.needsAssessment && (
            <Card className="mb-6 border-[#00A86B] bg-gradient-to-r from-[#00A86B]/5 to-[#0066CC]/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#0066CC] mb-2">
                      🎯 New to Mimios? Let us help you get started!
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Take our quick assessment to get personalized product recommendations.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setUserJourney({...userJourney, needsAssessment: false})}>
                      Skip for now
                    </Button>
                    <Button className="bg-[#00A86B] hover:bg-[#00A86B]/90">
                      Start Assessment
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Enhanced Search & Filter Section */}
        <div className="mb-8">
          <Card className="shadow-sm border-0">
            <CardContent className="p-6">
              <div className="mb-4">
                <AdvancedSearch onSearch={handleSearch} />
              </div>
              
              {/* Quick Filter Categories */}
              <div className="flex flex-wrap gap-2 mb-4">
                <Button
                  variant={selectedCategory === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory("all")}
                  className={selectedCategory === "all" ? "bg-[#0066CC]" : ""}
                >
                  All Products
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={selectedCategory === category.id ? "bg-[#0066CC]" : ""}
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.title}
                    <Badge variant="secondary" className="ml-2">
                      {category.productCount}
                    </Badge>
                  </Button>
                ))}
              </div>
              
              {/* Active Filters Display */}
              {(searchFilters.category || searchFilters.priceRange || searchFilters.supplier) && (
                <div className="flex flex-wrap gap-2 mb-4 p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium">Active Filters:</span>
                  {searchFilters.category && (
                    <Badge variant="outline" className="text-[#0066CC]">
                      Category: {searchFilters.category}
                      <button className="ml-1 text-red-500">×</button>
                    </Badge>
                  )}
                  {searchFilters.priceRange && (
                    <Badge variant="outline" className="text-[#0066CC]">
                      Price: {searchFilters.priceRange}
                      <button className="ml-1 text-red-500">×</button>
                    </Badge>
                  )}
                  {searchFilters.supplier && (
                    <Badge variant="outline" className="text-[#0066CC]">
                      Supplier: {searchFilters.supplier}
                      <button className="ml-1 text-red-500">×</button>
                    </Badge>
                  )}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-red-500 h-6"
                    onClick={() => setSearchFilters({category: "", location: "", priceRange: "", dateRange: "", supplier: "", rating: ""})}
                  >
                    Clear All
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Enhanced Filters Sidebar */}
          <FilterSidebar 
            isOpen={isFilterOpen} 
            onClose={() => setIsFilterOpen(false)}
          />

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Navigation Tabs */}
            <Card className="shadow-sm border-0 mb-6">
              <CardContent className="p-6">
                <Tabs value={activeView} onValueChange={(value: any) => setActiveView(value)}>
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="regular" className="flex items-center gap-2">
                      <ShoppingBag className="h-4 w-4" />
                      Regular Shopping
                    </TabsTrigger>
                    <TabsTrigger value="bulk" className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Bulk Purchasing
                    </TabsTrigger>
                    <TabsTrigger value="subscription" className="flex items-center gap-2">
                      <Repeat className="h-4 w-4" />
                      Subscriptions
                    </TabsTrigger>
                  </TabsList>

                  {/* View Controls */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-600">
                        {filteredProducts.length} products found
                      </span>
                      <Badge variant="outline" className="text-[#00A86B]">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {getRecommendations()}
                      </Badge>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setViewMode("grid")}
                        className={viewMode === "grid" ? "bg-[#0066CC] text-white" : ""}
                      >
                        <Grid className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setViewMode("list")}
                        className={viewMode === "list" ? "bg-[#0066CC] text-white" : ""}
                      >
                        <List className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setIsFilterOpen(true)}
                      >
                        <SlidersHorizontal className="mr-2 h-4 w-4" />
                        Advanced Filters
                      </Button>
                    </div>
                  </div>

                  {/* Tab Contents */}
                  <TabsContent value="regular" className="space-y-6">
                    {/* Featured Suppliers Section */}
                    <Card className="bg-gradient-to-r from-[#0066CC]/5 to-[#00A86B]/5">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-[#00A86B]" />
                          Featured Verified Suppliers
                        </CardTitle>
                        <CardDescription>
                          Top-rated suppliers with excellent track records
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {["DentalTech Solutions", "MedEquip Pro", "Global Dental Supply"].map((supplier, index) => (
                            <Card key={supplier} className="hover:shadow-md transition-shadow">
                              <CardContent className="p-4">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="w-10 h-10 bg-[#0066CC] text-white rounded-full flex items-center justify-center font-bold">
                                    {supplier.charAt(0)}
                                  </div>
                                  <div>
                                    <h4 className="font-semibold">{supplier}</h4>
                                    <div className="flex items-center gap-1">
                                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                      <span className="text-sm text-gray-600">4.{8+index}/5</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600 mb-3">
                                  <span>📦 {(index + 1) * 100}+ Products</span>
                                  <span>🚚 Global Shipping</span>
                                </div>
                                <Button size="sm" className="w-full bg-[#0066CC] hover:bg-[#0066CC]/90">
                                  View Products
                                </Button>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Products Grid/List */}
                    <div className={`grid gap-6 ${
                      viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
                    }`}>
                      {filteredProducts.map((product) => (
                        <ProductCard 
                          key={product.id}
                          product={product}
                          viewMode={viewMode}
                          onWishlist={() => toggleWishlist(product.id)}
                          onCompare={() => toggleCompare(product.id)}
                          onAddToCart={() => addToCart(product.id)}
                          isInWishlist={wishlist.includes(product.id)}
                          isInCompare={compareList.includes(product.id)}
                          isInCart={cartItems.includes(product.id)}
                        />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="bulk">
                    <BulkPurchasing />
                  </TabsContent>

                  <TabsContent value="subscription">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Repeat className="h-5 w-5 text-[#00A86B]" />
                          Subscription Management
                        </CardTitle>
                        <CardDescription>
                          Set up automated recurring orders for your regular supplies
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {/* Subscription Features */}
                          <Card className="border-[#00A86B]/20">
                            <CardContent className="p-6 text-center">
                              <Package className="h-12 w-12 text-[#00A86B] mx-auto mb-4" />
                              <h3 className="font-semibold mb-2">Auto-Delivery</h3>
                              <p className="text-sm text-gray-600 mb-4">
                                Never run out of essential supplies with automated deliveries
                              </p>
                              <Badge className="bg-[#00A86B]/10 text-[#00A86B]">
                                Save up to 25%
                              </Badge>
                            </CardContent>
                          </Card>
                          
                          <Card className="border-[#0066CC]/20">
                            <CardContent className="p-6 text-center">
                              <Clock className="h-12 w-12 text-[#0066CC] mx-auto mb-4" />
                              <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                              <p className="text-sm text-gray-600 mb-4">
                                Customize delivery frequency and quantities
                              </p>
                              <Badge className="bg-[#0066CC]/10 text-[#0066CC]">
                                Full Control
                              </Badge>
                            </CardContent>
                          </Card>
                          
                          <Card className="border-purple-500/20">
                            <CardContent className="p-6 text-center">
                              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                              <h3 className="font-semibold mb-2">Priority Support</h3>
                              <p className="text-sm text-gray-600 mb-4">
                                Dedicated account manager and priority customer service
                              </p>
                              <Badge className="bg-purple-100 text-purple-600">
                                VIP Treatment
                              </Badge>
                            </CardContent>
                          </Card>
                        </div>
                        
                        <div className="mt-8 text-center">
                          <Button className="bg-[#00A86B] hover:bg-[#00A86B]/90 px-8">
                            Set Up Your First Subscription
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trust & Security Footer */}
        <Card className="mt-8 bg-gradient-to-r from-gray-50 to-gray-100">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Shield className="h-8 w-8 text-[#00A86B] mb-2" />
                <h4 className="font-semibold">Verified Suppliers</h4>
                <p className="text-sm text-gray-600">All suppliers undergo rigorous verification</p>
              </div>
              <div className="flex flex-col items-center">
                <CreditCard className="h-8 w-8 text-[#0066CC] mb-2" />
                <h4 className="font-semibold">Secure Payments</h4>
                <p className="text-sm text-gray-600">Bank-level security for all transactions</p>
              </div>
              <div className="flex flex-col items-center">
                <Truck className="h-8 w-8 text-[#00A86B] mb-2" />
                <h4 className="font-semibold">Global Delivery</h4>
                <p className="text-sm text-gray-600">Worldwide shipping with tracking</p>
              </div>
              <div className="flex flex-col items-center">
                <UserCheck className="h-8 w-8 text-[#0066CC] mb-2" />
                <h4 className="font-semibold">Expert Support</h4>
                <p className="text-sm text-gray-600">Dental professionals available 24/7</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
