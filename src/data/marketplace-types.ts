export interface Category {
  id: string;
  title: string;
  description: string;
  icon: any;
  productCount: number;
  imageUrl?: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  supplier: string;
  votes: number;
  imageUrl: string;
  category: string;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  trending?: boolean;
}

export interface Package {
  id: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  duration: string;
  votes: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  destination: string;
  features: string[];
  treatments: string[];
  accommodation: string;
  featured?: boolean;
  trending?: boolean;
  savings?: string;
}