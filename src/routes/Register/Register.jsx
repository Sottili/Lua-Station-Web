import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getDatabase, set, ref } from "firebase/database";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseConfig } from "../../services/configFirebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  const navigate = useNavigate();

  const db = getDatabase(firebaseConfig);

  const SignUp = () => {
    createUserWithEmailAndPassword(auth, email, password);
    navigate("/login");
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      set(ref(db, "users/" + user.uid), {
        email: email,
      });
    } else {
      console.log("no have users logged");
    }
  });

  return (
    <form>
      <div className="inputContainer">
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" onClick={SignUp} className="button">
        Cadastrar
      </button>
    </form>
  );
};

export default Register;
