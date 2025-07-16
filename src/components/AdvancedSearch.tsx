import { useState } from "react";
import { Search, Mic, Camera, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AdvancedSearchProps {
  onSearch: (query: string, filters: SearchFilters) => void;
}

interface SearchFilters {
  category: string;
  location: string;
  priceRange: string;
  dateRange: string;
  groupSize?: number;
}

export function AdvancedSearch({ onSearch }: AdvancedSearchProps) {
  const [query, setQuery] = useState("");
  const [isAdvanced, setIsAdvanced] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    category: "",
    location: "",
    priceRange: "",
    dateRange: ""
  });

  const popularSearches = [
    "Dental implants",
    "Orthodontic brackets", 
    "Digital X-ray",
    "Tourism package Mexico",
    "Teeth whitening Costa Rica",
    "Dental chairs",
    "Composite materials"
  ];

  const handleSearch = () => {
    onSearch(query, filters);
  };

  const handleQuickSearch = (searchTerm: string) => {
    setQuery(searchTerm);
    onSearch(searchTerm, filters);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-medium">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between">
          <span>Advanced Search</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsAdvanced(!isAdvanced)}
          >
            {isAdvanced ? 'Simple' : 'Advanced'}
          </Button>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Main Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="text"
            placeholder="Search products, services, tourism packages..."
            className="pl-12 pr-20 h-14 text-lg"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Mic className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Camera className="h-4 w-4" />
            </Button>
            <Button onClick={handleSearch} className="h-8">
              Search
            </Button>
          </div>
        </div>

        {/* Advanced Filters */}
        {isAdvanced && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-muted/20 rounded-lg">
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <Select value={filters.category} onValueChange={(value) => setFilters({...filters, category: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="equipment">Equipment</SelectItem>
                  <SelectItem value="consumables">Consumables</SelectItem>
                  <SelectItem value="oral-care">Oral Care</SelectItem>
                  <SelectItem value="tourism">Tourism</SelectItem>
                  <SelectItem value="digital">Digital Solutions</SelectItem>
                  <SelectItem value="lab">Laboratory</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Location
              </label>
              <Select value={filters.location} onValueChange={(value) => setFilters({...filters, location: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Any Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usa">United States</SelectItem>
                  <SelectItem value="mexico">Mexico</SelectItem>
                  <SelectItem value="costa-rica">Costa Rica</SelectItem>
                  <SelectItem value="turkey">Turkey</SelectItem>
                  <SelectItem value="thailand">Thailand</SelectItem>
                  <SelectItem value="hungary">Hungary</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Price Range</label>
              <Select value={filters.priceRange} onValueChange={(value) => setFilters({...filters, priceRange: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Any Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-100">$0 - $100</SelectItem>
                  <SelectItem value="100-500">$100 - $500</SelectItem>
                  <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                  <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                  <SelectItem value="5000+">$5,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Treatment Date
              </label>
              <Select value={filters.dateRange} onValueChange={(value) => setFilters({...filters, dateRange: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Anytime" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">ASAP</SelectItem>
                  <SelectItem value="1-month">Within 1 Month</SelectItem>
                  <SelectItem value="3-months">Within 3 Months</SelectItem>
                  <SelectItem value="6-months">Within 6 Months</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Popular Searches */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Popular Searches:</h4>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map((search, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => handleQuickSearch(search)}
              >
                {search}
              </Badge>
            ))}
          </div>
        </div>

        {/* Search Suggestions */}
        {query && (
          <div className="bg-background border rounded-lg p-3 shadow-sm">
            <h4 className="text-sm font-medium mb-2">Suggestions:</h4>
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground hover:text-foreground cursor-pointer p-1">
                {query} in Equipment
              </div>
              <div className="text-sm text-muted-foreground hover:text-foreground cursor-pointer p-1">
                {query} Tourism Packages
              </div>
              <div className="text-sm text-muted-foreground hover:text-foreground cursor-pointer p-1">
                Suppliers for {query}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}