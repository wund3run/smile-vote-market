import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Building2, 
  Users, 
  Globe, 
  Award, 
  ShieldCheck, 
  TrendingUp,
  Package,
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function Vendors() {
  return (
    <div className="container py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Vendor Portal
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Join thousands of verified suppliers serving dental professionals worldwide
        </p>
      </div>

      {/* Benefits Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="text-center p-6">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">2,500+ Active Clinics</h3>
          <p className="text-muted-foreground text-sm">
            Connect with verified dental practices actively seeking suppliers
          </p>
        </Card>
        
        <Card className="text-center p-6">
          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Globe className="h-6 w-6 text-accent" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
          <p className="text-muted-foreground text-sm">
            Expand your market reach across multiple countries and regions
          </p>
        </Card>
        
        <Card className="text-center p-6">
          <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2">35% Revenue Growth</h3>
          <p className="text-muted-foreground text-sm">
            Average revenue increase for suppliers using Mimios
          </p>
        </Card>
      </div>

      {/* Vendor Application Form */}
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Apply to Become a Vendor</CardTitle>
            <p className="text-center text-muted-foreground">
              Start your journey to connect with dental professionals
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-2">Company Name</label>
                <Input placeholder="Your company name" />
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">Business Type</label>
                <Input placeholder="Manufacturer, Distributor, etc." />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-2">Contact Email</label>
                <Input type="email" placeholder="business@company.com" />
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">Phone Number</label>
                <Input placeholder="+1 (555) 123-4567" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">Product Categories</label>
              <Input placeholder="Dental equipment, supplies, instruments..." />
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">Company Description</label>
              <textarea 
                className="w-full p-3 border rounded-md resize-none" 
                rows={4}
                placeholder="Tell us about your company and products..."
              />
            </div>

            {/* Requirements Checklist */}
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">Vendor Requirements:</h4>
              <div className="space-y-2">
                {[
                  "Valid business license and registration",
                  "Product certifications (FDA, ISO, etc.)",
                  "Quality assurance documentation",
                  "Liability insurance coverage"
                ].map((req, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button size="lg" className="w-full bg-gradient-to-r from-primary to-primary-glow">
              Submit Application
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Applications are typically reviewed within 2-3 business days
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Featured Vendors */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Featured Vendors</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="text-center p-4">
              <div className="w-16 h-16 bg-muted rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Building2 className="h-8 w-8 text-muted-foreground" />
              </div>
              <h4 className="font-semibold mb-1">Dental Supplier {i}</h4>
              <div className="flex items-center justify-center gap-1 mb-2">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="text-sm">4.{8 + i}</span>
              </div>
              <Badge variant="secondary" className="text-xs">
                <ShieldCheck className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
