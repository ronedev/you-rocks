import React, { useContext, useEffect } from 'react'
import searchIcon from '../../images/icons/search.png'
import filterIcon from '../../images/icons/filter.png'
import downArrowIcon from '../../images/icons/down-arrow.png'
import { ProductContext } from '../../context/ProductsContext'
import ProductCard from './ProductCard'

const Products = () => {
    const {products, getAllProducts} = useContext(ProductContext)
    
    useEffect(()=>{
        getAllProducts()
    }, [getAllProducts])
  return (
    <section className='products-container'>
        <div className="filters-container">
            <button className='btn btn-border'>Filter <img src={filterIcon} alt="Icono de filtrado"/></button>
            <button className='btn btn-background'>Order by <img src={downArrowIcon} alt="Icono de flechas hacia abajo" /></button>
            <div className='btn btn-border'>
                <input type="text" name='search' id='search' placeholder='Search' />
                <img src={searchIcon} alt="Icono de buscar" />
            </div>
        </div>
        <div className="products-grid">
            {products.map(product => (
                <ProductCard product={product}/>
            ))}
        </div>
    </section>
  )
}

export default Products