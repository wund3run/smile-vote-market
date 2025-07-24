import { ReactNode, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { MainHeader } from "@/components/headers/MainHeader";
import { Footer } from "@/components/Footer";

interface MainLayoutProps {
  children: ReactNode;
  userType?: 'clinic' | 'supplier' | 'vendor' | null;
  isAuthenticated?: boolean;
  userProfile?: {
    name: string;
    company: string;
    clinic?: string;
    avatar?: string;
  };
}

export function MainLayout({ 
  children, 
  userType = null, 
  isAuthenticated = false,
  userProfile 
}: MainLayoutProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MainHeader 
        userType={userType}
        isAuthenticated={isAuthenticated}
        userProfile={userProfile}
      />
      
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      <Footer />

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}
