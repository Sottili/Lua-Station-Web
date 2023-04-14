// REACT //
import React from "react";

// Css //
import "./index.css";

// Components //
import NavbarPrivate from "../../components/NavbarPrivate";

// Services //
import PostList from "../../services/loadPost";

const HomeUsers = () => {
  return (
    <div className="posts">
      <NavbarPrivate />
      <div className="container-posts">
        <PostList />
      </div>
    </div>
  );
};

export default HomeUsers;
