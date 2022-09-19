import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Home/Header";
import Navbar from "../components/Navbar";
import LazyOffers from "../components/Home/LazyOffers";
import LazyAssociates from "../components/Home/LazyAssociates";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <LazyOffers />
      <LazyAssociates />
      <Footer />
    </>
  );
};

export default Home;
