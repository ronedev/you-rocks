import React from 'react'
import visa from '../images/metodos-pago/visa.png'
import paypal from '../images/metodos-pago/paypal.png'
import googlePay from '../images/metodos-pago/google-pay.png'
import facebook from '../images/redes/facebook.png'
import instagram from '../images/redes/instagram.png'
import whatsapp from '../images/redes/whatsapp.png'

const Footer = () => {
  return (
    <footer className='footer'>
        <section className='atencion-cliente'>
            <h3>Atención al cliente</h3>
            <a href="/">Costes de envio</a>
            <a href="/">Tiempo de envio</a>
            <a href="/">Devoluciones</a>
            <a href="/">Disponibilidad</a>
            <a href="/">Centro de ayuda</a>
        </section>
        <section className='metodos-redes'>
            <div className="metodos">
            <h3>Métodos de pago</h3>
            <div className="flex-image">
                <img src={paypal} alt="paypal" />
                <img src={visa} alt="visa" />
                <img src={googlePay} alt="gplay" />
            </div>
            </div>
            <div className="redes">
            <h3>Redes sociales</h3>
            <div className="flex-image">
                <img src={instagram} alt="instagram" />
                <img src={whatsapp} alt="whatsapp" />
                <img src={facebook} alt="facebook" />
            </div>
            </div>
        </section>
        <section className='about-us'>
            <h3>Conoce mas sobre nosotros</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nesciunt quidem libero, adipisci incidunt inventore ipsa, ut quis eos odit non velit harum vero, quos corrupti necessitatibus pariatur tempore earum!</p>
            <button className='btn btn-border'>More info</button>
        </section>
        <section className='subscribe'>
            <h3>Suscribite y recibí información exclusiva</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, nulla sint sit ab asperiores recusandae vitae repellendus facere possimus amet deleniti, necessitatibus reiciendis voluptatibus nam impedit aut omnis commodi pariatur.</p>
            <div className="btn-container">
                <input type="text" className='btn btn-border'/>
                <button className='btn btn-background'>Subscribe</button>
            </div>
        </section>
    </footer>
  )
}

export default Footer