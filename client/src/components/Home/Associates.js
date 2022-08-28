import React from 'react'
import nike from '../../images/associates/nike.png'
import fila from '../../images/associates/fila.png'
import adidas from '../../images/associates/adidas.png'
import gucci from '../../images/associates/gucci.png'
import zara from '../../images/associates/zara.png'
import puma from '../../images/associates/puma.png'
import oakley from '../../images/associates/oakley.png'
import prada from '../../images/associates/prada.png'

const Associates = () => {
    const images = [nike, adidas, fila, gucci, zara, puma, prada, oakley]
  return (
    <section className='container'>
        <div className="associates-grid">
            {images.map(image =>(
                <img src={image} alt="Asossciate logo" />
            ))}
        </div>
    </section>
  )
}

export default Associates