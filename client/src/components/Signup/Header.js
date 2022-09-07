import React from 'react'

const Header = () => {
  return (
    <header className='header login'>
        <div className="form-container">
            <h2>Crear cuenta</h2>
            <form action="http://localhost:5000/signup" method='post'>
                <div className="campo">
                    <label id='name'>Ingrese su nombre: </label>
                    <input type="text" id='name' name='name' placeholder='Ingrese su nombre' autoFocus/>
                </div>
                <div className="campo">
                    <label id='email'>Ingrese su email: </label>
                    <input type="email" id='email' name='email' placeholder='Ingrese su email'/>
                </div>
                <div className="campo">
                    <label id='password'>Contraseña:</label>
                    <input type="password" id='password' name='password' placeholder='Ingrese su contraseña' />
                </div>
                <div className="campo">
                    <label id='repeat-password'>Repetir contraseña:</label>
                    <input type="password" id='repeat-password' name='confirmPassword' placeholder='Repita su contraseña' />
                </div>
                <button className='btn btn-background'>Crear cuenta</button>
            </form>
            <div className="etiquetas">
                <a href="/login">¿Ya tenes una cuenta? Ingresa</a>
            </div>
        </div>
        <div className="signup-image"></div>
    </header>
  )
}

export default Header