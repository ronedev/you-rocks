import React from 'react'

const Header = () => {
  return (
    <header className='header login'>
        <div className="form-container">
            <h2>Login</h2>
            <form action="">
                <div className="campo">
                    <label id='name'>Ingrese su nombre de usuario:</label>
                    <input type="text" id='name' name='name' placeholder='Ingrese su usuario o email' autoFocus/>
                </div>
                <div className="campo">
                    <label id='password'>Contraseña:</label>
                    <input type="password" id='password' name='password' placeholder='Ingrese su contraseña' />
                </div>
                <button className='btn btn-background'>Ingresar</button>
            </form>
            <div className="etiquetas">
                <a href="/signup">¿No tenes cuenta? Crea una</a>
                <a href="/reset-password">¿Olvidaste tu contraseña?</a>
            </div>
        </div>
        <div className="description"></div>
    </header>
  )
}

export default Header