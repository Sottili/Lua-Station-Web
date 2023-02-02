import React from "react";

import "./TypeAccount.css";

import { Container } from "react-bootstrap";

import NavbarLR from "../../components/NavbarLR";

import { Link } from "react-router-dom";

import { HiArrowNarrowLeft } from "react-icons/hi";

const Register = () => {
  return (
    <>
      <NavbarLR />
      <Container className="containerTypeAccount" fluid>
        <Link className="back" to="/">
          <HiArrowNarrowLeft />
          Voltar
        </Link>
        <h1 className="titleTypeAccount">TIPO DE CONTA</h1>
        <Link className="btnTypeAccount" to="/register/user-register">
          Freelancer
        </Link>
        <h4 className="subTitleTypeAccount">OU</h4>
        <Link className="btnTypeAccount" to="/register/company-register">
          Empresa
        </Link>
      </Container>
    </>
  );
};

export default Register;
