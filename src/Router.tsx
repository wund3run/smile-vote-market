import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { MainLayout } from "@/layouts/MainLayout";
import { useAuth } from "@/contexts/AuthContext";

// Lazy load pages for code splitting
const Index = lazy(() => import("@/pages/Index"));
const Solutions = lazy(() => import("@/pages/Solutions"));
const Marketplace = lazy(() => import("@/pages/Marketplace"));
const Vendors = lazy(() => import("@/pages/Vendors"));
const Analytics = lazy(() => import("@/pages/Analytics"));
const Register = lazy(() => import("@/pages/Register"));
const Demo = lazy(() => import("@/pages/Demo"));
const Support = lazy(() => import("@/pages/Support"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const InsuranceCompliance = lazy(() => import("@/components/InsuranceCompliance").then(m => ({ default: m.InsuranceCompliance })));
const StaffManagement = lazy(() => import("@/components/StaffManagement").then(m => ({ default: m.StaffManagement })));

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
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[200px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      }>
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
      </Suspense>
    </MainLayout>
  );
}
