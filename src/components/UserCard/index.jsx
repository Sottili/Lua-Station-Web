// React //
import React, { useState } from "react";

// React Router DOM //
import { Link } from "react-router-dom";

// Css //
import "./index.css";

// Icons //
import { AiFillHeart } from "react-icons/ai";

const UserCard = ({ nome, img }) => {
  const [isActive, setIsActive] = useState();

  const handleClick = () => {
    setIsActive((current) => !current);
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
          <Link className="btnUserCard">Ver mais</Link>
        </div>
      </div>
    </>
  );
};

export default UserCard;
