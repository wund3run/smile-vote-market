import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Sparkles,
  ShieldCheck,
  BarChart3,
  Globe2,
  Zap,
  Search,
  HeartPulse,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Vendor Portal",
    description: "Complete onboarding, product catalog management, and pricing tools for suppliers.",
    badge: "For Suppliers",
    badgeVariant: "secondary" as const,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Clinic Dashboard",
    description: "Track orders, manage inventory, monitor supplier performance, and access documentation.",
    badge: "For Clinics",
    badgeVariant: "outline" as const,
    gradient: "from-primary to-primary-glow"
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Compliance & Quality",
    description: "ISO-certified products, verified sellers, and comprehensive documentation tracking.",
    badge: "Certified",
    badgeVariant: "secondary" as const,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Analytics Suite",
    description: "Product trends, vendor performance insights, and cost optimization recommendations.",
    badge: "Data-Driven",
    badgeVariant: "outline" as const,
    gradient: "from-accent to-accent-glow"
  },
  {
    icon: <Globe2 className="h-8 w-8" />,
    title: "Network & Growth",
    description: "Connect with suppliers, labs, trainers, and industry experts in one platform.",
    badge: "Networking",
    badgeVariant: "secondary" as const,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "API Integration",
    description: "Seamlessly connect Mimios with your existing ERP systems and supplier databases.",
    badge: "Developer",
    badgeVariant: "outline" as const,
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: "Marketplace Search",
    description: "Advanced filtering by category, location, certification, and delivery timelines.",
    badge: "Smart Search",
    badgeVariant: "secondary" as const,
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: <HeartPulse className="h-8 w-8" />,
    title: "Digital Excellence",
    description: "Access cutting-edge dental technology and digital workflow solutions.",
    badge: "Innovation",
    badgeVariant: "outline" as const,
    gradient: "from-red-500 to-pink-500"
  }
];

export function FeaturesShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Platform Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Streamline. Source.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Smile.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need for smarter dental commerce—procurement, compliance, 
            analytics, and networking tools designed for modern dental professionals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                {/* Icon with gradient background */}
                <div className={`p-3 w-fit rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Badge */}
                <Badge variant={feature.badgeVariant} className="mb-3 text-xs">
                  {feature.badge}
                </Badge>
                
                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience the Future of Dental Commerce?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of dental professionals who trust Mimios for their procurement needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow min-w-[180px]">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="min-w-[180px]">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
