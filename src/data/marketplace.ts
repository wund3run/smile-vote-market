import { 
  Stethoscope, 
  Wrench, 
  Pill, 
  Smile, 
  Monitor, 
  Scissors,
  Heart,
  Shield,
  Zap,
  Award
} from "lucide-react";

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: any;
  productCount: number;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  votes: number;
  isB2B?: boolean;
  supplier?: string;
  minOrder?: string;
  tags: string[];
  rating: number;
  reviews: number;
}

export const categories: Category[] = [
  {
    id: "equipment",
    title: "Dental Equipment",
    description: "Professional dental chairs, units, and machinery",
    icon: Stethoscope,
    productCount: 156
  },
  {
    id: "instruments",
    title: "Instruments",
    description: "High-quality dental tools and instruments",
    icon: Scissors,
    productCount: 289
  },
  {
    id: "consumables",
    title: "Consumables",
    description: "Disposable items and consumable supplies",
    icon: Pill,
    productCount: 432
  },
  {
    id: "oral-care",
    title: "Oral Care Products",
    description: "Consumer oral hygiene and care products",
    icon: Smile,
    productCount: 187
  },
  {
    id: "digital",
    title: "Digital Solutions",
    description: "Software, imaging, and digital tools",
    icon: Monitor,
    productCount: 94
  },
  {
    id: "laboratory",
    title: "Laboratory Services",
    description: "Prosthetics, implants, and lab solutions",
    icon: Wrench,
    productCount: 76
  }
];

export const products: Product[] = [
  {
    id: "1",
    title: "Professional Dental Chair Unit",
    description: "State-of-the-art dental chair with integrated LED lighting, pneumatic controls, and patient comfort features",
    price: "$12,500",
    originalPrice: "$15,000",
    image: "/placeholder.svg",
    category: "equipment",
    votes: 24,
    isB2B: true,
    supplier: "DentalTech Solutions",
    minOrder: "1 unit",
    tags: ["FDA Approved", "LED Lighting", "Pneumatic"],
    rating: 4.8,
    reviews: 12
  },
  {
    id: "2",
    title: "Ultrasonic Scaler Kit",
    description: "Complete ultrasonic scaling system with multiple tips and advanced frequency control",
    price: "$890",
    originalPrice: "$1,200",
    image: "/placeholder.svg",
    category: "instruments",
    votes: 18,
    isB2B: true,
    supplier: "MedInstruments Ltd",
    minOrder: "5 units",
    tags: ["Ultrasonic", "Multi-tip", "Portable"],
    rating: 4.6,
    reviews: 8
  },
  {
    id: "3",
    title: "Premium Toothbrush Set",
    description: "Ergonomic electric toothbrush with smart timer and pressure sensor technology",
    price: "$89",
    originalPrice: "$120",
    image: "/placeholder.svg",
    category: "oral-care",
    votes: 42,
    isB2B: false,
    tags: ["Electric", "Smart Timer", "Pressure Sensor"],
    rating: 4.7,
    reviews: 156
  },
  {
    id: "4",
    title: "Dental Imaging Software",
    description: "Advanced 3D imaging and treatment planning software with AI-assisted diagnostics",
    price: "$2,400/year",
    image: "/placeholder.svg",
    category: "digital",
    votes: 31,
    isB2B: true,
    supplier: "DentalSoft Inc",
    minOrder: "1 license",
    tags: ["3D Imaging", "AI Diagnostics", "Cloud-based"],
    rating: 4.9,
    reviews: 23
  },
  {
    id: "5",
    title: "Disposable Dental Masks",
    description: "High-quality 3-layer protective masks with comfortable ear loops",
    price: "$0.25/piece",
    originalPrice: "$0.35/piece",
    image: "/placeholder.svg",
    category: "consumables",
    votes: 15,
    isB2B: true,
    supplier: "SafeGuard Medical",
    minOrder: "1000 pieces",
    tags: ["3-Layer", "Disposable", "Comfortable"],
    rating: 4.4,
    reviews: 67
  },
  {
    id: "6",
    title: "Ceramic Crown Set",
    description: "Custom ceramic crowns with natural appearance and durability",
    price: "$180/crown",
    image: "/placeholder.svg",
    category: "laboratory",
    votes: 28,
    isB2B: true,
    supplier: "CeramicCraft Lab",
    minOrder: "10 crowns",
    tags: ["Ceramic", "Custom-made", "Natural"],
    rating: 4.8,
    reviews: 34
  },
  {
    id: "7",
    title: "Whitening Treatment Kit",
    description: "Professional-grade teeth whitening kit with LED accelerator",
    price: "$45",
    originalPrice: "$65",
    image: "/placeholder.svg",
    category: "oral-care",
    votes: 67,
    isB2B: false,
    tags: ["LED Accelerator", "Professional-grade", "Safe"],
    rating: 4.5,
    reviews: 203
  },
  {
    id: "8",
    title: "Digital X-Ray Sensor",
    description: "High-resolution digital sensor with instant imaging capabilities",
    price: "$3,200",
    image: "/placeholder.svg",
    category: "digital",
    votes: 19,
    isB2B: true,
    supplier: "RadiMax Systems",
    minOrder: "1 sensor",
    tags: ["High-resolution", "Instant", "Digital"],
    rating: 4.7,
    reviews: 15
  }
];

export const featuredProducts = products.slice(0, 4);
export const trendingProducts = products.sort((a, b) => b.votes - a.votes).slice(0, 6);