import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, GraduationCap, Calendar, Building2, Search, Plus } from "lucide-react";

export function StaffManagement() {
  const [activeTab, setActiveTab] = useState("jobBoard");
  const [locationFilter, setLocationFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Staff Management Hub
          </h2>
          <p className="text-gray-600 mt-1">
            Comprehensive solution for dental practice staffing needs
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Post Job
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4">
        <Input
          placeholder="Search jobs or team members..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
        <Input
          placeholder="Filter by location..."
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="max-w-xs"
        />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="jobBoard">Job Board</TabsTrigger>
          <TabsTrigger value="team">Team Management</TabsTrigger>
          <TabsTrigger value="training">Training & Certifications</TabsTrigger>
          <TabsTrigger value="scheduling">Scheduling</TabsTrigger>
        </TabsList>

        <TabsContent value="jobBoard" className="space-y-4">
          {/* TODO: Extract job board component */}
          <div>Job board content will be extracted...</div>
        </TabsContent>

        <TabsContent value="team" className="space-y-4">
          {/* TODO: Extract team management component */}
          <div>Team management content will be extracted...</div>
        </TabsContent>

        <TabsContent value="training" className="space-y-4">
          {/* TODO: Extract training component */}
          <div>Training & certifications content will be extracted...</div>
        </TabsContent>

        <TabsContent value="scheduling" className="space-y-4">
          {/* TODO: Extract scheduling component */}
          <div>Scheduling content will be extracted...</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}