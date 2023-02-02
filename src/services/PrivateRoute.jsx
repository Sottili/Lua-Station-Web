import { React } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "./AuthContext";
import { useContext } from "react";

const PrivateRoute = (Component) => {
  const currentUser = useContext(AuthContext);

  const navigate = useNavigate();

  return currentUser() ? <Component /> : navigate("/login");
};

export default PrivateRoute;
