import { useContext } from "react";
import { AuthContext } from "./authContext";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ element: Element }) {
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  return user !== null ? Element : navigate("/login");
}

export default PrivateRoute;
