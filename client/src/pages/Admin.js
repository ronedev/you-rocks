import React from "react";
import Navbar from "../components/Navbar.js";
import Filters from "../components/Store/Filters.js";
import Products from "../components/Store/Products.js";

const Admin = () => {
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
