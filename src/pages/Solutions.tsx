import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ShoppingCart, 
  TrendingUp, 
  Shield, 
  MessageSquare, 
  Users, 
  Monitor, 
  FileCheck, 
  Globe, 
  Heart, 
  Video,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  Zap,
  BarChart3,
  Building2,
  Stethoscope
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Solution {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  priority: "High" | "Medium" | "Low";
  status: "Available" | "Coming Soon" | "In Development";
  features: string[];
  benefits: string[];
  painPoint: string;
  ctaText: string;
  ctaAction: () => void;
}

export default function Solutions() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const solutions: Solution[] = [
    {
      id: "procurement",
      title: "Smart Procurement & Marketplace",
      description: "Streamline your supply chain with bulk purchasing, transparent pricing, and verified suppliers.",
      icon: <ShoppingCart className="h-8 w-8" />,
      priority: "High",
      status: "Available",
      painPoint: "High Overhead Costs & Fragmented Supply Chain",
      features: [
        "Bulk purchasing with volume discounts",
        "Supplier comparison and verification",
        "Group buying opportunities",
        "Real-time pricing transparency",
        "Automated reordering systems"
      ],
      benefits: [
        "Reduce procurement costs by 20-35%",
        "Save 15+ hours per week on sourcing",
        "Access to 500+ verified suppliers",
        "Price transparency across all vendors"
      ],
      ctaText: "Explore Marketplace",
      ctaAction: () => navigate("/marketplace")
    },
    {
      id: "branding",
      title: "Practice Branding & Marketing",
      description: "Stand out from competitors with professional branding tools and patient review management.",
      icon: <TrendingUp className="h-8 w-8" />,
      priority: "High",
      status: "Available",
      painPoint: "Increasing Competition & Patient Acquisition",
      features: [
        "Customizable practice profiles",
        "Patient review management",
        "Marketing analytics dashboard",
        "Brand consistency tools",
        "Social media integration"
      ],
      benefits: [
        "Increase patient acquisition by 40%",
        "Improve online reputation score",
        "Professional brand presence",
        "Data-driven marketing insights"
      ],
      ctaText: "Build Your Brand",
      ctaAction: () => navigate("/register")
    },
    {
      id: "compliance",
      title: "Compliance & Quality Management",
      description: "Stay compliant with automated tracking, documentation, and regulatory updates.",
      icon: <Shield className="h-8 w-8" />,
      priority: "High",
      status: "Coming Soon",
      painPoint: "Regulatory Compliance & Documentation",
      features: [
        "Automated compliance checklists",
        "Document management system",
        "Real-time regulatory updates",
        "Certification tracking",
        "Audit-ready reporting"
      ],
      benefits: [
        "100% compliance confidence",
        "Reduce audit preparation time by 80%",
        "Automatic regulatory notifications",
        "Secure document storage"
      ],
      ctaText: "Learn More",
      ctaAction: () => navigate("/analytics")
    },
    {
      id: "communication",
      title: "Patient Communication Hub",
      description: "Reduce no-shows and improve patient engagement with automated communication tools.",
      icon: <MessageSquare className="h-8 w-8" />,
      priority: "High",
      status: "Coming Soon",
      painPoint: "Patient Communication & No-Shows",
      features: [
        "Automated appointment reminders",
        "Secure patient messaging",
        "Educational content delivery",
        "Multi-channel communication",
        "Patient portal integration"
      ],
      benefits: [
        "Reduce no-shows by 60%",
        "Improve patient satisfaction",
        "Streamlined communication",
        "Enhanced patient education"
      ],
      ctaText: "Learn More",
      ctaAction: () => navigate("/demo")
    },
    {
      id: "teledentistry",
      title: "Teledentistry Solutions",
      description: "Embrace digital consultations with secure video, digital forms, and remote monitoring.",
      icon: <Video className="h-8 w-8" />,
      priority: "High",
      status: "Coming Soon",
      painPoint: "Adapting to Digital Healthcare Trends",
      features: [
        "HIPAA-compliant video consultations",
        "Digital consent forms",
        "Remote patient monitoring",
        "Integration with practice management",
        "Mobile-friendly platform"
      ],
      benefits: [
        "Expand service reach by 300%",
        "Reduce overhead costs",
        "Improve patient convenience",
        "Future-proof your practice"
      ],
      ctaText: "Learn More",
      ctaAction: () => navigate("/demo")
    },
    {
      id: "insurance",
      title: "Insurance Management Suite",
      description: "Simplify insurance processes with automated verification and claims management.",
      icon: <FileCheck className="h-8 w-8" />,
      priority: "Medium",
      status: "Coming Soon",
      painPoint: "Insurance Complexities & Claims Processing",
      features: [
        "Real-time insurance verification",
        "Automated claims processing",
        "Benefit estimation tools",
        "Insurance education resources",
        "Claims tracking dashboard"
      ],
      benefits: [
        "Reduce claim rejections by 70%",
        "Accelerate reimbursements",
        "Improve cash flow",
        "Reduce administrative burden"
      ],
      ctaText: "Learn More",
      ctaAction: () => navigate("/support")
    },
    {
      id: "staffing",
      title: "Staffing & Training Solutions",
      description: "Address staffing shortages with our job board and professional development tools.",
      icon: <Users className="h-8 w-8" />,
      priority: "Medium",
      status: "Coming Soon",
      painPoint: "Staffing Shortages & Training Needs",
      features: [
        "Dental professionals job board",
        "Certification tracking system",
        "Training resource library",
        "Staff performance analytics",
        "Recruitment assistance"
      ],
      benefits: [
        "Faster hiring process",
        "Qualified candidate pool",
        "Improved staff retention",
        "Enhanced team skills"
      ],
      ctaText: "Learn More",
      ctaAction: () => navigate("/support")
    },
    {
      id: "technology",
      title: "Technology Marketplace",
      description: "Discover and implement the latest dental technology with peer reviews and financing options.",
      icon: <Monitor className="h-8 w-8" />,
      priority: "Medium",
      status: "Coming Soon",
      painPoint: "Technology Implementation & Equipment Costs",
      features: [
        "Curated technology listings",
        "Peer reviews and ratings",
        "Equipment financing options",
        "Implementation support",
        "Training and onboarding"
      ],
      benefits: [
        "Make informed tech decisions",
        "Access to financing",
        "Peer-validated solutions",
        "Seamless implementation"
      ],
      ctaText: "Learn More",
      ctaAction: () => navigate("/marketplace")
    },
    {
      id: "preventive",
      title: "Preventive Care Platform",
      description: "Focus on prevention with specialized products, education, and expert connections.",
      icon: <Heart className="h-8 w-8" />,
      priority: "Medium",
      status: "Coming Soon",
      painPoint: "Shift Toward Preventive Care",
      features: [
        "Preventive care product marketplace",
        "Patient education modules",
        "Expert consultation network",
        "Prevention-focused analytics",
        "Community health initiatives"
      ],
      benefits: [
        "Improve patient outcomes",
        "Reduce treatment costs",
        "Enhance prevention programs",
        "Build healthier communities"
      ],
      ctaText: "Learn More",
      ctaAction: () => navigate("/support")
    },
    {
      id: "global",
      title: "Global Outreach Program",
      description: "Make a difference worldwide with donation facilitation and cross-border logistics.",
      icon: <Globe className="h-8 w-8" />,
      priority: "Low",
      status: "Coming Soon",
      painPoint: "Global Disparities in Dental Care",
      features: [
        "Donation facilitation platform",
        "Cross-border logistics support",
        "Partnership opportunities",
        "Impact tracking and reporting",
        "Cultural competency resources"
      ],
      benefits: [
        "Global impact measurement",
        "Tax-deductible giving",
        "Professional satisfaction",
        "Community building"
      ],
      ctaText: "Learn More",
      ctaAction: () => navigate("/support")
    }
  ];

  const categories = [
    { id: "all", label: "All Solutions", count: solutions.length },
    { id: "High", label: "High Priority", count: solutions.filter(s => s.priority === "High").length },
    { id: "Available", label: "Available Now", count: solutions.filter(s => s.status === "Available").length },
    { id: "Coming Soon", label: "Coming Soon", count: solutions.filter(s => s.status === "Coming Soon").length }
  ];

  const filteredSolutions = solutions.filter(solution => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "High") return solution.priority === "High";
    if (selectedCategory === "Available") return solution.status === "Available";
    if (selectedCategory === "Coming Soon") return solution.status === "Coming Soon";
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available": return "bg-green-100 text-green-800";
      case "In Development": return "bg-yellow-100 text-yellow-800";
      case "Coming Soon": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-orange-100 text-orange-800";
      case "Low": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Solutions for Modern Dental Practices
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Address every challenge your practice faces with our integrated platform designed specifically for dental professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[#0066CC] hover:bg-blue-50 text-lg px-8 py-3"
                onClick={() => navigate("/marketplace")}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Start Your Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#0066CC] text-lg px-8 py-3"
                onClick={() => navigate("/demo")}
              >
                <Video className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#0066CC] text-white rounded-full mx-auto mb-4">
                <Building2 className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-[#0066CC] mb-2">2,500+</div>
              <div className="text-gray-600">Active Practices</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#00A86B] text-white rounded-full mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-[#00A86B] mb-2">500+</div>
              <div className="text-gray-600">Verified Suppliers</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#0066CC] text-white rounded-full mx-auto mb-4">
                <BarChart3 className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-[#0066CC] mb-2">35%</div>
              <div className="text-gray-600">Average Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#00A86B] text-white rounded-full mx-auto mb-4">
                <Stethoscope className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-[#00A86B] mb-2">98.5%</div>
              <div className="text-gray-600">User Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                {category.label}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution) => (
              <Card key={solution.id} className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-12 h-12 bg-[#0066CC]/10 text-[#0066CC] rounded-lg">
                        {solution.icon}
                      </div>
                      <div>
                        <Badge className={getPriorityColor(solution.priority)} variant="outline">
                          {solution.priority} Priority
                        </Badge>
                      </div>
                    </div>
                    <Badge className={getStatusColor(solution.status)}>
                      {solution.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500 mb-2">
                    Addresses: {solution.painPoint}
                  </CardDescription>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-[#00A86B]" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {solution.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-[#00A86B] mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {solution.features.length > 3 && (
                        <li className="text-sm text-gray-500">
                          +{solution.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Target className="h-4 w-4 text-[#0066CC]" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {solution.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Star className="h-4 w-4 text-[#0066CC] mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-4">
                    <Button 
                      className="w-full" 
                      onClick={solution.ctaAction}
                      disabled={solution.status === "Coming Soon"}
                    >
                      {solution.ctaText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0066CC] to-[#00A86B] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of dental professionals who are already saving time, reducing costs, and improving patient care with Mimios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#0066CC] hover:bg-blue-50 text-lg px-8 py-3"
              onClick={() => navigate("/register")}
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#0066CC] text-lg px-8 py-3"
              onClick={() => navigate("/support")}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
