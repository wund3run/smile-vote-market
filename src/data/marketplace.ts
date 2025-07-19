import { 
  Stethoscope, 
  Wrench, 
  Pill, 
  Smile, 
  Monitor, 
  Scissors,
  Plane,
  type LucideIcon
} from "lucide-react";

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
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
  verified?: {
    rating: boolean;
    price: boolean;
    supplier: boolean;
    claims: boolean;
  };
}

export interface TourismPackage {
  id: string;
  title: string;
  description: string;
  destination: string;
  price: string;
  originalPrice?: string;
  duration: string;
  votes: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  features: string[];
  treatments: string[];
  accommodation: string;
  featured?: boolean;
  trending?: boolean;
  savings?: string;
  verified?: {
    pricing: boolean;
    savings: boolean;
    features: boolean;
    treatments: boolean;
    rating: boolean;
  };
}

export const categories: Category[] = [
  {
    id: "equipment",
    title: "Dental Equipment",
    description: "Professional dental chairs, units, and major equipment",
    icon: Stethoscope,
    productCount: 234,
    imageUrl: "/src/assets/dental-equipment-hero.jpg"
  },
  {
    id: "instruments",
    title: "Instruments",
    description: "Precision dental instruments and hand tools",
    icon: Scissors,
    productCount: 456,
    imageUrl: "/src/assets/dental-instruments.jpg"
  },
  {
    id: "consumables",
    title: "Consumables",
    description: "Dental materials, adhesives, and disposables",
    icon: Pill,
    productCount: 789,
  },
  {
    id: "oral-care",
    title: "Oral Care",
    description: "Professional and consumer oral hygiene products",
    icon: Smile,
    productCount: 123,
    imageUrl: "/src/assets/oral-care-products.jpg"
  },
  {
    id: "digital",
    title: "Digital Dentistry",
    description: "CAD/CAM, 3D printing, and digital imaging solutions",
    icon: Monitor,
    productCount: 89,
    imageUrl: "/src/assets/digital-dental.jpg"
  },
  {
    id: "laboratory",
    title: "Laboratory",
    description: "Dental lab equipment and prosthetic materials",
    icon: Wrench,
    productCount: 67,
    imageUrl: "/src/assets/dental-lab.jpg"
  },
  {
    id: "tourism",
    title: "Dental Tourism",
    description: "Complete dental treatment packages with travel",
    icon: Plane,
    productCount: 45,
    imageUrl: "/src/assets/dental-tourism-hero.jpg"
  }
];

export const featuredProducts: Product[] = [
  {
    id: "1",
    title: "Premium Dental Chair Pro",
    description: "State-of-the-art dental chair with advanced positioning and comfort features",
    price: "$12,500",
    supplier: "DentalTech Solutions",
    votes: 89,
    imageUrl: "/src/assets/dental-equipment-hero.jpg",
    category: "equipment",
    rating: 4.9,
    reviewCount: 45,
    featured: true,
    verified: {
      rating: false,
      price: false,
      supplier: false,
      claims: false
    }
  },
  {
    id: "2",
    title: "Surgical Instrument Set",
    description: "Professional-grade surgical instruments for complex dental procedures",
    price: "$890",
    supplier: "MedTools Inc",
    votes: 67,
    imageUrl: "/src/assets/dental-instruments.jpg",
    category: "instruments",
    rating: 4.8,
    reviewCount: 32,
    featured: true,
    verified: {
      rating: false,
      price: false,
      supplier: false,
      claims: false
    }
  },
  {
    id: "3",
    title: "Digital Imaging System",
    description: "High-resolution intraoral camera with AI-powered analysis",
    price: "$3,200",
    supplier: "DigitalDent",
    votes: 134,
    imageUrl: "/src/assets/digital-dental.jpg",
    category: "digital",
    rating: 4.7,
    reviewCount: 78,
    featured: true,
    verified: {
      rating: false,
      price: false,
      supplier: false,
      claims: false
    }
  },
  {
    id: "4",
    title: "Professional Whitening Kit",
    description: "Advanced teeth whitening system for professional use",
    price: "$450",
    supplier: "SmileBright",
    votes: 156,
    imageUrl: "/src/assets/oral-care-products.jpg",
    category: "oral-care",
    rating: 4.6,
    reviewCount: 89,
    featured: true,
    verified: {
      rating: false,
      price: false,
      supplier: false,
      claims: false
    }
  }
];

export const trendingProducts: Product[] = [
  {
    id: "5",
    title: "3D Dental Printer",
    description: "High-precision 3D printer for dental models and prosthetics",
    price: "$5,800",
    supplier: "3DentPrint",
    votes: 234,
    imageUrl: "/src/assets/dental-lab.jpg",
    category: "laboratory",
    rating: 4.9,
    reviewCount: 67,
    trending: true,
    verified: {
      rating: false,
      price: false,
      supplier: false,
      claims: false
    }
  },
  {
    id: "6",
    title: "Smart Dental Mirror",
    description: "AI-powered diagnostic mirror with real-time analysis",
    price: "$1,200",
    supplier: "SmartDental",
    votes: 189,
    imageUrl: "/src/assets/digital-dental.jpg",
    category: "digital",
    rating: 4.8,
    reviewCount: 54,
    trending: true,
    verified: {
      rating: false,
      price: false,
      supplier: false,
      claims: false
    }
  },
  {
    id: "7",
    title: "Ultrasonic Scaler Pro",
    description: "Advanced ultrasonic scaling system with multiple tip options",
    price: "$2,100",
    supplier: "ScaleTech",
    votes: 145,
    imageUrl: "/src/assets/dental-instruments.jpg",
    category: "instruments",
    rating: 4.7,
    reviewCount: 43,
    trending: true,
    verified: {
      rating: false,
      price: false,
      supplier: false,
      claims: false
    }
  }
];

export const tourismPackages: TourismPackage[] = [
  {
    id: "t1",
    title: "Complete Smile Makeover - Thailand",
    description: "Transform your smile with veneers, whitening, and gum contouring in beautiful Phuket",
    destination: "Phuket, Thailand",
    price: "$4,500",
    originalPrice: "$8,000",
    duration: "7 days",
    votes: 289,
    imageUrl: "/src/assets/dental-tourism-hero.jpg",
    rating: 4.9,
    reviewCount: 127,
    features: ["5-star resort accommodation", "Airport transfers", "Local tour guide", "Post-treatment care"],
    treatments: ["Porcelain Veneers", "Teeth Whitening", "Gum Contouring", "Dental Cleaning"],
    accommodation: "Luxury Beach Resort",
    featured: true,
    savings: "Save $3,500",
    verified: {
      pricing: false,
      savings: false,
      features: false,
      treatments: false,
      rating: false
    }
  },
  {
    id: "t2",
    title: "Dental Implants Package - Costa Rica",
    description: "High-quality dental implants with recovery time in tropical paradise",
    destination: "San José, Costa Rica",
    price: "$3,200",
    originalPrice: "$6,500",
    duration: "10 days",
    votes: 234,
    imageUrl: "/src/assets/dental-tourism-hero.jpg",
    rating: 4.8,
    reviewCount: 89,
    features: ["Boutique hotel stay", "All meals included", "Nature excursions", "Follow-up care"],
    treatments: ["Dental Implants", "Bone Grafting", "Crown Placement", "Consultation"],
    accommodation: "Eco-Luxury Hotel",
    trending: true,
    savings: "Save $3,300",
    verified: {
      pricing: false,
      savings: false,
      features: false,
      treatments: false,
      rating: false
    }
  },
  {
    id: "t3",
    title: "Full Mouth Reconstruction - Mexico",
    description: "Complete dental restoration with luxury recovery in Cancun",
    destination: "Cancun, Mexico",
    price: "$6,800",
    originalPrice: "$15,000",
    duration: "14 days",
    votes: 198,
    imageUrl: "/src/assets/dental-tourism-hero.jpg",
    rating: 4.9,
    reviewCount: 156,
    features: ["All-inclusive resort", "Private transportation", "Dedicated care coordinator", "Lifetime warranty"],
    treatments: ["Full Mouth Reconstruction", "Dental Implants", "Crowns & Bridges", "Gum Treatment"],
    accommodation: "5-Star All-Inclusive Resort",
    featured: true,
    savings: "Save $8,200",
    verified: {
      pricing: false,
      savings: false,
      features: false,
      treatments: false,
      rating: false
    }
  },
  {
    id: "t4",
    title: "Orthodontic Treatment - Hungary",
    description: "Premium orthodontic care in the heart of Europe with cultural experiences",
    destination: "Budapest, Hungary",
    price: "$2,800",
    originalPrice: "$5,500",
    duration: "Multiple visits over 18 months",
    votes: 167,
    imageUrl: "/src/assets/dental-tourism-hero.jpg",
    rating: 4.7,
    reviewCount: 73,
    features: ["Historic city hotel", "Cultural tours", "Spa treatments", "Progress monitoring"],
    treatments: ["Invisalign", "Traditional Braces", "Retainers", "Regular Adjustments"],
    accommodation: "Boutique Historic Hotel",
    savings: "Save $2,700",
    verified: {
      pricing: false,
      savings: false,
      features: false,
      treatments: false,
      rating: false
    }
  },
  {
    id: "t5",
    title: "Preventive Care Package - Turkey",
    description: "Comprehensive dental checkup and cleaning with Istanbul city break",
    destination: "Istanbul, Turkey",
    price: "$800",
    originalPrice: "$1,500",
    duration: "4 days",
    votes: 145,
    imageUrl: "/src/assets/dental-tourism-hero.jpg",
    rating: 4.6,
    reviewCount: 91,
    features: ["City center hotel", "Historic site tours", "Turkish bath experience", "Dental kit included"],
    treatments: ["Comprehensive Exam", "Professional Cleaning", "Fluoride Treatment", "X-rays"],
    accommodation: "4-Star City Hotel",
    trending: true,
    savings: "Save $700",
    verified: {
      pricing: false,
      savings: false,
      features: false,
      treatments: false,
      rating: false
    }
  }
];