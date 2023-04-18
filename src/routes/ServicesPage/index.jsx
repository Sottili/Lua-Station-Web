// REACT //
import React from "react";

// Css //
import "./index.css";

// Components //
import NavbarPrivate from "../../components/NavbarPrivate";

// Services //
import PostList from "../../services/loadPosts";

const ServicesPage = () => {
  return (
    <div className="posts">
      <NavbarPrivate />
      <div className="containerPosts">
        <PostList />
      </div>
    </div>
  );
};

export default ServicesPage;
