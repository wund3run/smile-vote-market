import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, ShieldCheck, DollarSign, Building2, Globe, Award, Zap } from "lucide-react";

const stats = [
  {
    icon: <Building2 className="h-6 w-6" />,
    value: "2,500+",
    label: "Dental Clinics",
    description: "Active practices using our platform",
    gradient: "from-blue-500 to-cyan-500",
    trend: "+23% this quarter"
  },
  {
    icon: <Users className="h-6 w-6" />,
    value: "800+",
    label: "Verified Suppliers",
    description: "Trusted partners in our network",
    gradient: "from-primary to-primary-glow",
    trend: "+15% this month"
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    value: "35%",
    label: "Procurement Cost Savings",
    description: "Average savings per clinic",
    gradient: "from-green-500 to-emerald-500",
    trend: "Consistent growth"
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    value: "98%",
    label: "Quality Certification Rate",
    description: "ISO certified products",
    gradient: "from-accent to-accent-glow",
    trend: "Industry leading"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    value: "45",
    label: "Countries Served",
    description: "Global dental commerce network",
    gradient: "from-purple-500 to-pink-500",
    trend: "Expanding globally"
  },
  {
    icon: <Award className="h-6 w-6" />,
    value: "99.9%",
    label: "Platform Uptime",
    description: "Reliable service guarantee",
    gradient: "from-indigo-500 to-blue-500",
    trend: "24/7 reliability"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    value: "2.3M",
    label: "Transactions Processed",
    description: "Successful procurement deals",
    gradient: "from-yellow-500 to-orange-500",
    trend: "+40% YoY growth"
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    value: "4.8/5",
    label: "Customer Satisfaction",
    description: "Average platform rating",
    gradient: "from-red-500 to-pink-500",
    trend: "Consistently high"
  }
];

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
            <TrendingUp className="w-3 h-3 mr-1" />
            Platform Impact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by the{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dental Industry
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real numbers from real dental professionals who've transformed their 
            procurement process with Mimios's comprehensive platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className={`p-3 w-fit rounded-xl bg-gradient-to-br ${stat.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                
                {/* Main stat */}
                <div className="mb-2">
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  {stat.description}
                </p>
                
                {/* Trend indicator */}
                <Badge variant="outline" className="text-xs bg-muted/50">
                  {stat.trend}
                </Badge>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom section with certifications */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Industry Certifications & Compliance</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">ISO 13485 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">FDA Approved</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Global Standards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
