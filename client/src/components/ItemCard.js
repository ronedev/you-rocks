import React from 'react'

const ItemCard = ({item}) => {
  return (
    <article className='itemContainer'>
        <div className="image" style={{backgroundImage: `url(../${item.images[0]})` }}>
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