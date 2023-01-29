import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

const HomeUsers = () => {
  const auth = getAuth();

  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      return user;
    } else {
      navigate("/");
    }
  });

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <>
      <h1>Hi user</h1>
      <button onClick={handleSignOut}>deslogar</button>
    </>
  );
};

export default HomeUsers;
