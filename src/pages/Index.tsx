import { useState } from "react";
import { Filter, Plus, TrendingUp, Star, ArrowRight, Plane, Grid3X3, List, SortAsc } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { FilterSidebar } from "@/components/FilterSidebar";
import { RequestForm } from "@/components/RequestForm";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { categories, featuredProducts, trendingProducts, tourismPackages } from "@/data/marketplace";
import { TourismPackageCard } from "@/components/TourismPackageCard";

const Index = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isRequestFormOpen, setIsRequestFormOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popular' | 'recent' | 'price' | 'rating'>('popular');

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // In a real app, this would navigate to a category page or filter products
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar onFilterToggle={() => setIsFilterOpen(!isFilterOpen)} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 animate-fade-in">
              The Complete Dental Marketplace
            </h1>
            <p className="text-xl lg:text-2xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Connect with suppliers, discover innovative products, and find exactly what your practice needs
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => setIsRequestFormOpen(true)}
                className="text-lg px-10 py-4 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105"
              >
                <Plus className="h-5 w-5 mr-2" />
                Request Product
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="text-lg px-10 py-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Browse Categories
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-3 group-hover:scale-105 transition-transform duration-200">1,234</div>
              <div className="text-muted-foreground font-medium">Products</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-3 group-hover:scale-105 transition-transform duration-200">456</div>
              <div className="text-muted-foreground font-medium">Suppliers</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-3 group-hover:scale-105 transition-transform duration-200">2,890</div>
              <div className="text-muted-foreground font-medium">Active Users</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-3 group-hover:scale-105 transition-transform duration-200">5,670</div>
              <div className="text-muted-foreground font-medium">Requests Fulfilled</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Browse by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Find exactly what you need across our comprehensive range of dental products and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={category.id} style={{ animationDelay: `${index * 0.1}s` }} className="animate-slide-up">
                <CategoryCard
                  icon={category.icon}
                  title={category.title}
                  description={category.description}
                  productCount={category.productCount}
                  onClick={() => handleCategoryClick(category.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
                Featured Products
              </h2>
              <p className="text-lg text-muted-foreground">
                Hand-picked products recommended by professionals
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              {/* View Mode Toggle */}
              <div className="flex bg-muted/70 rounded-xl p-1.5 border">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="transition-all duration-200"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="transition-all duration-200"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              {/* Sort Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2 hover:shadow-soft transition-all duration-200">
                    <SortAsc className="h-4 w-4" />
                    Sort: {sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setSortBy('popular')}>
                    Most Popular
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy('recent')}>
                    Most Recent
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy('price')}>
                    Price: Low to High
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy('rating')}>
                    Highest Rated
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button 
                variant="outline"
                onClick={() => setIsFilterOpen(true)}
                className="hover:shadow-soft transition-all duration-200"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
          
          <div className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8' 
              : 'space-y-6'
          }`}>
            {featuredProducts.map((product, index) => (
              <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fade-in">
                <ProductCard {...product} viewMode={viewMode} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-4">
              <TrendingUp className="h-10 w-10 text-accent" />
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Trending Now
                </h2>
                <p className="text-lg text-muted-foreground">
                  Most voted products by the community
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Star className="h-4 w-4 mr-2" />
              Top Voted
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingProducts.map((product, index) => (
              <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }} className="animate-scale-in">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dental Tourism Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Plane className="h-10 w-10 text-primary" />
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                Dental Tourism Packages
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Combine world-class dental care with amazing travel experiences. Save up to 70% while enjoying luxury accommodations and professional treatments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {tourismPackages.map((pkg, index) => (
              <div key={pkg.id} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fade-in">
                <TourismPackageCard {...pkg} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="text-lg px-10 py-4 hover:shadow-medium transition-all duration-300 hover:scale-105">
              View All Tourism Packages
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-accent text-accent-foreground relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">
            Can't Find What You Need?
          </h2>
          <p className="text-xl mb-12 opacity-95 max-w-2xl mx-auto leading-relaxed">
            Submit a request and let our community of suppliers find the perfect solution for you.
            The more votes your request gets, the higher priority it receives!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => setIsRequestFormOpen(true)}
              className="text-lg px-10 py-4 bg-white text-accent hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Plus className="h-5 w-5 mr-2" />
              Submit Request
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-10 py-4 border-white/30 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Browse All Products
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Sidebar */}
      <FilterSidebar 
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />

      {/* Request Form Modal */}
      <RequestForm 
        isOpen={isRequestFormOpen}
        onClose={() => setIsRequestFormOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
