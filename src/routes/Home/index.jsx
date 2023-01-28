/////////////////////////////////////IMPORTS///////////////////////////////////

//React//
import React from "react";

//Css
import "./index.css";
import "../../global.css";

//Components//
import NavbarHome from "../../components/NavbarHome/NavbarHome";

//Bootstrap//
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

//Imagens//
import AstronautHome from "../../assets/images/astronautHome.svg";
import lanceApp from "../../assets/images/lanceApp.svg";
import lanceGame from "../../assets/images/lanceGame.svg";
import renewWebsite from "../../assets/images/renewWebsite.svg";
import videoEditor from "../../assets/images/videoEditor.svg";
import designProfissinal from "../../assets/images/designProfissional.svg";
import Podium from "../../assets/images/podiumLevels.svg";
import Meteor from "../../assets/images/meteor.svg";
import Moon from "../../assets/images/moon.svg";
import Star from "../../assets/images/star.svg";

////////////////////////////////////////FINAL IMPORTS//////////////////////////

const Home = () => {
  return (
    <>
      <div className="container-home">
        <NavbarHome />
        <Container className="contentHome">
          <Row className="rowTopHome">
            <Col xxl="6" lg="7" id="leftColumnHome">
              <h1 className="titleHome">Welcome to station!</h1>
              <p>
                Freelancers qualificados te esperam aqui
                <br />
                Está pronto para ir atrás dos seus sonhos?
                <br />A Lua Station te leva até lá!
              </p>
              <div className="buttonsHome">
                <Link className="btnHomeTop">Publique seu Projeto</Link>
                <Link className="btnHomeTop">Seja um astronauta</Link>
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
          <Row className="rowServices">
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
              <img className="img-fluid" src={renewWebsite} />
            </Col>
            <Col className="servicesCards" xxl={3} xs="12">
              <h3>
                DESIGN
                <br />
                PROFISSIONAL
              </h3>
              <img className="img-fluid" src={designProfissinal} />
            </Col>
            <Col className="servicesCards" xxl={3} xs="12">
              <h3>
                EDIÇÃO DE
                <br />
                VIDEO
              </h3>
              <img className="img-fluid" src={videoEditor} />
            </Col>
            <Col className="servicesCards" xxl={3} xs="12">
              <h3>
                LANCE SEU
                <br />
                GAME
              </h3>
              <img className="img-fluid" src={lanceGame} />
            </Col>
            <Col className="servicesCards" xxl={3} xs="12">
              <h3>
                LANCE SEU
                <br />
                APP
              </h3>
              <img className="img-fluid" src={lanceApp} />
            </Col>
          </Row>
          <Row className="rowLevels">
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
        </Container>
      </div>
    </>
  );
};

export default Home;
