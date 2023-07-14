/////////////////////////////////////IMPORTS///////////////////////////////////

// React //
import React from "react";

// Css //
import "./index.css";
import "../../global.css";

// Components //
import NavbarHome from "../../components/NavbarHome/NavbarHome";

// Bootstrap //
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// Icons //
import { BsCheckCircleFill } from "react-icons/bs";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";

// Imagens //

// Top //
import AstronautHome from "../../assets/images/astronautHome.svg";

// Services //
import lanceApp from "../../assets/images/lanceApp.svg";
import lanceGame from "../../assets/images/lanceGame.svg";
import renewWebsite from "../../assets/images/renewWebsite.svg";
import videoEditor from "../../assets/images/videoEditor.svg";
import designProfissinal from "../../assets/images/designProfissional.svg";

// Levels Area //

import Podium from "../../assets/images/podiumLevels.png";
import Meteor from "../../assets/images/meteor.svg";
import Moon from "../../assets/images/moon.svg";
import Star from "../../assets/images/star.svg";

// Benefits //

import benefit1 from "../../assets/images/ComeStation1.svg";
import benefit2 from "../../assets/images/ComeStation2.svg";
import benefit3 from "../../assets/images/ComeStation3.svg";

// Who We Are //

import etecImage from "../../assets/images/etecImage.svg";

// Founders //

import imgGui from "../../assets/images/serafim.svg";
import imgNew from "../../assets/images/newana.svg";
import imgMax from "../../assets/images/max.svg";
import imgFe from "../../assets/images/felipe.svg";
import imgJuan from "../../assets/images/juan.svg";
import imgJonas from "../../assets/images/jonas.svg";

// Footer //

import logo from "../../assets/images/logo.svg";

// Final Images //

////////////////////////////////////////FINAL IMPORTS//////////////////////////

const Home = () => {
  return (
    <>
      <div className="container-home">
        <NavbarHome />
        <Container className="contentHome">
          <Row id="home" className="rowTopHome">
            <Col xxl="6" lg="7" id="leftColumnHome">
              <h1 className="titleHome">Welcome to station!</h1>
              <p>
                Freelancers qualificados te esperam aqui
                <br />
                Está pronto para ir atrás dos seus sonhos?
                <br />A Lua Station te leva até lá!
              </p>
              <div className="buttonsHome">
                <Link to="/register" className="btnHomeTop">
                  Publique seu Projeto
                </Link>
                <Link to="/register" className="btnHomeTop">
                  Seja um astronauta
                </Link>
                <Link className="btnSpecial">Baixe nosso App!</Link>
              </div>
            </Col>
            <Col className="colAstronautHome" xxl="6" lg="4">
              <img
                src={AstronautHome}
                className="img-fluid"
                alt="Astronaut Home"
              />
            </Col>
          </Row>
          <Row id="services" className="rowServices">
            <Col xxl={12} xs={12}>
              <h1 className="titleServices">
                <span>Serviços</span> Freelance
              </h1>
            </Col>
            <Col className="servicesCards" xxl={3} xs="12">
              <h3>
                RENOVE SEU
                <br />
                WEBSITE
              </h3>
              <img
                className="img-fluid"
                alt="RENOVE SEU WEBSITE"
                src={renewWebsite}
              />
            </Col>
            <Col className="servicesCards" xxl={3} xs="12">
              <h3>
                DESIGN
                <br />
                PROFISSIONAL
              </h3>
              <img
                className="img-fluid"
                alt="DESIGN PROFISSIONAL"
                src={designProfissinal}
              />
            </Col>
            <Col className="servicesCards" xxl={3} xs="12">
              <h3>
                EDIÇÃO DE
                <br />
                VIDEO
              </h3>
              <img
                className="img-fluid"
                alt="EDIÇÃO DE VIDEO"
                src={videoEditor}
              />
            </Col>
            <Col className="servicesCards" xxl={3} xs="12">
              <h3>
                LANCE SEU
                <br />
                GAME
              </h3>
              <img className="img-fluid" alt="LANCE SEU GAME" src={lanceGame} />
            </Col>
            <Col className="servicesCards" xxl={3} xs="12">
              <h3>
                LANCE SEU
                <br />
                APP
              </h3>
              <img className="img-fluid" alt="LANCE SEU APP" src={lanceApp} />
            </Col>
          </Row>
          <Row id="howIt" className="rowLevels">
            <Col xxl={12} xs={12}>
              <h3 className="titleLevels">Níveis de Serviços</h3>
              <h4 className="subTitleLevels">
                Cada freela é medido por seu prazo de entrega!
              </h4>
            </Col>
            <Col xxl={8} lg={8} xs={12}>
              <img className="img-fluid" src={Podium} alt="Podium Levels" />
            </Col>
            <Col className="contentLevels" xxl={4} lg={4} xs={12}>
              <div className="levelsHome">
                <img className="img-fluid" src={Moon} alt="Lua Dificulty" />
                <p>Prazo maior (15-30 dias)</p>
              </div>
              <div className="levelsHome">
                <img className="img-fluid" src={Star} alt="Star Dificulty" />
                <p>Prazo médio (6-14 dias)</p>
              </div>
              <div className="levelsHome">
                <img
                  className="img-fluid"
                  src={Meteor}
                  alt="Meteor Dificulty"
                />
                <p>Prazo menor (1-7 dias)</p>
              </div>
            </Col>
          </Row>
          <Row className="rowHowItWorks">
            <Col xxl={12} xs={12}>
              <h3 className="titleHIW">
                Como a <span>LS</span> funciona (Colaborador) ?
              </h3>
            </Col>
            <Col className="cardHIW" xxl={3} xs="12">
              <div className="circleHIW">
                <p>1</p>
              </div>
              <h4>PUBLICAÇÃO</h4>
              <h6>
                Veja as publicações de ofertas
                <br /> de freelancers disponiveis
              </h6>
            </Col>
            <Col className="cardHIW" xxl={3} xs="12">
              <div className="circleHIW">
                <p>2</p>
              </div>
              <h4>PROCURE</h4>
              <h6>
                Procure o serviço que esteja
                <br /> dentro so seu perfil profissional.
              </h6>
            </Col>
            <Col className="cardHIW" xxl={3} xs="12">
              <div className="circleHIW">
                <p>3</p>
              </div>
              <h4>CONTATO</h4>
              <h6>
                Contate o empregador para
                <br /> receber mais informações do
                <br /> serviço.
              </h6>
            </Col>
            <Col xxl={12} xs={12}>
              <h3 className="titleHIW">
                Como a <span>LS</span> funciona (Empregador) ?
              </h3>
            </Col>
            <Col className="cardHIW" xxl={3} xs="12">
              <div className="circleHIW">
                <p>1</p>
              </div>
              <h4>PUBLICAÇÃO</h4>
              <h6>
                Publique o serviço que está
                <br /> precisando.
              </h6>
            </Col>
            <Col className="cardHIW" xxl={3} xs="12">
              <div className="circleHIW">
                <p>2</p>
              </div>
              <h4>PROCURE</h4>
              <h6>
                Procure o perfil do profissional
                <br /> que seja melhor para seu serviço.
              </h6>
            </Col>
            <Col className="cardHIW" xxl={3} xs="12">
              <div className="circleHIW">
                <p>3</p>
              </div>
              <h4>CONTATE</h4>
              <h6>
                Contate o profissional e ofereça
                <br /> mais informações sobre o serviço.
              </h6>
            </Col>
          </Row>
          <Row id="benefits" className="rowBenefits">
            <Col xxl={12} xs={12}>
              <h3 className="titleBenefits">
                Venha para nossa estação espacial!
              </h3>
            </Col>
            <Col className="cardBenefits" xxl={3} xs="12">
              <div className="circleBNF">
                <p>1</p>
              </div>
              <h4>
                PUBLICAÇÃO
                <BsCheckCircleFill
                  style={{
                    marginTop: "-5px",
                    marginLeft: "5px",
                    width: "20px",
                    verticalAlign: "middle",
                    color: "#22C55E",
                  }}
                />
              </h4>
              <h6>
                Veja as publicações de ofertas de
                <br /> freelancers disponiveis
              </h6>
              <img className="img-fluid" src={benefit1} alt="Benefit 1" />
            </Col>
            <Col className="cardBenefits" xxl={3} xs="12">
              <div className="circleBNF">
                <p>2</p>
              </div>
              <h4>
                PROCURE
                <BsCheckCircleFill
                  style={{
                    marginTop: "-5px",
                    marginLeft: "5px",
                    width: "20px",
                    verticalAlign: "middle",
                    color: "#22C55E",
                  }}
                />
              </h4>
              <h6>
                Procure o serviço que esteja dentro
                <br /> do seu perfil profissional.
              </h6>
              <img className="img-fluid" src={benefit2} alt="Benefit 1" />
            </Col>
            <Col className="cardBenefits" xxl={3} xs="12">
              <div className="circleBNF">
                <p>3</p>
              </div>
              <h4>
                CONTATO
                <BsCheckCircleFill
                  style={{
                    marginTop: "-5px",
                    marginLeft: "5px",
                    width: "20px",
                    verticalAlign: "middle",
                    color: "#22C55E",
                  }}
                />
              </h4>
              <h6>
                Contate o empregador para
                <br /> receber mais informações do
                <br /> serviço.
              </h6>
              <img className="img-fluid" src={benefit3} alt="Benefit 1" />
            </Col>
          </Row>
          <Row id="WWA" className="rowWWA">
            <Col className="colLeftWWA" xxl={5} lg={5} xs={12}>
              <h4>QUEM SOMOS?</h4>
              <p>
                Somos alunos da Etec Abdias do Nascimento e desenvolvemos esse
                site para nosso TCC (Trabalho de Conclusão de Curso) e
                atualmente, algumas das informações oferecidas são fictícias,
                porém queremos manter continuídade no projeto.
              </p>
            </Col>
            <Col className="colRightWWA" xxl={7} lg={7} xs={12}>
              <img className="img-fluid" src={etecImage} alt="Imagem Etec" />
            </Col>
          </Row>
          <Row id="founders" className="rowFounders">
            <Col className="titleFounders" xxl={12} xs={12}>
              <h3>Conheça os fundadores do projeto</h3>
              <h6>
                Altamente profissionais e capazes de administrar seus negócios
                em todos os canais digitais.
              </h6>
            </Col>
            <Col xxl={4} xs={6} lg={4} className="cardFounders">
              <img src={imgGui} alt="Guilherme Serafim" />
              <h4>Guilherme Serafim</h4>
              <h6>Administrador</h6>
              <div className="iconsSocial">
                <FaFacebookF style={{ margin: "0 5px", color: "#596679" }} />
                <FaTwitter style={{ margin: "0 5px", color: "#596679" }} />
                <FaInstagram style={{ margin: "0 5px", color: "#596679" }} />
              </div>
            </Col>
            <Col xxl={4} xs={6} lg={4} className="cardFounders">
              <img src={imgNew} alt="Newana Vitória" />
              <h4>Newana Vitória</h4>
              <h6>Analista</h6>
              <div className="iconsSocial">
                <FaFacebookF style={{ margin: "0 5px", color: "#596679" }} />
                <FaTwitter style={{ margin: "0 5px", color: "#596679" }} />
                <FaInstagram style={{ margin: "0 5px", color: "#596679" }} />
              </div>
            </Col>
            <Col xxl={4} xs={6} lg={4} className="cardFounders">
              <img src={imgMax} alt="Maxsuel Souza" />
              <h4>Maxsuel Souza</h4>
              <h6>Designer</h6>
              <div className="iconsSocial">
                <FaFacebookF style={{ margin: "0 5px", color: "#596679" }} />
                <FaTwitter style={{ margin: "0 5px", color: "#596679" }} />
                <FaInstagram style={{ margin: "0 5px", color: "#596679" }} />
              </div>
            </Col>
            <Col xxl={4} xs={6} lg={4} className="cardFounders">
              <img src={imgFe} alt="Filipe Sottili" />
              <h4>Filipe Sottili</h4>
              <h6>Desenvolvedor</h6>
              <div className="iconsSocial">
                <FaFacebookF style={{ margin: "0 5px", color: "#596679" }} />
                <FaTwitter style={{ margin: "0 5px", color: "#596679" }} />
                <FaInstagram style={{ margin: "0 5px", color: "#596679" }} />
              </div>
            </Col>
            <Col xxl={4} xs={6} lg={4} className="cardFounders">
              <img src={imgJuan} alt="Juan Pablo" />
              <h4>Juan Pablo</h4>
              <h6>Desenvolvedor</h6>
              <div className="iconsSocial">
                <FaFacebookF style={{ margin: "0 5px", color: "#596679" }} />
                <FaTwitter style={{ margin: "0 5px", color: "#596679" }} />
                <FaInstagram style={{ margin: "0 5px", color: "#596679" }} />
              </div>
            </Col>
            <Col xxl={4} xs={6} lg={4} className="cardFounders">
              <img src={imgJonas} alt="Jonas Henrique" />
              <h4>Jonas Henrique</h4>
              <h6>Designer</h6>
              <div className="iconsSocial">
                <FaFacebookF style={{ margin: "0 5px", color: "#596679" }} />
                <FaTwitter style={{ margin: "0 5px", color: "#596679" }} />
                <FaInstagram style={{ margin: "0 5px", color: "#596679" }} />
              </div>
            </Col>
          </Row>
          <Row className="rowFooter">
            <Col className="containerFooterHome" xxl={12} xl={12} lg={12}>
              <img className="img-fluid" src={logo} alt="logo" />
              <p>Precisa de ajuda?</p>
              <p>Entre em contato conosco</p>
              <p>Email: Luastation@gmail.com</p>
              <p>
                <BiCopyright />
                2023 LS. Todos os direitos reservados.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
