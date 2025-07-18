import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Heart,
  Shield,
  Award,
  Truck
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      {/* Newsletter Section */}
      <div className="bg-gradient-subtle py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Updated with DentalMarket
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest product updates, industry news, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button variant="default" className="px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  DentalMarket
                </h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  The world's largest dental marketplace connecting professionals with suppliers, 
                  innovative products, and comprehensive dental tourism solutions.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>123 Dental Plaza, Healthcare District</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+1 (555) 123-DENTAL</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>support@dentalmarket.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Marketplace</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Browse Products</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Featured Equipment</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Digital Solutions</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Dental Tourism</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Submit Request</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Supplier Portal</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Support</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Returns & Exchanges</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Product Warranties</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Training Resources</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Our Mission</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Press Center</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Partner Program</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Investor Relations</a></li>
              </ul>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-medium text-sm">Secure Payments</div>
                  <div className="text-xs text-muted-foreground">SSL Encrypted</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-medium text-sm">Verified Suppliers</div>
                  <div className="text-xs text-muted-foreground">Quality Assured</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-medium text-sm">Global Shipping</div>
                  <div className="text-xs text-muted-foreground">Worldwide Delivery</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-medium text-sm">24/7 Support</div>
                  <div className="text-xs text-muted-foreground">Expert Help</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <span>© 2024 DentalMarket. All rights reserved.</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}