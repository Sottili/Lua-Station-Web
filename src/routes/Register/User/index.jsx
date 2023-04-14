/////////////////////////////////////////IMPORTS///////////////////////////////
import React, { useState } from "react";

// Components //
import NavbarLR from "../../../components/NavbarLR";

// Css //
import "../index.css";

// Images //
import lowChoice from "../../../assets/images/lowMoney.svg";
import lgbtChoice from "../../../assets/images/lgbtqia.svg";
import blackChoice from "../../../assets/images/black.svg";
import womenSymbol from "../../../assets/images/womensymbol.svg";

// Router Dom //
import { Link, useNavigate } from "react-router-dom";

// Icons //
import { HiArrowNarrowLeft } from "react-icons/hi";

// Banco de Dados e Criação de Usuario //

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../../services/configFirebase";
import { getDatabase, set, ref } from "firebase/database";

/////////////////////////////////////FINAL IMPORTS/////////////////////////////

const RegisterUser = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    nameSocial: "",
    email: "",
    date: "",
    cpf: "",
    password: "",
    confirm_password: "",
    checkBox: {
      lowMoney: "",
      lgbt: "",
      women: "",
      black: "",
    },
  });

  // Função pra setar o target no formulario //

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  // Steps do formulario //
  const steps = [
    {
      id: "PERSONAL",
    },
    {
      id: "CLASSE",
    },
    {
      id: "PASSWORD",
    },
  ];

  // Função de steps do formulario //
  const [currentStep, setCurrentStep] = useState(0);

  function handleNext(i, e) {
    if (i < 0 || i >= steps.length) return;
    setCurrentStep((prevState) => prevState + 1);
  }

  function handlePrev(i, e) {
    if (i < 0 || i >= steps.length) return;
    setCurrentStep((prevState) => prevState - 1);
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
        nomeSocial: formValues.nameSocial,
        email: formValues.email,
        cpf: formValues.cpf,
        date: formValues.date,
        id: user.uid,
      });
    });
    navigate("/home");
  };

  return (
    <>
      <NavbarLR />
      <div className="containerRegisterUser">
        <Link className="back" to="/register">
          <HiArrowNarrowLeft />
          Voltar
        </Link>
        <div className="steps-form">
          <h4 className="steps-formTitle">EMBARQUE EM NOSSO FOGUETE</h4>
          <p className="steps-formSubTitle">Venha consco nessa jornada!</p>
          <div className="fields-container">
            {steps[currentStep].id === "PERSONAL" && (
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
                  <p className="nameInput">Nome Social</p>
                  <input
                    type="text"
                    name="nameSocial"
                    className="inputRegister"
                    onChange={handleInputChange}
                    value={formValues.nameSocial}
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
                  <p className="nameInput">Data de Nascimento</p>
                  <input
                    type="date"
                    name="date"
                    className="inputRegister"
                    onChange={handleInputChange}
                    value={formValues.date}
                  />
                </div>
                <div className="field">
                  <p className="nameInput">CPF</p>
                  <input
                    type="text"
                    name="cpf"
                    className="inputRegister"
                    onChange={handleInputChange}
                    value={formValues.cpf}
                  />
                </div>
              </div>
            )}
            {steps[currentStep].id === "CLASSE" && (
              <div>
                <div className="fieldsGroups">
                  <div className="fieldGroup">
                    <input
                      type="checkbox"
                      name="lowMoney"
                      onChange={handleInputChange}
                      value={formValues.checkBox.lowMoney}
                      id="customCheckboxProfile"
                    />
                    <img
                      src={lowChoice}
                      className="imageGroupRegister"
                      alt="Baixa renda"
                    />
                    <p className="titleGroup">Baixa Renda</p>
                  </div>
                  <hr />
                  <div className="fieldGroup">
                    <input
                      type="checkbox"
                      name="lgbt"
                      onChange={handleInputChange}
                      value={formValues.checkBox.lgbt}
                      id="customCheckboxProfile"
                    />

                    <img
                      src={lgbtChoice}
                      className="imageGroupRegister"
                      alt="LBGTQIA+"
                    />
                    <p className="titleGroup">LGBTQIA+</p>
                  </div>
                  <hr />
                  <div className="fieldGroup">
                    <input
                      type="checkbox"
                      name="black"
                      onChange={handleInputChange}
                      value={formValues.checkBox.black}
                      id="customCheckboxProfile"
                    />

                    <img
                      src={blackChoice}
                      className="imageGroupRegister"
                      alt="Negro(a)"
                    />
                    <p className="titleGroup">Negro(a)</p>
                  </div>
                  <hr />
                  <div className="fieldGroup">
                    <input
                      type="checkbox"
                      name="women"
                      onChange={handleInputChange}
                      value={formValues.checkBox.women}
                      id="customCheckboxProfile"
                    />

                    <img
                      src={womenSymbol}
                      className="imageGroupRegister"
                      alt="Mulher"
                    />
                    <p className="titleGroup">Mulher</p>
                  </div>
                </div>
              </div>
            )}
            {steps[currentStep].id === "PASSWORD" && (
              <div className="fields">
                <div>
                  <p className="nameInput">Senha</p>
                  <input
                    type="password"
                    placeholder="Digite sua senha"
                    className="inputRegister"
                    name="password"
                    onChange={handleInputChange}
                    value={formValues.password}
                  />
                </div>
                <div className="field">
                  <p className="nameInput">Confirme sua senha</p>
                  <input
                    type="password"
                    placeholder="Confirme sua senha"
                    name="confirm_password"
                    className="inputRegister"
                    onChange={handleInputChange}
                    value={formValues.confirm_password}
                  />
                </div>
              </div>
            )}
            {currentStep < steps.length - 1 && (
              <>
                <div>
                  <button
                    className="btnRegisterPage"
                    type="button"
                    onClick={handleNext}
                  >
                    Proximo
                  </button>
                </div>
              </>
            )}
            {currentStep === steps.length - 1 && (
              <div>
                <button className="btnRegisterPage" onClick={handleSubmit}>
                  Finalizar
                </button>
              </div>
            )}
            {currentStep !== 0 && (
              <>
                <div>
                  <button
                    className="btnRegisterPage"
                    type="button"
                    onClick={handlePrev}
                  >
                    Voltar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
