// React //
import React, { useState } from "react";

// React Router DOM //
import { Link } from "react-router-dom";

// Css //
import "./index.css";

// Icons //
import { AiFillHeart } from "react-icons/ai";

//Importações do Firebase //
import { getAuth } from "firebase/auth";
import { ref, getDatabase, update, remove } from "firebase/database";
import { app } from "../../services/configFirebase";

const UserCard = ({ nome, img, id }) => {
  // Conectando ao banco de dados //
  const db = getDatabase(app);

  // Iniciando a monitoração do Auth e pegando o Id do Usuario a tual //
  const auth = getAuth();
  const idUser = auth.currentUser.uid;

  // Adicionando aos Favoritos //
  const addFavorite = () => {
    update(ref(db, `Users/${idUser}/Favoritos/` + id), {
      idUser: id,
      nome: nome,
      img: img,
    });
  };

  // Removendo dos Favoritos //
  const removeFavorite = () => {
    remove(ref(db, `Users/${idUser}/Favoritos/` + id));
  };

  // Funções da animação do coração //
  const [isActive, setIsActive] = useState();
  const handleAnimation = () => {
    setIsActive((current) => !current);
  };
  const handleClick = () => {
    handleAnimation();
    isActive ? removeFavorite() : addFavorite();
  };

  return (
    <>
      <div className="cardUser">
        <button className="favoriteIcon">
          <AiFillHeart
            onClick={handleClick}
            className={isActive ? "heartActive" : ""}
            style={{ height: "30px", width: "25px" }}
          />
        </button>
        <div className="cardUserBody">
          <img className="imgUserCard" src={img} alt="Imagem do Usuario" />
          <h3 className="nomeUserCard">{nome}</h3>
        </div>
        <div
          style={{ width: "240px", display: "flex", justifyContent: "center" }}
        >
          <Link className="btnUserCard" to={`/perfil-freelancer/${id}`}>
            Ver mais
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserCard;
