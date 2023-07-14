import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "./authContext";

function PrivateRoute({ element: Element }) {
  const currentUser = useContext(AuthContext);
  const navigate = useNavigate();

  return currentUser != null ? Element : navigate("/login");
}

export default PrivateRoute;
