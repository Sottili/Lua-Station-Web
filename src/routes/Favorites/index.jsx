import React from "react";
import FavoritesList from "../../services/loadFavorites";
import NavbarPrivate from "../../components/NavbarPrivate";

const FavoritesUser = () => {
  return (
    <>
      <div className="freelancers">
        <NavbarPrivate />
        <div className="containerFreelancers">
          <FavoritesList />
        </div>
      </div>
    </>
  );
};

export default FavoritesUser;
