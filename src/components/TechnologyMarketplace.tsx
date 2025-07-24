import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search,
  Filter,
  Star,
  Monitor,
  DollarSign,
  ThumbsUp,
  Calendar,
  PlayCircle,
  Cpu,
  Grid,
  List
} from "lucide-react";

export function TechnologyMarketplace() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex-1 relative max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search equipment, software..." className="pl-8" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <div className="flex border rounded-md">
            <Button variant="ghost" size="icon">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <Monitor className="h-8 w-8 mx-auto text-primary" />
              <h3 className="font-medium">Digital Imaging</h3>
              <p className="text-sm text-muted-foreground">24 Products</p>
            </div>
          </CardContent>
        </Card>
        {/* Add more category cards */}
      </div>

      {/* Main Content */}
      <Tabs defaultValue="featured">
        <TabsList>
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="newest">Newest</TabsTrigger>
          <TabsTrigger value="popular">Most Popular</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
        </TabsList>

        <TabsContent value="featured" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Card */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video relative">
                  <img 
                    src="/placeholder-product.jpg" 
                    alt="Product"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-2 left-2">Featured</Badge>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Digital Scanner Pro X1</h3>
                      <p className="text-sm text-muted-foreground">By DentalTech Inc.</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-medium ml-1">4.8</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-primary/10">
                        <DollarSign className="mr-1 h-3 w-3" />
                        Financing
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10">
                        <ThumbsUp className="mr-1 h-3 w-3" />
                        Top Rated
                      </Badge>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button className="w-full">View Details</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="training" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Training Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Training Item */}
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <PlayCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Digital Scanner Basics</h4>
                      <p className="text-sm text-muted-foreground">45min course • Beginner</p>
                    </div>
                  </div>
                  <Button variant="outline">Start Training</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Financing Options */}
      <Card>
        <CardHeader>
          <CardTitle>Flexible Financing Options</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Equipment Lease</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Low monthly payments with option to buy
              </p>
              <Button variant="outline" className="w-full">Learn More</Button>
            </div>
            {/* Add more financing options */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
