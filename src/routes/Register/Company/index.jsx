/////////////////////////////////////////IMPORTS///////////////////////////////
import React, { useState } from "react";

// Components //
import NavbarLR from "../../../components/NavbarLR";

// Css //
import "../index.css";

// Router Dom //
import { Link } from "react-router-dom";

// Icons //
import { HiArrowNarrowLeft } from "react-icons/hi";

/////////////////////////////////////FINAL IMPORTS/////////////////////////////

const RegisterCompany = () => {
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

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <>
      <NavbarLR />
      <div className="containerRegisterCompany">
        <Link className="back" to="/register">
          <HiArrowNarrowLeft />
          Voltar
        </Link>
        <form className="steps-form">
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
                  value={formValues.nameSocial}
                />
              </div>
              <div className="field">
                <p className="nameInput">CNPJ</p>
                <input
                  type="text"
                  name="cpnj"
                  className="inputRegister"
                  onChange={handleInputChange}
                  value={formValues.email}
                />
              </div>
              <div className="field">
                <p className="nameInput">Senha</p>
                <input
                  type="text"
                  name="cpf"
                  className="inputRegister"
                  onChange={handleInputChange}
                  value={formValues.cpf}
                />
              </div>
              <div className="field">
                <p className="nameInput">Confirme sua senha</p>
                <input
                  type="text"
                  name="cpf"
                  className="inputRegister"
                  onChange={handleInputChange}
                  value={formValues.cpf}
                />
              </div>
              <div className="field">
                <button type="submit" className="btnRegisterCompany">
                  Cadastrar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterCompany;
