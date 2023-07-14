////////////////////////////////////////IMPORTS////////////////////////////////

// Firebase //
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

//Css
import "../../global.css";
import "./index.css";

//Bootstrap React//
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

//Imagens//

import logo from "../../assets/images/logo.svg";
import perfilImg from "../../assets/images/AstronautNavbarIcon.png";

//React Router Dom

import { Link } from "react-router-dom";

// Icons //
import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineHeart, AiOutlineBell } from "react-icons/ai";
import { BsBoxArrowInRight } from "react-icons/bs";
import { useEffect, useState } from "react";

///////////////////////////////////////FINAL IMPORTS //////////////////////////

function NavbarPrivate() {
  // Sign Out //
  const auth = getAuth();

  const handleSignOut = () => {
    signOut(auth);
  };

  const [userId, setUserId] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const id = user.uid;
      setUserId(id);
    });
  }, [auth, setUserId]);

  return (
    <>
      <Navbar className="navbarHomePrivate" fixed="top" expand="lg">
        <Container id="special-caseNavHome">
          <Navbar.Brand className="mr-auto" href="#home">
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
            <Nav className="navHomePrivate-custom">
              <Nav.Link className="link-navbarHome">
                <Link className="link-navbarHomePrivate" to="/freelancers">
                  Freelancers
                </Link>
              </Nav.Link>
              <Nav.Link className="link-navbarHome">
                <Link className="link-navbarHomePrivate" to="/servicos">
                  Serviços
                </Link>
              </Nav.Link>
              <Nav.Link className="link-navbarHome">
                <Link className="link-navbarHomePrivate" to="/meus-freelas">
                  Meus Freelas
                </Link>
              </Nav.Link>
            </Nav>
            <Nav className="navHomePrivate-custom2">
              <Nav.Link>
                <Link className="link-navbarHomePrivate" to="/criar-servico">
                  <MdOutlineLibraryAdd className="icons-navbarPrivate" />{" "}
                  <p className="mobileTextNav">Adicione um Projeto</p>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="link-navbarHomePrivate"
                  to={`/favoritos/${userId}`}
                >
                  <AiOutlineHeart className="icons-navbarPrivate" />{" "}
                  <p className="mobileTextNav">Favoritos</p>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="link-navbarHomePrivate" to="/notificacoes">
                  <AiOutlineBell className="icons-navbarPrivate" />{" "}
                  <p className="mobileTextNav">Notificações</p>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="link-navbarHomePrivate"
                  to={`/meu-perfil/${userId}`}
                >
                  <img
                    src={perfilImg}
                    alt="Foto do usuario"
                    style={{ width: "38px" }}
                  />
                  <p className="mobileTextNav">Perfil</p>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="link-navbarHomePrivateSignOut"
                  onClick={handleSignOut}
                >
                  <BsBoxArrowInRight
                    style={{ marginTop: "6px", fontSize: "18px" }}
                  />
                  <p style={{ marginTop: "6px", marginLeft: "5px" }}>Sair</p>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarPrivate;
