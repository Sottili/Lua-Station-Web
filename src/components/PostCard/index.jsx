// React Router DOM
import { Link } from "react-router-dom";

// CSS //
import "./index.css";

// Icons //
import { AiFillDollarCircle } from "react-icons/ai";

export const PostCard = ({ title, id, body, platform, deadline, price }) => (
  <>
    <div className="post">
      <div className="postCard">
        <h4 className="postTitle">{title}</h4>
        <div className="postImgContent">
          <img className="postImg" src={deadline} alt="Deadline" />
        </div>
        <div className="postBody">
          <h6
            style={{
              paddingTop: "20px",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Descrição:
          </h6>
          <p style={{ fontSize: "14px", fontWeight: "500" }}>{body}</p>
          <p className="priceProject">
            <AiFillDollarCircle
              style={{
                marginRight: "10px",
                marginTop: "-2px",
                verticalAlign: "middle",
                fontSize: "18px",
              }}
            />
            R$ {price}
          </p>
          <div className="btnsCards">
            <Link className="btnStartProject" to={`/servicos/${id}`}>
              Iniciar
            </Link>
            <Link className="btnAboutProject" to={`/servicos/${id}`}>
              Ver Mais
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
);
