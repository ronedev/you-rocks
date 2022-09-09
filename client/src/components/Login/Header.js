import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import cerrarIcon from "../../images/icons/cerrar.png";
import { getUser } from "../../services/user";

const Header = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { setActualUser } = useContext(UserContext)

  const [errors, setErrors] = useState([]);

  function handleFormChanges(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const requestUser = async (e) => {
    e.preventDefault();
    const res = await getUser(formData)

    if(res.success){
      setActualUser(res.user)
      window.location = "/";
    }else{
      setErrors((prev) => [...prev, res.message]);
    }
  };

  return (
    <header className="header login">
      {errors.length > 0 &&
        (
          <div className="alert-container" onClick={()=> setErrors([])}>
            {errors.map((err) => (
            <div className="alert error">
              <div className="description-alert">{err}</div>
              <img src={cerrarIcon} alt="cerrar alerta" />
            </div>
            ))}
          </div>
        )}
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={requestUser}>
          <div className="campo">
            <label id="name">Ingrese su email:</label>
            <input
              type="email"
              id="name"
              name="email"
              placeholder="Ingrese su email"
              onChange={handleFormChanges}
              autoFocus
            />
          </div>
          <div className="campo">
            <label id="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingrese su contraseña"
              onChange={handleFormChanges}
            />
          </div>
          <button className="btn btn-background">Ingresar</button>
        </form>
        <div className="etiquetas">
          <a href="/signup">¿No tenes cuenta? Crea una</a>
          <a href="/reset-password">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
      <div className="description"></div>
    </header>
  );
};

export default Header;
