import React from 'react'

const ProductCard = ({product}) => {
  return (
    <article className='productContainer'>
        <div className="image" style={{backgroundImage: `url(../${product.images[0]})` }}>
        </div>
        <div className="description">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
        </div>
        <div className="price">
            <span>${product.price}</span>
            <button className='btn btn-background'>Add to cart</button>
        </div>
    </article>
  )
}

export default ProductCard