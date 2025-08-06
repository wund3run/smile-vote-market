// Re-export types and lazy loading functions
export type { Category, Product, Package } from './marketplace-types';
export { 
  loadCategories, 
  loadFeaturedProducts, 
  loadTrendingProducts, 
  loadDentalTourismPackages 
} from './marketplace-lazy';

// For backward compatibility, also export the data directly
// but this will be tree-shaken if not used
export { categories, featuredProducts, trendingProducts, dentalTourismPackages } from './marketplace-data';