import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShieldCheck, Building2, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-accent/10 blur-xl" />
      
      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            {/* Badge */}
            <Badge variant="secondary" className="w-fit bg-primary/10 text-primary border-primary/20">
              <ShieldCheck className="w-3 h-3 mr-1" />
              Trusted by 2,500+ Dental Clinics
            </Badge>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Mimios:
              </span>{" "}
              Empowering the Business of Smiles
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-muted-foreground leading-relaxed">
              Where dental clinics and suppliers connect. Streamlined procurement, 
              compliance management, and data-driven insights—all in one polished platform.
            </p>
            
            {/* Value propositions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">800+ Verified Suppliers</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm font-medium">ISO Certified Products</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all">
                <Link to="/marketplace" className="flex items-center">
                  Explore Marketplace
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/vendors">Join as Supplier</Link>
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-3">Trusted by leading dental organizations:</p>
              <div className="flex items-center space-x-6 opacity-60">
                <div className="text-xs font-medium">ADA Certified</div>
                <div className="text-xs font-medium">ISO 13485</div>
                <div className="text-xs font-medium">FDA Approved</div>
                <div className="text-xs font-medium">HIPAA Compliant</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Graphic */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/src/assets/dental-lab.jpg"
                alt="Modern dental laboratory with advanced equipment"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border">
              <div className="text-2xl font-bold text-primary">35%</div>
              <div className="text-sm text-muted-foreground">Cost Savings</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg border">
              <div className="text-2xl font-bold text-accent">98%</div>
              <div className="text-sm text-muted-foreground">Quality Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
