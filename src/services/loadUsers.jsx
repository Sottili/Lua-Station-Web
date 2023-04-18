import { useState, useEffect } from "react";

import UserCard from "../components/UserCard";

// Firebase //
import { getDatabase, onValue, ref } from "firebase/database";
import { app } from "./configFirebase";

export default function UserList() {
  const [userList, setUserList] = useState();

  useEffect(() => {
    const db = getDatabase(app);

    const usersRef = ref(db, "Users");
    onValue(usersRef, (snapshot) => {
      const users = snapshot.val();
      const userList = [];
      for (let id in users) {
        userList.push({ id, ...users[id] });
      }
      setUserList(userList);
    });
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {userList
        ? userList.map((data) => (
            <UserCard
              title={data.nameProject}
              nome={data.nome}
              img={data.imgUser}
              email={data.email}
              id={data.id}
              key={data.id}
            />
          ))
        : ""}
    </div>
  );
}
