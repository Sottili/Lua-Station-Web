import { useState, useEffect } from "react";

import UserCard from "../components/UserCard";

// Firebase //
import { getDatabase, onValue, ref } from "firebase/database";
import { app } from "./configFirebase";
import { getAuth } from "firebase/auth";

export default function FavoritesList() {
  const [favoritesList, setfFavoritesList] = useState();

  useEffect(() => {
    const db = getDatabase(app);
    const auth = getAuth();

    const favoriteRef = ref(db, `Favorites/${auth.currentUser.uid}`);
    onValue(favoriteRef, (snapshot) => {
      const favorites = snapshot.val();
      const favoritesList = [];
      for (let id in favorites) {
        favoritesList.push({ id, ...favorites[id] });
      }
      setfFavoritesList(favoritesList);
    });
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {favoritesList
        ? favoritesList.map((data) => (
            <UserCard
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
