import React from "react";
import Associates from "../components/Associates";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Offers from "../components/Offers";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Offers />
      <Associates />
      <Footer />
    </>
  );
};

export default Home;
