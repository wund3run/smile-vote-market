import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  company: string;
  clinic?: string;
  email: string;
  type: 'clinic' | 'supplier' | 'vendor';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
    // Store in localStorage for persistence
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Initialize user from localStorage on app load
  const initializeAuth = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  };

  // Call this on app initialization
  useEffect(() => {
    initializeAuth();
  }, []);

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Demo users for testing different header types
export const demoUsers = {
  clinic: {
    id: '1',
    name: 'Dr. Sarah Johnson',
    company: 'Downtown Dental Clinic',
    clinic: 'Downtown Dental Clinic',
    email: 'dr.johnson@downtowndental.com',
    type: 'clinic' as const,
    avatar: undefined,
  },
  supplier: {
    id: '2',
    name: 'Maria Rodriguez',
    company: 'DentalTech Solutions',
    email: 'maria@dentaltech.com',
    type: 'supplier' as const,
    avatar: undefined,
  },
  vendor: {
    id: '3',
    name: 'Dr. James Mitchell',
    company: 'Mitchell Services Group',
    email: 'james@mitchellservices.com',
    type: 'vendor' as const,
    avatar: undefined,
  },
};
