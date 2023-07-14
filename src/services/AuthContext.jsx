import { getAuth, onAuthStateChanged } from "firebase/auth";

import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
