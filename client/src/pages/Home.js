import React from "react";
import Associates from "../components/Home/Associates";
import Footer from "../components/Footer";
import Header from "../components/Home/Header";
import Navbar from "../components/Navbar";
import Offers from "../components/Home/Offers";

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
