import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Store/Header'
import Products from '../components/Store/Products'

const Store = () => {
  return (
    <>
        <Navbar />
        <Header />
        <Products />
        <Footer />
    </>
  )
}

export default Store