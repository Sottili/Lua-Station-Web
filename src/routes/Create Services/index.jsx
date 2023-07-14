// Importações do React //
import React, { useState } from "react";

// Router Dom //
import { Link, useNavigate } from "react-router-dom";

// Css //

import "./index.css";

//Importações do Firebase //
import { getAuth } from "firebase/auth";
import { ref, getDatabase, push, child, update, set } from "firebase/database";
import { app } from "../../services/configFirebase";

// Components //
import NavbarPrivate from "../../components/NavbarPrivate";

// Icons //
import { HiArrowNarrowLeft } from "react-icons/hi";

// Images //
import creditImage from "../../assets/images/creditImage.svg";
import pixImage from "../../assets/images/pixImage.svg";
import debitImage from "../../assets/images/debitImage.svg";

// Bootstrap //

import { Alert } from "react-bootstrap";

const CreateServices = () => {
  // Conexão firebase e getAuth //
  const db = getDatabase(app);
  const auth = getAuth();

  // Setando os dados do Formulario //
  const [optionsDeadLines, setOptionsDeadLines] = useState("");
  const [optionsPlatform, setOptionsPlatform] = useState("");
  const [paymentOption, setPaymentOption] = useState("");

  const [formValues, setFormValues] = useState({
    nameProject: "",
    nameAuthor: "",
    emailAuthor: "",
    descCompany: "",
    descProject: "",
    price: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  // Função do Post //
  function handlePost() {
    // Gerando uma Key aleatória pro post
    const newPostKey = push(child(ref(db), "posts")).key;

    // Setando o post na pasta do usuario
    update(
      ref(db, `/Users/${auth.currentUser.uid}/Meus Projetos/` + newPostKey),
      {
        idProject: newPostKey,
        nameProject: formValues.nameProject,
        emailAuthor: formValues.emailAuthor,
        nameAuthor: formValues.nameAuthor,
        descCompany: formValues.descCompany,
        descProject: formValues.descProject,
        price: formValues.price,
        deadline: optionsDeadLines,
        platform: optionsPlatform,
        payment: paymentOption,
      }
    );
    // Setando o post no Services
    set(ref(db, "Services/" + newPostKey), {
      idProject: newPostKey,
      author: auth.currentUser.uid,
      emailAuthor: formValues.emailAuthor,
      nameAuthor: formValues.nameAuthor,
      nameProject: formValues.nameProject,
      descCompany: formValues.descCompany,
      descProject: formValues.descProject,
      price: formValues.price,
      deadline: optionsDeadLines,
      platform: optionsPlatform,
      payment: paymentOption,
    });

    setTimeout(() => {
      navigate("/home");
    }, 5000);
    setMessageSuccess("Seu projeto foi criado com sucesso!");
  }

  // Message //

  const [messageSuccess, setMessageSuccess] = useState("");

  // Navegação //

  const navigate = useNavigate();
  function handlePrevNavigate() {
    navigate(-1);
  }

  // Steps do formulario //
  const steps = [
    {
      id: "PROJECT",
    },
    {
      id: "APP",
    },
    {
      id: "METHOD",
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

  return (
    <>
      <>
        <NavbarPrivate />
        <div className="containerCreateService">
          <Alert className="alertSuccessService">
            <Alert.Heading>{messageSuccess}</Alert.Heading>
          </Alert>
          <Link className="back" onClick={handlePrevNavigate}>
            <HiArrowNarrowLeft />
            Voltar
          </Link>
          <div className="steps-form">
            <div className="fields-container">
              {steps[currentStep].id === "PROJECT" && (
                <div className="fields">
                  <h4 className="steps-formTitle" style={{ margin: "20px" }}>
                    Crie seu Projeto:
                  </h4>
                  <div className="field">
                    <p className="nameInput">Nome do projeto</p>
                    <input
                      type="text"
                      name="nameProject"
                      placeholder="Ex: App de Padaria (max 22 caracteres)"
                      className="inputRegister"
                      onChange={handleInputChange}
                      maxLength="22"
                      value={formValues.nameProject}
                    />
                  </div>
                  <div className="field">
                    <p className="nameInput">Seu Nome:</p>
                    <input
                      type="text"
                      name="nameAuthor"
                      className="inputRegister"
                      onChange={handleInputChange}
                      value={formValues.nameAuthor}
                    />
                  </div>
                  <div className="field">
                    <p className="nameInput">Email para contato:</p>
                    <input
                      type="text"
                      name="emailAuthor"
                      className="inputRegister"
                      onChange={handleInputChange}
                      value={formValues.emailAuthor}
                    />
                  </div>
                  <div className="field">
                    <p className="nameInput">Descrição da empresa:</p>
                    <textarea
                      type="text"
                      name="descCompany"
                      rows="6"
                      className="inputRegister"
                      onChange={handleInputChange}
                      value={formValues.descCompany}
                    />
                  </div>
                </div>
              )}
              {steps[currentStep].id === "APP" && (
                <div className="fields">
                  <h4 className="steps-formTitle" style={{ margin: "20px" }}>
                    {formValues.nameProject}
                  </h4>
                  <div className="field" style={{ width: "100%" }}>
                    <p className="nameInput">Prazo</p>
                    <select
                      style={{ width: "300px" }}
                      id="deadlines"
                      onChange={(e) => {
                        const selectOptionDeadline = e.target.value;
                        setOptionsDeadLines(selectOptionDeadline);
                      }}
                    >
                      <option selected disabled hidden>
                        Selecione o prazo
                      </option>
                      <option value="https://firebasestorage.googleapis.com/v0/b/lua-stationnew.appspot.com/o/meteor.svg?alt=media&token=ff27b91e-3adf-43b3-af7d-9c3294230d5e">
                        1-3 Dias
                      </option>
                      <option value="https://firebasestorage.googleapis.com/v0/b/lua-stationnew.appspot.com/o/star.svg?alt=media&token=067650f5-b83a-4a53-9717-73cc023e6cd0">
                        7-14 Dias
                      </option>
                      <option value="https://firebasestorage.googleapis.com/v0/b/lua-stationnew.appspot.com/o/moon.svg?alt=media&token=bdaa7bfc-8edc-4469-bad6-5aaa2db53dfd">
                        14-30 Dias
                      </option>
                    </select>
                  </div>
                  <div className="field">
                    <p className="nameInput">Descrição do Projeto</p>
                    <textarea
                      type="text"
                      name="descProject"
                      placeholder="Maximo de 245 caracteres"
                      maxLength="245"
                      rows="6"
                      className="inputRegister"
                      onChange={handleInputChange}
                      value={formValues.descProject}
                    />
                  </div>
                  <div className="field">
                    <p className="nameInput">Preço</p>
                    <input
                      type="text"
                      name="price"
                      placeholder="0,00"
                      className="inputRegister"
                      onChange={handleInputChange}
                      value={formValues.price}
                    />
                  </div>
                  <div className="field" style={{ width: "100%" }}>
                    <p className="nameInput">Plataforma</p>
                    <select
                      style={{ width: "300px" }}
                      id="deadlines"
                      onChange={(e) => {
                        const selectOptionsPlatform = e.target.value;
                        setOptionsPlatform(selectOptionsPlatform);
                      }}
                    >
                      <option value="" selected disabled hidden>
                        Selecione a plataforma
                      </option>
                      <option value="Web">Web</option>
                      <option value="Mobile">Mobile</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>
              )}
              {steps[currentStep].id === "METHOD" && (
                <div className="fields">
                  <h4 className="steps-formTitle" style={{ margin: "20px" }}>
                    Pagamento
                  </h4>
                  <div className="fieldsGroups">
                    <div className="fieldsGroup" style={{ margin: "10px 0" }}>
                      <input
                        type="radio"
                        id="credit"
                        name="paymentOption"
                        value="Credito"
                        onChange={(e) => setPaymentOption(e.target.value)}
                      />
                      <img
                        src={creditImage}
                        style={{ width: "35px", margin: "0 10px" }}
                        alt="Opção de Crédito"
                      />
                      <label for="html" className="titleGroup">
                        Cartão de Crédito
                      </label>
                    </div>
                    <div className="fieldsGroup" style={{ margin: "10px 0" }}>
                      <input
                        type="radio"
                        id="debit"
                        name="paymentOption"
                        value="Debito"
                        onChange={(e) => setPaymentOption(e.target.value)}
                      />
                      <img
                        src={debitImage}
                        style={{ width: "35px", margin: "0 10px" }}
                        alt="Opção de Débito"
                      />
                      <label for="html" className="titleGroup">
                        Cartão de Débito
                      </label>
                    </div>
                    <div className="fieldsGroup" style={{ margin: "10px 0" }}>
                      <input
                        type="radio"
                        id="pix"
                        name="paymentOption"
                        value="Pix"
                        onChange={(e) => setPaymentOption(e.target.value)}
                      />
                      <img
                        src={pixImage}
                        alt="Opção de Pix"
                        style={{ width: "35px", margin: "0 10px" }}
                      />
                      <label for="javascript" className="titleGroup">
                        Pix
                      </label>
                    </div>
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
                  <button className="btnRegisterPage" onClick={handlePost}>
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
    </>
  );
};

export default CreateServices;
