import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Store/Header'
import Products from '../components/Store/Products'
import Filters from '../components/Store/Filters'

const Store = () => {
  return (
    <>
        <Navbar />
        <Header />
        <Filters />
        <Products />
        <Footer />
    </>
  )
}

export default Store