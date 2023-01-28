////////////////////////////////////////IMPORTS////////////////////////////////

//Css
import "./index.css";
import "../../global.css";

//Bootstrap React//
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

//Imagens//

import logo from "../../assets/images/logo.svg";

//React Router Dom

import { Link } from "react-router-dom";

///////////////////////////////////////FINAL IMPORTS //////////////////////////

function NavbarHome() {
  return (
    <>
      <Navbar expand="lg">
        <Container id="special-caseNavHome">
          <Navbar.Brand href="#home">
            <div className="navbarBrand1">
              <img
                src={logo}
                className="logo-NavbarBrand"
                alt="Logo Lua Station"
              />
              <div className="navbarBrand2">
                <p>Lua</p>
                <p>Station</p>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navHome-custom">
              <Nav.Link className="link-navbarHome" href="#home">
                Inicio
              </Nav.Link>
              <Nav.Link className="link-navbarHome" href="#features">
                Serviços
              </Nav.Link>
              <Nav.Link className="link-navbarHome" href="#pricing">
                Como funciona?
              </Nav.Link>
              <Nav.Link className="link-navbarHome" href="#pricing">
                Beneficios?
              </Nav.Link>
              <Nav.Link className="link-navbarHome" href="#pricing">
                Quem somos?
              </Nav.Link>
              <Nav.Link className="link-navbarHome" href="#pricing">
                Time
              </Nav.Link>
              <Nav.Link className="link-navbarHome" href="#pricing">
                <Link className="btn-navbar-login">Entrar</Link>
              </Nav.Link>
              <Nav.Link className="link-navbarHome" href="#pricing">
                <Link className="btn-navbar-register">Cadastrar-se</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarHome;
