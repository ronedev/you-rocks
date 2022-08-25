import React from 'react'
import modelImage from '../images/fondo.png'
import ItemCard from './ItemCard'

const Header = () => {
  return (
    <header className='header'>
        <div className="randomCard">
            <ItemCard />
            <a href="/products" className='btn btn-border'>Go to store</a>
        </div>
        <div className="imageAndTitle">
            <img src={modelImage} alt="Modelo feminina vistiendo nuestra vestimenta" />
            <h1>You Rocks</h1>
        </div>
    </header>
  )
}

export default Header