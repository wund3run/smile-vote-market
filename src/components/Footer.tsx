import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MimiosLogo } from "@/components/MimiosLogo";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Shield,
  Award,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  platform: [
    { name: "Marketplace", href: "/marketplace" },
    { name: "Vendor Portal", href: "/vendors" },
    { name: "Analytics", href: "/analytics" },
    { name: "API Documentation", href: "/docs" }
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Press Kit", href: "/press" },
    { name: "Contact", href: "/contact" }
  ],
  resources: [
    { name: "Help Center", href: "/help" },
    { name: "Blog", href: "/blog" },
    { name: "Webinars", href: "/webinars" },
    { name: "Case Studies", href: "/case-studies" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Compliance", href: "/compliance" },
    { name: "Security", href: "/security" }
  ]
};

const certifications = [
  { name: "ISO 13485", icon: <Shield className="w-4 h-4" /> },
  { name: "FDA Approved", icon: <Award className="w-4 h-4" /> },
  { name: "HIPAA Compliant", icon: <Shield className="w-4 h-4" /> },
  { name: "Global Standards", icon: <Globe className="w-4 h-4" /> }
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <MimiosLogo size="md" />
            <p className="text-gray-400 leading-relaxed">
              Empowering dental commerce through smart procurement and verified supplier networks.
            </p>
          </div>
          
          {/* Platform */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/marketplace" className="hover:text-white transition-colors">Marketplace</a></li>
              <li><a href="/vendors" className="hover:text-white transition-colors">For Suppliers</a></li>
              <li><a href="/analytics" className="hover:text-white transition-colors">Analytics</a></li>
              <li><a href="/api" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/help" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/demo" className="hover:text-white transition-colors">Book Demo</a></li>
              <li><a href="/status" className="hover:text-white transition-colors">System Status</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Mimios. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span className="text-sm text-gray-400">ISO 13485 Certified</span>
              <span className="text-sm text-gray-400">SOC 2 Compliant</span>
              <span className="text-sm text-gray-400">GDPR Ready</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
