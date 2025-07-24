import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, Star, Users, ChartLine, Upload } from "lucide-react";

export function PracticeProfile() {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex items-start gap-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder-practice.jpg" alt="Practice" />
                <AvatarFallback>DP</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold">Dental Excellence Center</h2>
                <p className="text-muted-foreground">New York, NY</p>
                <div className="flex items-center mt-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 text-sm font-medium">4.8</span>
                  <span className="ml-1 text-sm text-muted-foreground">(124 reviews)</span>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-end">
              <Button variant="outline">
                <Edit className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Tabs */}
      <Tabs defaultValue="about">
        <TabsList>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Practice Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Description</label>
                <p className="mt-1 text-muted-foreground">
                  A state-of-the-art dental practice committed to providing exceptional care using the latest technology and techniques.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Specialties</label>
                  <p className="mt-1 text-muted-foreground">
                    General Dentistry, Cosmetic Dentistry, Orthodontics
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium">Working Hours</label>
                  <p className="mt-1 text-muted-foreground">
                    Mon-Fri: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Team Members</CardTitle>
              <Button>
                <Users className="mr-2 h-4 w-4" />
                Add Member
              </Button>
            </CardHeader>
            <CardContent>
              {/* Add team member list component */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="branding" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Brand Assets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium">Logo</label>
                  <div className="mt-2 border-2 border-dashed rounded-lg p-4 text-center">
                    <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">
                      Drag and drop or click to upload
                    </p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Brand Colors</label>
                  <div className="mt-2 flex gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary" />
                    <div className="h-8 w-8 rounded-full bg-secondary" />
                    <div className="h-8 w-8 rounded-full bg-accent" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-muted">
                  <p className="text-sm font-medium">Profile Views</p>
                  <h3 className="text-2xl font-bold mt-1">1,234</h3>
                  <p className="text-xs text-muted-foreground mt-1">+12% this month</p>
                </div>
                <div className="p-4 rounded-lg bg-muted">
                  <p className="text-sm font-medium">Review Score</p>
                  <h3 className="text-2xl font-bold mt-1">4.8/5</h3>
                  <p className="text-xs text-muted-foreground mt-1">Based on 124 reviews</p>
                </div>
                <div className="p-4 rounded-lg bg-muted">
                  <p className="text-sm font-medium">Engagement Rate</p>
                  <h3 className="text-2xl font-bold mt-1">68%</h3>
                  <p className="text-xs text-muted-foreground mt-1">+5% this month</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
