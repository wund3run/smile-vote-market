export interface Job {
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

export interface TeamMember {
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