import React from 'react'
import image from '../images/products/female/1/1.webp'

const ItemCard = () => {
    let item = {
        title: 'Title product',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum neque nec orci tempor, a accumsan turpis ornare. Vivamus vehicula mi sem. ',
        image: [image],
        price: '500'
    }
  return (
    <article className='itemContainer'>
        <div className="image" style={{backgroundImage: `url(${image})` }}>
        </div>
        <div className="description">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </div>
        <div className="price">
            <span>${item.price}</span>
            <button className='btn btn-background'>Add to cart</button>
        </div>
    </article>
  )
}

export default ItemCard