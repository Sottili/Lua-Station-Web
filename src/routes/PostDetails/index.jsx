// React //
import React, { useState, useEffect } from "react";

// React Router DOM
import { Link, useParams } from "react-router-dom";

// Css //
import "./index.css";

// Images //
import astronautAuthor from "../../assets/images/AstronautNavbarIcon.png";

// Icons //

import { AiFillDollarCircle } from "react-icons/ai";

// Firebase //
import { getDatabase, onValue, ref } from "firebase/database";
import { app } from "../../services/configFirebase";

// Components //
import NavbarPrivate from "../../components/NavbarPrivate";

const PostDetails = () => {
  const { key } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const db = getDatabase(app);

    const postRef = ref(db, "Services");
    onValue(postRef, (snapshot) => {
      const posts = snapshot.val();
      const postList = [];
      for (let id in posts) {
        postList.push({ id, ...posts[id] });
      }
      const postCurrent = postList.find((item) => item.idProject === key);
      setPost(postCurrent);
    });
  }, [key]);

  return (
    <>
      <NavbarPrivate />
      <div className="postDetailsContainer">
        <div className="cardPost">
          <h3 style={{ margin: "20px 0" }}>{post.nameProject}</h3>
          <img
            src={post.deadline}
            className="img-fluid"
            alt="Tempo do Serviço"
            style={{ width: "140px", margin: "10px 0" }}
          />
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Descrição do Projeto:
          </h3>
          <p className="descProjectDetails">{post.descProject}</p>
          <Link className="btnSolicitar">Solicitar</Link>
        </div>
        <div className="infosProject">
          <p className="nameProject">{post.nameProject}</p>
          <img
            style={{ width: "60px" }}
            alt="Tempo do Serviço"
            src={post.deadline}
          />
          <p className="priceProject">
            <AiFillDollarCircle
              style={{
                marginRight: "2px",
                marginTop: "-2px",
                verticalAlign: "middle",
                fontSize: "18px",
              }}
            />
            R$ {post.price}
          </p>
        </div>
        <div className="infosAuthor">
          <img
            style={{ width: "80px" }}
            alt="Foto do Usuario"
            src={astronautAuthor}
          />
          <div className="infos">
            <p className="nameAuthor">{post.nameAuthor}</p>
            <p className="emailAuthor">{post.emailAuthor}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
