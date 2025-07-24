import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote: "Mimios has revolutionized our procurement process. The vendor verification and quality control features give us complete confidence in our purchases.",
    author: "Dr. Sarah Chen",
    role: "Practice Owner",
    location: "San Francisco, CA",
    avatar: "",
    rating: 5,
    clinic: "Chen Dental Group",
    savings: "42% cost reduction",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    quote: "The analytics dashboard provides incredible insights into our supply chain costs and vendor performance. It's transformed how we make purchasing decisions.",
    author: "Dr. Michael Rodriguez",
    role: "Clinic Director",
    location: "Miami, FL",
    avatar: "",
    rating: 5,
    clinic: "Florida Dental Associates",
    savings: "38% efficiency gain",
    gradient: "from-primary to-primary-glow"
  },
  {
    quote: "As a supplier, Mimios's platform has opened up new opportunities. The streamlined onboarding and transparent pricing tools are game-changers.",
    author: "Lisa Thompson",
    role: "Sales Director",
    location: "Chicago, IL",
    avatar: "",
    rating: 5,
    clinic: "DentaSupply Pro",
    savings: "60% more leads",
    gradient: "from-accent to-accent-glow"
  },
  {
    quote: "The compliance tracking and documentation features have simplified our audit processes significantly. Everything is organized and easily accessible.",
    author: "Dr. James Park",
    role: "Quality Manager",
    location: "Seattle, WA",
    avatar: "",
    rating: 5,
    clinic: "Northwest Dental Care",
    savings: "75% time saved",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    quote: "Mimios's network has connected us with suppliers we never would have found otherwise. The quality verification gives us peace of mind.",
    author: "Dr. Amanda Foster",
    role: "Practice Manager",
    location: "Austin, TX",
    avatar: "",
    rating: 5,
    clinic: "Capital City Dental",
    savings: "35% better pricing",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    quote: "The API integration with our existing systems was seamless. Now our inventory management is automated and always up-to-date.",
    author: "Robert Kim",
    role: "IT Director",
    location: "Denver, CO",
    avatar: "",
    rating: 5,
    clinic: "Rocky Mountain Dental",
    savings: "80% automation",
    gradient: "from-indigo-500 to-blue-500"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Star className="w-3 h-3 mr-1" />
            Customer Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how clinics and suppliers are transforming their business with Mimios's 
            comprehensive dental commerce platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.author}
              className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm h-full"
            >
              <CardContent className="p-6 h-full flex flex-col">
                {/* Quote icon */}
                <div className={`p-2 w-fit rounded-lg bg-gradient-to-br ${testimonial.gradient} mb-4`}>
                  <Quote className="w-4 h-4 text-white" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-sm leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author info */}
                <div className="mt-auto">
                  <div className="flex items-center space-x-3 mb-3">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.author}</div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role} • {testimonial.location}
                      </div>
                    </div>
                  </div>
                  
                  {/* Clinic and metrics */}
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-primary">{testimonial.clinic}</div>
                    <Badge variant="outline" className="text-xs bg-muted/50">
                      {testimonial.savings}
                    </Badge>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Join Thousands of Satisfied Customers
            </h3>
            <p className="text-muted-foreground mb-6">
              Experience the same success as these dental professionals. 
              Transform your procurement process today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow min-w-[180px]" asChild>
                <Link to="/register">
                  Join Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <span>⭐ 4.8/5 average rating</span>
              <span>•</span>
              <span>2,500+ happy customers</span>
              <span>•</span>
              <span>99.9% uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
