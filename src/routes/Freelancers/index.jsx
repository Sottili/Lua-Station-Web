// React //
import React from "react";

// Components //
import UserList from "../../services/loadUsers";
import NavbarPrivate from "../../components/NavbarPrivate";

// Css //
import "./index.css";

const Freelancers = () => {
  return (
    <>
      <div className="freelancers">
        <NavbarPrivate />
        <div className="containerFreelancers">
          <UserList />
        </div>
      </div>
    </>
  );
};

export default Freelancers;
