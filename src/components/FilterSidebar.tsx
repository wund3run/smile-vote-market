import { useState } from "react";
import { ChevronDown, ChevronUp, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FilterSidebar({ isOpen, onClose }: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    brand: true,
    features: false,
    location: false,
    certification: false
  });

  const categories = [
    "Dental Equipment",
    "Consumables",
    "Oral Care Products", 
    "Laboratory Services",
    "Digital Solutions",
    "Instruments",
    "Dental Tourism"
  ];

  const brands = [
    "Dentsply Sirona",
    "3M",
    "Ivoclar Vivadent",
    "KaVo Kerr",
    "Planmeca",
    "Others"
  ];

  const features = [
    "FDA Approved",
    "CE Marked",
    "Digital Compatible",
    "Biocompatible",
    "Sterilizable",
    "Eco-Friendly"
  ];

  const locations = [
    "United States",
    "Mexico",
    "Costa Rica",
    "Turkey",
    "Thailand",
    "Hungary",
    "Poland",
    "India"
  ];

  const certifications = [
    "ISO 13485",
    "FDA Approved",
    "CE Marking",
    "Health Canada",
    "TUV Certified",
    "JIS Standard"
  ];

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories(prev => 
      checked 
        ? [...prev, category]
        : prev.filter(c => c !== category)
    );
  };

  const handleBrandChange = (brand: string, checked: boolean) => {
    setSelectedBrands(prev => 
      checked 
        ? [...prev, brand]
        : prev.filter(b => b !== brand)
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange([0, 1000]);
  };

  const activeFiltersCount = selectedCategories.length + selectedBrands.length + (priceRange[0] > 0 || priceRange[1] < 1000 ? 1 : 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 lg:relative lg:inset-auto">
      {/* Mobile Overlay */}
      <div className="lg:hidden fixed inset-0 bg-black/50" onClick={onClose} />
      
      {/* Sidebar */}
      <div className="fixed lg:relative right-0 lg:right-auto top-0 h-full w-80 bg-background border-l lg:border-l-0 lg:border-r overflow-y-auto animate-slide-in-right lg:animate-none">
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Filters</h2>
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="text-xs">
                  {activeFiltersCount}
                </Badge>
              )}
            </div>
            <div className="flex space-x-2">
              {activeFiltersCount > 0 && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear All
                </Button>
              )}
              <Button variant="ghost" size="icon" onClick={onClose} className="lg:hidden">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Categories */}
          <Card className="mb-4">
            <CardHeader 
              className="pb-3 cursor-pointer"
              onClick={() => toggleSection('category')}
            >
              <CardTitle className="text-sm flex items-center justify-between">
                Categories
                {expandedSections.category ? 
                  <ChevronUp className="h-4 w-4" /> : 
                  <ChevronDown className="h-4 w-4" />
                }
              </CardTitle>
            </CardHeader>
            {expandedSections.category && (
              <CardContent className="pt-0 space-y-3">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={(checked) => 
                        handleCategoryChange(category, checked as boolean)
                      }
                    />
                    <label 
                      htmlFor={category}
                      className="text-sm cursor-pointer flex-1"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </CardContent>
            )}
          </Card>

          {/* Price Range */}
          <Card className="mb-4">
            <CardHeader 
              className="pb-3 cursor-pointer"
              onClick={() => toggleSection('price')}
            >
              <CardTitle className="text-sm flex items-center justify-between">
                Price Range
                {expandedSections.price ? 
                  <ChevronUp className="h-4 w-4" /> : 
                  <ChevronDown className="h-4 w-4" />
                }
              </CardTitle>
            </CardHeader>
            {expandedSections.price && (
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={1000}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}+</span>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Brands */}
          <Card className="mb-4">
            <CardHeader 
              className="pb-3 cursor-pointer"
              onClick={() => toggleSection('brand')}
            >
              <CardTitle className="text-sm flex items-center justify-between">
                Brands
                {expandedSections.brand ? 
                  <ChevronUp className="h-4 w-4" /> : 
                  <ChevronDown className="h-4 w-4" />
                }
              </CardTitle>
            </CardHeader>
            {expandedSections.brand && (
              <CardContent className="pt-0 space-y-3">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox
                      id={brand}
                      checked={selectedBrands.includes(brand)}
                      onCheckedChange={(checked) => 
                        handleBrandChange(brand, checked as boolean)
                      }
                    />
                    <label 
                      htmlFor={brand}
                      className="text-sm cursor-pointer flex-1"
                    >
                      {brand}
                    </label>
                  </div>
                ))}
              </CardContent>
            )}
          </Card>

          {/* Features */}
          <Card className="mb-4">
            <CardHeader 
              className="pb-3 cursor-pointer"
              onClick={() => toggleSection('features')}
            >
              <CardTitle className="text-sm flex items-center justify-between">
                Features
                {expandedSections.features ? 
                  <ChevronUp className="h-4 w-4" /> : 
                  <ChevronDown className="h-4 w-4" />
                }
              </CardTitle>
            </CardHeader>
            {expandedSections.features && (
              <CardContent className="pt-0 space-y-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Checkbox id={feature} />
                    <label 
                      htmlFor={feature}
                      className="text-sm cursor-pointer flex-1"
                    >
                      {feature}
                    </label>
                  </div>
                ))}
              </CardContent>
            )}
          </Card>

          {/* Location (for Tourism) */}
          <Card className="mb-4">
            <CardHeader 
              className="pb-3 cursor-pointer"
              onClick={() => toggleSection('location')}
            >
              <CardTitle className="text-sm flex items-center justify-between">
                Treatment Locations
                {expandedSections.location ? 
                  <ChevronUp className="h-4 w-4" /> : 
                  <ChevronDown className="h-4 w-4" />
                }
              </CardTitle>
            </CardHeader>
            {expandedSections.location && (
              <CardContent className="pt-0 space-y-3">
                {locations.map((location) => (
                  <div key={location} className="flex items-center space-x-2">
                    <Checkbox id={location} />
                    <label 
                      htmlFor={location}
                      className="text-sm cursor-pointer flex-1"
                    >
                      {location}
                    </label>
                  </div>
                ))}
              </CardContent>
            )}
          </Card>

          {/* Certifications */}
          <Card>
            <CardHeader 
              className="pb-3 cursor-pointer"
              onClick={() => toggleSection('certification')}
            >
              <CardTitle className="text-sm flex items-center justify-between">
                Certifications
                {expandedSections.certification ? 
                  <ChevronUp className="h-4 w-4" /> : 
                  <ChevronDown className="h-4 w-4" />
                }
              </CardTitle>
            </CardHeader>
            {expandedSections.certification && (
              <CardContent className="pt-0 space-y-3">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center space-x-2">
                    <Checkbox id={cert} />
                    <label 
                      htmlFor={cert}
                      className="text-sm cursor-pointer flex-1"
                    >
                      {cert}
                    </label>
                  </div>
                ))}
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}