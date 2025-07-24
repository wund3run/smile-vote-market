import { useLocation } from "react-router-dom";
import { LandingHeader } from "./LandingHeader";
import { ClinicHeader } from "./ClinicHeader";
import { SupplierHeader } from "./SupplierHeader";
import { VendorHeader } from "./VendorHeader";

interface MainHeaderProps {
  userType?: 'clinic' | 'supplier' | 'vendor' | null;
  isAuthenticated?: boolean;
  userProfile?: {
    name: string;
    company: string;
    clinic?: string;
    avatar?: string;
  };
}

export function MainHeader({ 
  userType = null, 
  isAuthenticated = false,
  userProfile 
}: MainHeaderProps) {
  const location = useLocation();
  
  // Landing page routes that should use LandingHeader
  const landingRoutes = ['/', '/marketplace', '/register', '/demo', '/support'];
  const isLandingPage = landingRoutes.includes(location.pathname) || 
                       !isAuthenticated || 
                       userType === null;

  // Route-based header selection for authenticated users
  if (isAuthenticated && userType) {
    // Check for specific route patterns
    if (location.pathname.startsWith('/clinic/') || userType === 'clinic') {
      const clinicProfile = userProfile ? {
        name: userProfile.name,
        clinic: userProfile.clinic || userProfile.company,
        avatar: userProfile.avatar
      } : undefined;
      return <ClinicHeader userProfile={clinicProfile} />;
    }
    
    if (location.pathname.startsWith('/supplier/') || userType === 'supplier') {
      return <SupplierHeader userProfile={userProfile} />;
    }
    
    if (location.pathname.startsWith('/vendor/') || userType === 'vendor') {
      return <VendorHeader userProfile={userProfile} />;
    }
  }

  // Default to landing header for unauthenticated users or landing pages
  return <LandingHeader isLoggedIn={isAuthenticated} />;
}

// Hook for easier header management
export function useHeaderType() {
  const location = useLocation();
  
  // Determine user type from route
  if (location.pathname.startsWith('/clinic/')) return 'clinic';
  if (location.pathname.startsWith('/supplier/')) return 'supplier';
  if (location.pathname.startsWith('/vendor/')) return 'vendor';
  
  return null;
}
