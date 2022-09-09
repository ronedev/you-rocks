import React, { useEffect, useState } from 'react'
import modelImage from '../../images/fondo.png'
import { getRandomProduct } from '../../services/product';
import ItemCard from './ItemCard'

const Header = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  
  useEffect(()=>{
    async function loadRandomProduct(){
      setLoading(true)
      const response = await getRandomProduct()
      if(response.data){
        setProduct(response.data)
        setLoading(false)
      }
    }
    loadRandomProduct()
  }, [])
  return (
    <header className='header'>
        <div className="randomCard">
          {loading ? (
            <p>Esta cargando...</p>
          ) : (
            <>
            <ItemCard item={product} />
            <a href="/products" className='btn btn-border'>Go to store</a>
            </>
          )}
        </div>
        <div className="imageAndTitle">
            <img src={modelImage} alt="Modelo feminina vistiendo nuestra vestimenta" />
            <h1>You Rocks</h1>
        </div>
    </header>
  )
}

export default Header