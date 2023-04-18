import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Firebase //
import { getDatabase, onValue, ref } from "firebase/database";
import { app } from "../../services/configFirebase";

const PerfilUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const db = getDatabase(app);

    const userRef = ref(db, "Users");
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
      <div>
        <h1>Ola usuario{user.nome}</h1>
      </div>
    </>
  );
};

export default PerfilUser;
