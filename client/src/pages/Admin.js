import React, { useContext } from "react";
import Navbar from "../components/Navbar.js";
import Filters from "../components/Store/Filters.js";
import Products from "../components/Store/Products.js";
import { UserContext } from "../context/UserContext.js";

const Admin = () => {
  const { actualUser } = useContext(UserContext)

  if(!actualUser){
    window.location.href = '/'
  }
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "10rem" }}>
        <Filters />
      </div>
      <Products />
    </>
  );
};

export default Admin;
