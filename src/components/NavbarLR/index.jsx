////////////////////////////////////////IMPORTS////////////////////////////////

//Css
import "./index.css";
import "../../global.css";

//Bootstrap React//
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

//Imagens//

import logo from "../../assets/images/logo.svg";

///////////////////////////////////////FINAL IMPORTS //////////////////////////

function NavbarLR() {
  return (
    <>
      <Navbar fixed="top" className="navbarLR" expand="lg">
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
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarLR;
