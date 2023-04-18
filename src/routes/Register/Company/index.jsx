/////////////////////////////////////////IMPORTS///////////////////////////////
import React, { useState } from "react";

// Components //
import NavbarLR from "../../../components/NavbarLR";

// Css //
import "../index.css";

// Router Dom //
import { Link, useNavigate } from "react-router-dom";

// Icons //
import { HiArrowNarrowLeft } from "react-icons/hi";

// Banco de Dados e Criação de Usuario //

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../../services/configFirebase";
import { getDatabase, set, ref } from "firebase/database";

/////////////////////////////////////FINAL IMPORTS/////////////////////////////

const RegisterCompany = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    cpf_cnpj: "",
    password: "",
    confirm_password: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  // CRIANDO USUARIO //

  const db = getDatabase(app);
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    createUserWithEmailAndPassword(
      auth,
      formValues.email,
      formValues.password
    ).then(() => {
      const user = auth.currentUser;
      set(ref(db, "Users/" + user.uid), {
        nome: formValues.name,
        email: formValues.email,
        imgUser:
          "https://firebasestorage.googleapis.com/v0/b/lua-stationnew.appspot.com/o/AstronautNavbarIcon.png?alt=media&token=4dbb2ae0-3d07-4852-ac15-2284453fcab0",
        cpf_cnpj: formValues.cpf_cnpj,
        id: user.uid,
      });
    });
    navigate("/login");
  };

  return (
    <>
      <NavbarLR />
      <div className="containerRegisterCompany">
        <Link className="back" to="/register">
          <HiArrowNarrowLeft />
          Voltar
        </Link>
        <div className="steps-form">
          <h4 className="steps-formTitle">SE ESTABELEÇA NA LS</h4>
          <p className="steps-formSubTitle">Venha consco nessa jornada!</p>
          <div className="fields-container">
            <div className="fields">
              <div className="field">
                <p className="nameInput">Nome</p>
                <input
                  type="text"
                  name="name"
                  className="inputRegister"
                  onChange={handleInputChange}
                  value={formValues.name}
                />
              </div>
              <div className="field">
                <p className="nameInput">Email</p>
                <input
                  type="text"
                  name="email"
                  className="inputRegister"
                  onChange={handleInputChange}
                  value={formValues.email}
                />
              </div>
              <div className="field">
                <p className="nameInput">CNPJ</p>
                <input
                  type="text"
                  name="cpf_cnpj"
                  className="inputRegister"
                  onChange={handleInputChange}
                  value={formValues.cpf_cnpj}
                />
              </div>
              <div className="field">
                <p className="nameInput">Senha</p>
                <input
                  type="password"
                  name="password"
                  className="inputRegister"
                  onChange={handleInputChange}
                  value={formValues.password}
                />
              </div>
              <div className="field">
                <p className="nameInput">Confirme sua senha</p>
                <input
                  type="password"
                  name="confirm_password"
                  className="inputRegister"
                  onChange={handleInputChange}
                  value={formValues.confirm_password}
                />
              </div>
              <div className="field">
                <button onClick={handleSubmit} className="btnRegisterCompany">
                  Cadastrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterCompany;
