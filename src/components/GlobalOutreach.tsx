import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Globe,
  Heart,
  Users,
  TrendingUp,
  MapPin,
  Calendar,
  HandHeart,
  Truck,
  BookOpen,
  ThumbsUp
} from "lucide-react";

export function GlobalOutreach() {
  return (
    <div className="space-y-6">
      {/* Impact Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Clinics Supported</p>
                <h3 className="text-2xl font-bold mt-1">124</h3>
              </div>
              <Globe className="h-5 w-5 text-primary" />
            </div>
            <Progress value={75} className="mt-4" />
            <p className="text-xs text-muted-foreground mt-2">12 new this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Donations Value</p>
                <h3 className="text-2xl font-bold mt-1">$256K</h3>
              </div>
              <Heart className="h-5 w-5 text-primary" />
            </div>
            <Progress value={85} className="mt-4" />
            <p className="text-xs text-muted-foreground mt-2">+45% this quarter</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Volunteers</p>
                <h3 className="text-2xl font-bold mt-1">89</h3>
              </div>
              <Users className="h-5 w-5 text-primary" />
            </div>
            <Progress value={60} className="mt-4" />
            <p className="text-xs text-muted-foreground mt-2">Active volunteers</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Patients Helped</p>
                <h3 className="text-2xl font-bold mt-1">2.4K</h3>
              </div>
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <Progress value={90} className="mt-4" />
            <p className="text-xs text-muted-foreground mt-2">This year</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="programs">
        <TabsList>
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="donations">Donations</TabsTrigger>
          <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
          <TabsTrigger value="impact">Impact Stories</TabsTrigger>
        </TabsList>

        <TabsContent value="programs" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Active Programs</CardTitle>
                <Button>
                  <HandHeart className="mr-2 h-4 w-4" />
                  Join Program
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Program Card */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video relative">
                    <img 
                      src="/placeholder-program.jpg" 
                      alt="Dental Care for All"
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-2 left-2">Featured</Badge>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Southeast Asia</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Dental Care for All</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Providing essential dental care to underserved communities.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm">24 Volunteers</span>
                      </div>
                      <Button variant="outline">Learn More</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="donations" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Donation Opportunities</CardTitle>
                <Button>Make Donation</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Donation Card */}
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Truck className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Equipment Drive</h4>
                        <p className="text-sm text-muted-foreground">Medical supplies needed</p>
                      </div>
                    </div>
                    <Badge variant="outline">High Priority</Badge>
                  </div>
                  <Progress value={65} className="mb-2" />
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">$32,450 raised</span>
                    <span className="font-medium">Goal: $50,000</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="volunteer" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Volunteer Opportunities</CardTitle>
                <Button>Register as Volunteer</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Volunteer Card */}
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Dental Mission - Kenya</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Aug 15 - Aug 30, 2025</span>
                      </div>
                    </div>
                    <Button variant="outline">Apply Now</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="impact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Success Stories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Impact Story Card */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video relative">
                    <img 
                      src="/placeholder-story.jpg" 
                      alt="Impact Story"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium mb-2">Transforming Lives in Rural Communities</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      How our volunteer dentists brought smiles to 500+ patients in remote villages.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ThumbsUp className="h-4 w-4 text-primary" />
                        <span className="text-sm">256 supporters</span>
                      </div>
                      <Button variant="outline">Read More</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
