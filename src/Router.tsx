import { Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { useAuth } from "@/contexts/AuthContext";
import Index from "@/pages/Index";
import Solutions from "@/pages/Solutions";
import Marketplace from "@/pages/Marketplace";
import Vendors from "@/pages/Vendors";
import Analytics from "@/pages/Analytics";
import Register from "@/pages/Register";
import Demo from "@/pages/Demo";
import Support from "@/pages/Support";
import NotFound from "@/pages/NotFound";
import { InsuranceCompliance } from "@/components/InsuranceCompliance";
import { StaffManagement } from "@/components/StaffManagement";

export function Router() {
  const { user, isAuthenticated } = useAuth();

  return (
    <MainLayout 
      userType={user?.type || null}
      isAuthenticated={isAuthenticated}
      userProfile={user ? {
        name: user.name,
        company: user.company,
        clinic: user.clinic,
        avatar: user.avatar
      } : undefined}
    >
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/register" element={<Register />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/support" element={<Support />} />
        <Route path="/insurance" element={<InsuranceCompliance />} />
        <Route path="/staff" element={<StaffManagement />} />
        
        {/* Clinic Routes */}
        <Route path="/clinic/*" element={<div className="p-8"><h1>Clinic Dashboard</h1></div>} />
        
        {/* Supplier Routes */}
        <Route path="/supplier/*" element={<div className="p-8"><h1>Supplier Dashboard</h1></div>} />
        
        {/* Vendor Routes */}
        <Route path="/vendor/*" element={<div className="p-8"><h1>Vendor Dashboard</h1></div>} />
        
        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}
