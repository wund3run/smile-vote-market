import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar, MapPin, Search, Mic, Camera } from 'lucide-react';

interface AdvancedSearchProps {
  onSearch: (filters: any) => void;
}

const AdvancedSearch: React.FC<AdvancedSearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isAdvanced, setIsAdvanced] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    priceRange: '',
    dateRange: '',
  });

  const popularSearches = [
    'Dental Implants',
    'Teeth Whitening',
    'Orthodontics',
    'Root Canal',
    'Cosmetic Dentistry',
    'Oral Surgery',
    'Preventive Care',
    'Emergency Dental',
  ];

  const handleSearch = () => {
    onSearch({ query, ...filters });
  };

  const handleQuickSearch = (searchTerm: string) => {
    setQuery(searchTerm);
    onSearch({ query: searchTerm, ...filters });
  };

  return (
    <div className="rounded-lg p-6">
      {/* Search Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Find Your Perfect Dental Solution</h2>
        <p className="text-gray-600">Search through thousands of products and services</p>
      </div>

      {/* Main Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for products, procedures, or services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-24 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <Button variant="ghost" size="sm" className="mr-1 text-gray-400 hover:text-primary">
              <Mic className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-primary">
              <Camera className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="flex gap-3 mt-4">
          <Button 
            onClick={handleSearch} 
            size="lg"
            className="h-14 px-8 bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all"
          >
            Search
          </Button>
          <Button
            variant="outline"
            onClick={() => setIsAdvanced(!isAdvanced)}
            className="h-14 px-6"
          >
            Advanced
          </Button>
        </div>
      </div>

      {/* Advanced Filters */}
      {isAdvanced && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Advanced Filters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                  <SelectItem value="software">Practice Management Software</SelectItem>
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
        </div>
      )}

      {/* Popular Searches */}
      <div className="mb-4">
        <p className="text-sm font-medium text-muted-foreground mb-3">Popular Searches:</p>
        <div className="flex flex-wrap gap-2">
          {popularSearches.map((search) => (
            <Badge 
              key={search} 
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
        <div className="bg-gray-50 rounded-lg p-3 shadow-sm">
          <h4 className="text-sm font-medium mb-2">Suggestions:</h4>
          <div className="space-y-1">
            <div className="text-sm text-muted-foreground hover:text-foreground cursor-pointer p-1">
              {query} in Equipment
            </div>
            <div className="text-sm text-muted-foreground hover:text-foreground cursor-pointer p-1">
              {query} in Consumables
            </div>
            <div className="text-sm text-muted-foreground hover:text-foreground cursor-pointer p-1">
              {query} in Oral Care
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedSearch;