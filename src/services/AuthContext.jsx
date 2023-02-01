import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    }
  });

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};
