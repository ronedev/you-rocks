import React, { useEffect, useState } from 'react'
import modelImage from '../../images/fondo.png'
import { getRandomProduct } from '../../services/product';
import ItemCard from './ItemCard'
import useModal from '../../hooks/useModal.js'
import ProductModal from '../Store/ProductModal';
import { JellyTriangle } from '@uiball/loaders'

const Header = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();

  const {isOpened, setIsOpened, setModalData} = useModal()
  
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
        {!loading && <ProductModal isOpened={isOpened} setIsOpened={setIsOpened} data={product}/>}
        <div className="randomCard">
          {loading ? (
            <JellyTriangle 
            size={50}
            speed={1.75} 
            color="white" 
           />
          ) : (
            <>
            <ItemCard item={product} setIsOpened={setIsOpened} setModalData={setModalData}/>
            <a href="/store" className='btn btn-border'>Go to store</a>
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