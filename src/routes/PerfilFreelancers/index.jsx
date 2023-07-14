// React //
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// Firebase //
import { getDatabase, onValue, ref } from "firebase/database";
import { getAuth } from "firebase/auth";
import { app } from "../../services/configFirebase";
import NavbarPrivate from "../../components/NavbarPrivate";

// Css //
import "./index.css";

// Bootstrap //
import { Col, Row } from "react-bootstrap";

// Images //
import astronautPerfil from "../../assets/images/AstronautNavbarIcon.png";
import star from "../../assets/images/star.svg";
import moon from "../../assets/images/moon.svg";
import meteor from "../../assets/images/meteor.svg";

const PerfilFreelancer = () => {
  // Constante que vai passar os valores para a rota pelo useParams //
  const { freelancerId } = useParams();

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
      const userCurrent = usersList.find((item) => item.id === freelancerId);
      setUser(userCurrent);
    });
  }, [freelancerId, setUser]);

  // Função para voltar uma pagina se não for o usaurio atual //
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  // Verificando se é o usuario atual para renderizar a página //
  const auth = getAuth();
  if (user.id === auth.currentUser.uid) {
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
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
  // Se não for o usuario atual vai renderizar isso: //
  else {
    return (
      <>
        <div className="perfilUser">
          <Row style={{ height: "90vh" }}>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              xs={12}
            >
              <h1 style={{ color: "#fff" }}>Opsss Link Quebrado!</h1>
              <Link className="btnGoBack" onClick={goBack}>
                Voltar
              </Link>
            </Col>
          </Row>
        </div>
      </>
    );
  }
};

export default PerfilFreelancer;
