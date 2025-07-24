import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Clock,
  Video,
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Quote
} from "lucide-react";

export default function Demo() {
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [demoType, setDemoType] = useState<"live" | "self-guided">("live");

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM",
    "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Experience{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mimios
            </span>{" "}
            in Action
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how Mimios transforms dental commerce with a personalized demo
          </p>
        </div>

        {/* Demo Type Selection */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <Card 
              className={`cursor-pointer transition-all ${
                demoType === "live" ? "ring-2 ring-primary bg-primary/5" : "hover:shadow-md"
              }`}
              onClick={() => setDemoType("live")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Live Demo</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  30-minute personalized session with a Mimios expert
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Personalized walkthrough</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Q&A session</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Custom recommendations</span>
                  </div>
                </div>
                {demoType === "live" && (
                  <CheckCircle className="h-5 w-5 text-primary mx-auto mt-4" />
                )}
              </CardContent>
            </Card>

            <Card 
              className={`cursor-pointer transition-all ${
                demoType === "self-guided" ? "ring-2 ring-primary bg-primary/5" : "hover:shadow-md"
              }`}
              onClick={() => setDemoType("self-guided")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Play className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Self-Guided Tour</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore Mimios at your own pace with interactive tutorials
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Available 24/7</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Interactive tutorials</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Feature highlights</span>
                  </div>
                </div>
                {demoType === "self-guided" && (
                  <CheckCircle className="h-5 w-5 text-primary mx-auto mt-4" />
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Demo Booking Form */}
        {demoType === "live" ? (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Schedule Your Live Demo</CardTitle>
                <p className="text-center text-muted-foreground">
                  Book a 30-minute session with our dental commerce expert
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contact Information */}
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

                <div>
                  <label className="text-sm font-medium block mb-2">Practice/Company Name</label>
                  <Input placeholder="Downtown Dental Clinic" />
                </div>

                {/* Date Selection */}
                <div>
                  <label className="text-sm font-medium block mb-2">Preferred Date</label>
                  <Input type="date" />
                </div>

                {/* Time Selection */}
                <div>
                  <label className="text-sm font-medium block mb-2">Preferred Time</label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Demo Focus */}
                <div>
                  <label className="text-sm font-medium block mb-2">What would you like to focus on?</label>
                  <textarea 
                    className="w-full p-3 border rounded-md resize-none" 
                    rows={3}
                    placeholder="e.g., Supplier sourcing, inventory management, cost optimization..."
                  />
                </div>

                <Button size="lg" className="w-full bg-gradient-to-r from-primary to-primary-glow">
                  Schedule Demo
                  <Calendar className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  We'll send you a calendar invite with the meeting link
                </p>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Self-Guided Tour */
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Start Your Self-Guided Tour</CardTitle>
                <p className="text-center text-muted-foreground">
                  Explore Mimios's features with interactive tutorials
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {[
                    {
                      title: "Marketplace Overview",
                      duration: "5 min",
                      description: "Browse suppliers and products"
                    },
                    {
                      title: "Order Management",
                      duration: "8 min", 
                      description: "Track and manage your orders"
                    },
                    {
                      title: "Analytics Dashboard",
                      duration: "6 min",
                      description: "View insights and reports"
                    },
                    {
                      title: "Vendor Portal",
                      duration: "7 min",
                      description: "Supplier tools and features"
                    },
                    {
                      title: "Compliance Tools",
                      duration: "5 min",
                      description: "Manage certifications and docs"
                    },
                    {
                      title: "Mobile Experience",
                      duration: "4 min",
                      description: "Access Mimios on the go"
                    }
                  ].map((module, i) => (
                    <Card key={i} className="group hover:shadow-md transition-all cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                            <Play className="h-4 w-4 text-primary" />
                          </div>
                          <Badge variant="outline" className="text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            {module.duration}
                          </Badge>
                        </div>
                        <h4 className="font-semibold mb-1">{module.title}</h4>
                        <p className="text-sm text-muted-foreground">{module.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow">
                    Start Interactive Tour
                    <Play className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    No registration required • Complete in ~35 minutes
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Social Proof */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Practice Owner",
                content: "Mimios reduced our procurement costs by 40% and saved us hours each week.",
                rating: 5
              },
              {
                name: "Mike Chen",
                role: "Dental Supplier",
                content: "We've connected with 50+ new clinics since joining Mimios's platform.",
                rating: 5
              },
              {
                name: "Dr. Robert Kim",
                role: "Oral Surgeon",
                content: "The compliance features ensure all our suppliers meet quality standards.",
                rating: 5
              }
            ].map((testimonial, i) => (
              <Card key={i} className="text-center">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div className="flex justify-center mb-2">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
