import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Search,
  HelpCircle,
  BookOpen,
  MessageCircle,
  PlayCircle,
  Headphones,
  FileText,
  ThumbsUp,
  AlertCircle,
  ChevronRight
} from "lucide-react";

export function SupportCenter() {
  return (
    <div className="space-y-6">
      {/* Search Header */}
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="pt-6">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold">How can we help you?</h2>
            <p className="text-primary-foreground/80">
              Search our knowledge base or get in touch with support
            </p>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search for answers..."
                className="pl-10 bg-white/10 border-white/20 placeholder:text-white/50"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <BookOpen className="h-8 w-8 mx-auto text-primary" />
              <h3 className="font-medium">Knowledge Base</h3>
              <p className="text-sm text-muted-foreground">Find detailed guides and FAQs</p>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <MessageCircle className="h-8 w-8 mx-auto text-primary" />
              <h3 className="font-medium">Live Chat</h3>
              <p className="text-sm text-muted-foreground">Chat with our support team</p>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <PlayCircle className="h-8 w-8 mx-auto text-primary" />
              <h3 className="font-medium">Video Tutorials</h3>
              <p className="text-sm text-muted-foreground">Watch step-by-step guides</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="popular">
        <TabsList>
          <TabsTrigger value="popular">Popular Articles</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="tickets">Support Tickets</TabsTrigger>
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
        </TabsList>

        <TabsContent value="popular" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Most Helpful Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Article Link */}
                <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted cursor-pointer">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Getting Started Guide</h4>
                      <p className="text-sm text-muted-foreground">Complete platform walkthrough</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="outline" className="bg-primary/10">
                      <ThumbsUp className="mr-1 h-3 w-3" />
                      95% Helpful
                    </Badge>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tickets" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Your Support Tickets</CardTitle>
                <Button>
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Submit Ticket
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Ticket Item */}
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge>Open</Badge>
                        <h4 className="font-medium">Integration Issue</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Ticket #12345 • Created 2 hours ago
                      </p>
                    </div>
                    <Button variant="outline">View Details</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg text-center">
                  <Headphones className="h-8 w-8 mx-auto text-primary mb-2" />
                  <h3 className="font-medium mb-1">Call Us</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Available 24/7 for urgent issues
                  </p>
                  <Button variant="outline" className="w-full">
                    +1 (800) 123-4567
                  </Button>
                </div>

                <div className="p-4 border rounded-lg text-center">
                  <MessageCircle className="h-8 w-8 mx-auto text-primary mb-2" />
                  <h3 className="font-medium mb-1">Live Chat</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Chat with our support team
                  </p>
                  <Button className="w-full">Start Chat</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
