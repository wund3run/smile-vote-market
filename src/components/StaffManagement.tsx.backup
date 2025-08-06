import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  GraduationCap,
  Calendar,
  MapPin,
  Clock,
  Building2,
  Briefcase,
  DollarSign,
  Plus,
  Search,
  FileText,
  Filter,
  UserPlus
} from "lucide-react";

interface Job {
  id: string;
  title: string;
  type: "full-time" | "part-time" | "contract" | "temporary";
  location: {
    city: string;
    state: string;
    country: string;
    type: "on-site" | "hybrid" | "remote";
  };
  practice: {
    name: string;
    rating: number;
    reviewCount: number;
  };
  salary: {
    min: number;
    max: number;
    period: "hour" | "year";
  };
  requirements: string[];
  posted: string;
  applicants: number;
  status: "active" | "filled" | "expired";
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  certifications: {
    name: string;
    issueDate: string;
    expiryDate: string;
    status: "active" | "expiring" | "expired";
  }[];
  location: string;
  department: string;
  joinDate: string;
  trainingStatus: {
    completed: number;
    total: number;
    nextDue: string;
  };
}

export function StaffManagement() {
  const [activeTab, setActiveTab] = useState("jobBoard");
  const [locationFilter, setLocationFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data
  const jobs: Job[] = [
    {
      id: "JOB001",
      title: "Senior Dental Hygienist",
      type: "full-time",
      location: {
        city: "San Francisco",
        state: "CA",
        country: "USA",
        type: "on-site"
      },
      practice: {
        name: "Bay Area Dental Clinic",
        rating: 4.8,
        reviewCount: 124
      },
      salary: {
        min: 85000,
        max: 110000,
        period: "year"
      },
      requirements: [
        "5+ years of experience",
        "Current dental hygienist license",
        "Experience with digital dental technologies",
        "Strong patient communication skills"
      ],
      posted: "2025-07-15",
      applicants: 12,
      status: "active"
    }
  ];

  const teamMembers: TeamMember[] = [
    {
      id: "EMP001",
      name: "Dr. Sarah Johnson",
      role: "Lead Dentist",
      certifications: [
        {
          name: "Advanced Implant Certification",
          issueDate: "2024-05-15",
          expiryDate: "2026-05-15",
          status: "active"
        },
        {
          name: "CPR Certification",
          issueDate: "2024-01-01",
          expiryDate: "2025-12-31",
          status: "active"
        }
      ],
      location: "San Francisco, CA",
      department: "General Dentistry",
      joinDate: "2023-03-15",
      trainingStatus: {
        completed: 8,
        total: 10,
        nextDue: "2025-08-01"
      }
    }
  ];

  const formatSalary = (min: number, max: number, period: string) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    });
    return `${formatter.format(min)} - ${formatter.format(max)} per ${period}`;
  };

  const getStatusBadge = (status: Job["status"] | TeamMember["certifications"][0]["status"]) => {
    const styles = {
      active: "bg-green-100 text-green-800",
      filled: "bg-blue-100 text-blue-800",
      expired: "bg-red-100 text-red-800",
      expiring: "bg-yellow-100 text-yellow-800"
    };
    return styles[status] || styles.active;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Staff Management</h1>
          <p className="text-muted-foreground">Manage your team and find new talent</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => setActiveTab("jobBoard")}>
            <Briefcase className="mr-2 h-4 w-4" />
            View Jobs
          </Button>
          <Button variant="outline" onClick={() => setActiveTab("team")}>
            <Users className="mr-2 h-4 w-4" />
            Team
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="jobBoard">Job Board</TabsTrigger>
          <TabsTrigger value="team">My Team</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
        </TabsList>

        {/* Job Board */}
        <TabsContent value="jobBoard" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Available Positions</CardTitle>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Post New Job
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Search and Filters */}
              <div className="flex gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search jobs..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Location..."
                    className="w-[200px]"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                  />
                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </div>
              </div>

              {/* Job Listings */}
              <div className="space-y-4">
                {jobs.map((job) => (
                  <div key={job.id} className="border rounded-lg p-6 hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{job.title}</h3>
                        <p className="text-muted-foreground">{job.practice.name}</p>
                      </div>
                      <Badge className={getStatusBadge(job.status)}>
                        {job.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{job.location.city}, {job.location.state}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span>{job.location.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span>{formatSalary(job.salary.min, job.salary.max, job.salary.period)}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, index) => (
                          <Badge key={index} variant="outline">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          Posted {new Date(job.posted).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {job.applicants} applicants
                        </span>
                      </div>
                      <Button>
                        Apply Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Team Management */}
        <TabsContent value="team" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Team Members</CardTitle>
                <Button>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add Team Member
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="border rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{member.name}</h3>
                        <p className="text-muted-foreground">{member.role}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Department</p>
                        <p className="font-medium">{member.department}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">{member.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Join Date</p>
                        <p className="font-medium">{new Date(member.joinDate).toLocaleDateString()}</p>
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="space-y-2">
                      <h4 className="font-medium">Certifications</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {member.certifications.map((cert, index) => (
                          <div key={index} className="flex items-center justify-between p-2 border rounded">
                            <div>
                              <p className="font-medium">{cert.name}</p>
                              <p className="text-sm text-muted-foreground">
                                Expires: {new Date(cert.expiryDate).toLocaleDateString()}
                              </p>
                            </div>
                            <Badge className={getStatusBadge(cert.status)}>
                              {cert.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Training Progress */}
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Training Progress</h4>
                        <span className="text-sm text-muted-foreground">
                          Next due: {new Date(member.trainingStatus.nextDue).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary transition-all"
                          data-progress={`${(member.trainingStatus.completed / member.trainingStatus.total) * 100}%`}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {member.trainingStatus.completed} of {member.trainingStatus.total} modules completed
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Training Tab */}
        <TabsContent value="training" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Training & Certification Management</CardTitle>
                <Button>
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Add Training
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Required Training</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="p-2 border rounded flex justify-between items-center">
                        <div>
                          <p className="font-medium">HIPAA Compliance</p>
                          <p className="text-sm text-muted-foreground">Due in 30 days</p>
                        </div>
                        <Badge>Required</Badge>
                      </div>
                      <div className="p-2 border rounded flex justify-between items-center">
                        <div>
                          <p className="font-medium">CPR Certification</p>
                          <p className="text-sm text-muted-foreground">Due in 60 days</p>
                        </div>
                        <Badge>Required</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Optional Courses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="p-2 border rounded flex justify-between items-center">
                        <div>
                          <p className="font-medium">Advanced Patient Care</p>
                          <p className="text-sm text-muted-foreground">8 hours</p>
                        </div>
                        <Button variant="outline" size="sm">Enroll</Button>
                      </div>
                      <div className="p-2 border rounded flex justify-between items-center">
                        <div>
                          <p className="font-medium">Digital Dentistry</p>
                          <p className="text-sm text-muted-foreground">12 hours</p>
                        </div>
                        <Button variant="outline" size="sm">Enroll</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Certification Calendar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="p-2 border rounded">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium">July 2025</p>
                          <Badge variant="outline">2 Due</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <p>• OSHA Safety Training (07/25)</p>
                          <p>• Infection Control (07/30)</p>
                        </div>
                      </div>
                      <div className="p-2 border rounded">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium">August 2025</p>
                          <Badge variant="outline">1 Due</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <p>• Emergency Procedures (08/15)</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
