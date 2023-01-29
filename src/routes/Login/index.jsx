///////////////////////////////////IMPORTS/////////////////////////////////////
import React, { useState } from "react";

// Css //
import "./index.css";

// Components //
import NavbarLR from "../../components/NavbarLR";

// Images //
import login from "../../assets/images/login.svg";
import logo from "../../assets/images/logo.svg";

// Router Dom //
import { Link, useNavigate } from "react-router-dom";

// Icons //
import { HiArrowNarrowLeft } from "react-icons/hi";

// Firebase //
import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { firebaseConfig } from "../../services/configFirebase";

////////////////////////////////////FINAL IMPORTS//////////////////////////////

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const auth = getAuth();

  function handleLogin() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home");
        console.log(user);
      }
    });
    return signInWithEmailAndPassword(auth, email, password);
  }

  return (
    <>
      <NavbarLR />
      <div className="containerLogin">
        <Link className="backFromHome" to="/">
          <HiArrowNarrowLeft />
          Voltar
        </Link>
        <div className="leftCol">
          <img className="logoLogin" alt="logo" src={logo} />
          <h3>Lua Station</h3>
          <p>Comece uma nova aventura!</p>
          <form>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="emailLogin"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Senha</label>
            <input
              type="password"
              name="password"
              id="passwordLogin"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link className="recover-password" to="/recover-password">
              Esqueceu sua senha?
            </Link>
            <button onClick={handleLogin} className="btnLogin">
              Entrar
            </button>
            <p className="registerCall">
              Não tem uma conta?
              <Link className="spanRegisterCall" to="/Register">
                Cadastre-se
              </Link>
            </p>
          </form>
        </div>
        <div className="rightCol">
          <img src={login} className="loginImage" alt="Founder" />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
