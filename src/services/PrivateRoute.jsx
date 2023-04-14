import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ element: Element }) {
  const [currentUser, setCurrentUser] = useState(null);

  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      navigate("/login");
    }
  });

  const navigate = useNavigate();

  return currentUser != null ? Element : navigate("/login");
}

export default PrivateRoute;
