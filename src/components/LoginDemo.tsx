import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth, demoUsers } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function LoginDemo() {
  const { login, logout, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const handleDemoLogin = (userType: 'clinic' | 'supplier' | 'vendor') => {
    login(demoUsers[userType]);
    
    // Navigate to the appropriate dashboard
    switch (userType) {
      case 'clinic':
        navigate('/clinic/dashboard');
        break;
      case 'supplier':
        navigate('/supplier/dashboard');
        break;
      case 'vendor':
        navigate('/vendor/dashboard');
        break;
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (isAuthenticated && user) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Currently Logged In</CardTitle>
          <CardDescription>
            Logged in as {user.name} ({user.type})
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-gray-600">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Company:</strong> {user.company}</p>
            <p><strong>Type:</strong> {user.type}</p>
          </div>
          <div className="space-y-2">
            <Button 
              onClick={() => navigate(`/${user.type}/dashboard`)}
              className="w-full"
            >
              Go to Dashboard
            </Button>
            <Button 
              onClick={handleLogout}
              variant="outline"
              className="w-full"
            >
              Logout
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Demo Login</CardTitle>
        <CardDescription>
          Try different user types to see the header variations
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          onClick={() => handleDemoLogin('clinic')}
          className="w-full justify-start"
        >
          🏥 Login as Clinic
          <span className="ml-auto text-xs text-gray-500">Dr. Sarah Johnson</span>
        </Button>
        
        <Button 
          onClick={() => handleDemoLogin('supplier')}
          variant="outline"
          className="w-full justify-start"
        >
          🏭 Login as Supplier
          <span className="ml-auto text-xs text-gray-500">Maria Rodriguez</span>
        </Button>
        
        <Button 
          onClick={() => handleDemoLogin('vendor')}
          variant="outline"
          className="w-full justify-start"
        >
          🔧 Login as Vendor
          <span className="ml-auto text-xs text-gray-500">Dr. James Mitchell</span>
        </Button>
      </CardContent>
    </Card>
  );
}
