import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  CheckCircle,
  Users,
  ShieldCheck,
  Zap
} from "lucide-react";

export default function Register() {
  const [userType, setUserType] = useState<"clinic" | "supplier" | "professional">("clinic");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Join the{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mimios Network
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with verified suppliers and streamline your dental commerce today
          </p>
        </div>

        {/* User Type Selection */}
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-xl font-semibold text-center mb-6">Choose Your Account Type</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card 
              className={`cursor-pointer transition-all ${
                userType === "clinic" ? "ring-2 ring-primary bg-primary/5" : "hover:shadow-md"
              }`}
              onClick={() => setUserType("clinic")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Dental Clinic</h3>
                <p className="text-sm text-muted-foreground">
                  Source supplies and equipment for your practice
                </p>
                {userType === "clinic" && (
                  <CheckCircle className="h-5 w-5 text-primary mx-auto mt-3" />
                )}
              </CardContent>
            </Card>

            <Card 
              className={`cursor-pointer transition-all ${
                userType === "supplier" ? "ring-2 ring-primary bg-primary/5" : "hover:shadow-md"
              }`}
              onClick={() => setUserType("supplier")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Supplier</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with clinics and grow your business
                </p>
                {userType === "supplier" && (
                  <CheckCircle className="h-5 w-5 text-primary mx-auto mt-3" />
                )}
              </CardContent>
            </Card>

            <Card 
              className={`cursor-pointer transition-all ${
                userType === "professional" ? "ring-2 ring-primary bg-primary/5" : "hover:shadow-md"
              }`}
              onClick={() => setUserType("professional")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <User className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Professional</h3>
                <p className="text-sm text-muted-foreground">
                  Access training, resources, and networking
                </p>
                {userType === "professional" && (
                  <CheckCircle className="h-5 w-5 text-primary mx-auto mt-3" />
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Registration Form */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Create Your {userType === "clinic" ? "Clinic" : userType === "supplier" ? "Supplier" : "Professional"} Account
              </CardTitle>
              <p className="text-center text-muted-foreground">
                Join thousands of dental professionals on Mimios
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium block mb-2">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-2">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium block mb-2">Email Address</label>
                  <Input type="email" placeholder="john@dentalclinic.com" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-2">Phone Number</label>
                  <Input placeholder="+1 (555) 123-4567" />
                </div>
              </div>

              {/* Business Information */}
              <div className="pt-4 border-t">
                <h3 className="font-semibold mb-4">
                  {userType === "clinic" ? "Clinic Information" : 
                   userType === "supplier" ? "Business Information" : 
                   "Professional Information"}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium block mb-2">
                      {userType === "clinic" ? "Clinic Name" : 
                       userType === "supplier" ? "Company Name" : 
                       "Organization/Practice"}
                    </label>
                    <Input placeholder={
                      userType === "clinic" ? "Downtown Dental Clinic" : 
                      userType === "supplier" ? "MedTech Solutions Inc." : 
                      "Dental Excellence Group"
                    } />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium block mb-2">City</label>
                      <Input placeholder="San Francisco" />
                    </div>
                    <div>
                      <label className="text-sm font-medium block mb-2">State/Province</label>
                      <Input placeholder="California" />
                    </div>
                  </div>

                  {userType === "supplier" && (
                    <div>
                      <label className="text-sm font-medium block mb-2">Product Categories</label>
                      <Input placeholder="Dental equipment, supplies, instruments..." />
                    </div>
                  )}

                  {userType === "professional" && (
                    <div>
                      <label className="text-sm font-medium block mb-2">Specialization</label>
                      <Input placeholder="Orthodontics, Oral Surgery, General Dentistry..." />
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits Display */}
              <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  Your Benefits Include:
                </h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {(
                    userType === "clinic" ? [
                      "Access to 800+ verified suppliers",
                      "35% average cost savings",
                      "Streamlined procurement process",
                      "Compliance management tools"
                    ] : userType === "supplier" ? [
                      "Connect with 2,500+ clinics",
                      "Vendor portal & analytics",
                      "Marketplace visibility",
                      "Business growth tools"
                    ] : [
                      "Professional networking",
                      "Training & resources",
                      "Industry insights",
                      "Career opportunities"
                    ]
                  ).map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terms & Register */}
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" aria-label="Accept terms and privacy policy" />
                  <p className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <a href="/terms" className="text-primary hover:underline">Terms of Service</a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                  </p>
                </div>

                <Button size="lg" className="w-full bg-gradient-to-r from-primary to-primary-glow">
                  Create Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <a href="/login" className="text-primary hover:underline">Sign in here</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">Trusted by leading dental organizations:</p>
          <div className="flex items-center justify-center space-x-6 opacity-60">
            <Badge variant="outline" className="flex items-center gap-1">
              <ShieldCheck className="h-3 w-3" />
              ISO 13485
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <ShieldCheck className="h-3 w-3" />
              FDA Approved
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <ShieldCheck className="h-3 w-3" />
              HIPAA Compliant
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
