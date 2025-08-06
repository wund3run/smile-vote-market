// Lazy-loaded marketplace data to reduce initial bundle size
import { Category, Product, Package } from './marketplace-types';

// Lazy load function for categories
export const loadCategories = (): Promise<Category[]> => {
  return import('./marketplace-data').then(module => module.categories);
};

// Lazy load function for featured products
export const loadFeaturedProducts = (): Promise<Product[]> => {
  return import('./marketplace-data').then(module => module.featuredProducts);
};

// Lazy load function for trending products  
export const loadTrendingProducts = (): Promise<Product[]> => {
  return import('./marketplace-data').then(module => module.trendingProducts);
};

// Lazy load function for dental tourism packages
export const loadDentalTourismPackages = (): Promise<Package[]> => {
  return import('./marketplace-data').then(module => module.dentalTourismPackages);
};