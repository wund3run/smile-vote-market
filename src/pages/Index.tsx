import { useState } from "react";
import { Filter, Plus, TrendingUp, Star, ArrowRight, Plane, Grid3X3, List, SortAsc } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { FilterSidebar } from "@/components/FilterSidebar";
import { RequestForm } from "@/components/RequestForm";
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
import { ContentVerificationLabel, ContentDisclaimer } from "@/components/ContentVerificationLabel";

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
      <section className="relative bg-gradient-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              The Complete Dental Marketplace
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-slide-up">
              Connect with suppliers, discover innovative products, and find exactly what your practice needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => setIsRequestFormOpen(true)}
                className="text-lg px-8 py-3"
              >
                <Plus className="h-5 w-5 mr-2" />
                Request Product
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Browse Categories
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <ContentDisclaimer status="unverified" className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">1,234</div>
              <div className="text-muted-foreground">Products</div>
            </ContentDisclaimer>
            <ContentDisclaimer status="unverified" className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">456</div>
              <div className="text-muted-foreground">Suppliers</div>
            </ContentDisclaimer>
            <ContentDisclaimer status="unverified" className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">2,890</div>
              <div className="text-muted-foreground">Active Users</div>
            </ContentDisclaimer>
            <ContentDisclaimer status="unverified" className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">5,670</div>
              <div className="text-muted-foreground">Requests Fulfilled</div>
            </ContentDisclaimer>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find exactly what you need across our comprehensive range of dental products and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Featured Products
              </h2>
              <p className="text-muted-foreground">
                Hand-picked products recommended by professionals
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              {/* View Mode Toggle */}
              <div className="flex bg-muted rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              {/* Sort Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
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
              >
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
          
          <div className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' 
              : 'space-y-4'
          }`}>
            {featuredProducts.map((product, index) => (
              <div key={product.id} style={{ animationDelay: `${index * 0.15}s` }} className="animate-fade-in">
                <ProductCard {...product} viewMode={viewMode} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <TrendingUp className="h-8 w-8 text-accent" />
              <div>
                <h2 className="text-3xl font-bold text-foreground">
                  Trending Now
                </h2>
                <p className="text-muted-foreground">
                  Most voted products by the community
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="text-sm">
              <Star className="h-3 w-3 mr-1" />
              Top Voted
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingProducts.map((product, index) => (
              <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }} className="animate-scale-in">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dental Tourism Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Plane className="h-8 w-8 text-primary" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Dental Tourism Packages
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              [Unverified] Combine world-class dental care with amazing travel experiences. Save up to 70% while enjoying luxury accommodations and professional treatments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {tourismPackages.map((pkg, index) => (
              <div key={pkg.id} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fade-in">
                <TourismPackageCard {...pkg} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              View All Tourism Packages
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Can't Find What You Need?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Submit a request and let our community of suppliers find the perfect solution for you.
            The more votes your request gets, the higher priority it receives!
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => setIsRequestFormOpen(true)}
            className="text-lg px-8 py-3"
          >
            <Plus className="h-5 w-5 mr-2" />
            Submit Request
          </Button>
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

      {/* Content Verification Disclaimer */}
      <footer className="bg-muted/50 border-t py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <ContentVerificationLabel status="unverified" showTooltip={false} />
              <h3 className="text-lg font-semibold">Content Verification Notice</h3>
            </div>
            <div className="max-w-4xl mx-auto text-sm text-muted-foreground space-y-2">
              <p>
                <strong>Important:</strong> The information displayed on this marketplace, including but not limited to product ratings, 
                supplier information, pricing, savings claims, and tourism package details, has not been independently verified 
                and should not be considered as established fact.
              </p>
              <p>
                Product descriptions, treatment claims, savings percentages, and user reviews may be unverified, inferred, 
                or speculative. Please conduct your own research and verification before making any purchasing decisions 
                or commitments to dental treatments or tourism packages.
              </p>
              <p>
                [Unverified] Claims about product effectiveness, cost savings, treatment outcomes, or provider qualifications 
                should be independently verified through appropriate professional channels before use.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
