import React from 'react'
import ApiInput from '../components/ApiComponent/ApiInput'
import Header from '../components/ApiComponent/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Api = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <ApiInput />
        <Footer/>
    </>
  )
}

export default Api