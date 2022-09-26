import React from 'react'
import ApiInput from '../components/ApiComponent/ApiInput'
import Endpoints from '../components/ApiComponent/Endpoints'
import Header from '../components/ApiComponent/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Api = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <ApiInput/>
        <Endpoints/>
        <Footer/>
    </>
  )
}

export default Api