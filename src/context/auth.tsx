import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // In a real app, this would come from your auth system
  const [user, setUser] = useState(null);

  // Simulated login function
  const login = () => {
    // Simulate login logic
    setUser({ id: "1", name: "User" });
  };

  // Simulated logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
