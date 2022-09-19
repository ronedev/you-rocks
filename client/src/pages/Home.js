import React from "react";
import Associates from "../components/Home/Associates";
import Footer from "../components/Footer";
import Header from "../components/Home/Header";
import Navbar from "../components/Navbar";
import LazyOffers from "../components/Home/LazyOffers";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <LazyOffers />
      <Associates />
      <Footer />
    </>
  );
};

export default Home;
