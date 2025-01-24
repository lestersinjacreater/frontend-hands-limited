import { useState } from 'react';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (credentials: { email: string; password: string }) => {
    // Here you would typically make an API call to validate credentials
    console.log('Logging in with credentials:', credentials);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
}