import React from 'react'
import copyIcon from './../../images/icons/copying.png'

const ApiInput = () => {
  return (
    <section className='api-input'>
        <h3>¡Intentalo!</h3>
        <form className='api-form'>
            <label>https://you-rocks-backend.vercel.app/</label>
            <input type="text" />
            <div className="btn-flex">
                <button className='btn'><img src={copyIcon} alt="Copiar URL" id='copy' /></button>
                <button className='btn btn-background'>Enviar</button>
            </div>
        </form>
    </section>
  )
}

export default ApiInput