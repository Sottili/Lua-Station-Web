// React //
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Components //
import NavbarPrivate from "../../components/NavbarPrivate";

// Firebase //
import { getDatabase, onValue, ref } from "firebase/database";
import { app } from "../../services/configFirebase";

// Css //
import "./index.css";

// Bootstrap //
import { Col, Row } from "react-bootstrap";

// Images //
import astronautPerfil from "../../assets/images/AstronautNavbarIcon.png";
import star from "../../assets/images/star.svg";
import moon from "../../assets/images/moon.svg";
import meteor from "../../assets/images/meteor.svg";

const PerfilUser = () => {
  // Constante que vai passar os valores para a rota pelo useParams //
  const { userId } = useParams();

  // State que vai armazenar as informações do Usuario //
  const [user, setUser] = useState({});

  // useEffect para pegar os dados do Usuario //
  useEffect(() => {
    // Conectando o banco de dados //
    const db = getDatabase(app);

    // Referência do banco de dados //
    const userRef = ref(db, "Users");

    // Função que vai no banco de dados e pega o usuario atual e seta no state //
    onValue(userRef, (snapshot) => {
      const users = snapshot.val();
      const usersList = [];
      for (let id in users) {
        usersList.push({ id, ...users[id] });
      }
      const userCurrent = usersList.find((item) => item.id === userId);
      setUser(userCurrent);
    });
  }, [userId, setUser]);

  return (
    <>
      <div className="perfilUser">
        <NavbarPrivate />
        <Row style={{ height: "90vh", marginTop: "20px" }}>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            xs={12}
            md={6}
            xl={6}
            xxl={6}
          >
            <img
              src={astronautPerfil}
              alt="Astronauta foto de Perfil"
              className="img-fluid"
              style={{ width: "140px" }}
            />
            <div className="servicesFinishPerfil">
              <h3 style={{ fontSize: "20px" }}>Serviços concluídos</h3>
              <div className="insideServicesFinishPerfil">
                <div className="starFinishServices">
                  <img
                    style={{ width: "80px" }}
                    src={star}
                    alt="Serviços concluidos Estrela"
                  />
                  <p style={{ fontSize: "12px" }}>Estrela</p>
                  <Link className="btnFinishServices">Mais informações</Link>
                </div>
                <div className="moonFinishServices">
                  <img
                    style={{ width: "80px" }}
                    src={moon}
                    alt="Serviços concluidos Lua"
                  />
                  <p style={{ fontSize: "12px" }}>Lua</p>
                  <Link className="btnFinishServices">Mais informações</Link>
                </div>
                <div className="meteorFinishServices">
                  <img
                    style={{ width: "80px" }}
                    src={meteor}
                    alt="Serviços concluidos Meteoro"
                  />
                  <p style={{ fontSize: "12px" }}>Meteoro</p>
                  <Link className="btnFinishServices">Mais informações</Link>
                </div>
              </div>
            </div>
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            xs={12}
            md={6}
            xl={6}
            xxl={6}
          >
            <div className="descUserPerfil">
              <h3
                style={{
                  textAlign: "center",
                  padding: "5px  0",
                  fontSize: "22px",
                }}
              >
                Descrição
              </h3>
              <div className="insideDescUserPerfil">
                <h5 className="labelDescUser">Nome</h5>
                <p className="infoDescUser">{user.nome}</p>
                <h5 className="labelDescUser">Email</h5>
                <p className="infoDescUser">{user.email}</p>
                <h5 className="labelDescUser">CPF/CNPJ</h5>
                <p className="infoDescUser">{user.cpf}</p>
                <Link className="btnInsideDescUser">Mudar informações</Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PerfilUser;
