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
import { Link } from "react-router-dom";

// Icons //
import { HiArrowNarrowLeft } from "react-icons/hi";

/////////////////////////////////////FINAL IMPORTS/////////////////////////////

const RegisterUser = () => {
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
  const [currentStep, setCurrentStep] = useState(0);
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

  function handleNext(i, e) {
    if (i < 0 || i >= steps.length) return;
    setCurrentStep((prevState) => prevState + 1);
  }

  function handlePrev(i, e) {
    if (i < 0 || i >= steps.length) return;
    setCurrentStep((prevState) => prevState - 1);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("Form sent...", formValues);
  }

  return (
    <>
      <NavbarLR />
      <div className="containerRegisterUser">
        <Link className="back" to="/register">
          <HiArrowNarrowLeft />
          Voltar
        </Link>
        <form className="steps-form" onSubmit={handleSubmit}>
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
                    name="email"
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
                <button className="btnRegisterPage" type="submit">
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
        </form>
      </div>
    </>
  );
};

export default RegisterUser;
