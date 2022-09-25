import React, { useState } from 'react'
import copyIcon from './../../images/icons/copying.png'

const ApiInput = () => {
  const [inputValue, setInputValue] = useState('')

  const URL = 'https://you-rocks-backend.vercel.app/'

  const copyUrlToClipboard = ()=> navigator.clipboard.writeText(URL + inputValue)

  const handleInputChange = (e)=> setInputValue(e.target.value)

  const handleSubmit = (e)=>{
    e.preventDefault()

  }

  return (
    <section className='api-input'>
        <h3>¡Intentalo!</h3>
        <form className='api-form' onClick={handleSubmit}>
            <label>https://you-rocks-backend.vercel.app/</label>
            <input type="text" onChange={handleInputChange} />
            <div className="btn-flex">
                <button className='btn' onClick={copyUrlToClipboard}><img src={copyIcon} alt="Copiar URL" id='copy' /></button>
                <button className='btn btn-background'>Enviar</button>
            </div>
        </form>
    </section>
  )
}

export default ApiInput