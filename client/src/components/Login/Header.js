import React, { useState } from "react";
import cerrarIcon from "../../images/icons/cerrar.png";

const Header = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState([]);

  function handleFormChanges(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  console.log(formData);

  const requestUser = async (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "llavesecretaaaaaaaa=s%3AstiVVuy_77QgsRc3FmxJzBe5t5YBKr-d.1KcnVjl5vph33g8wAf9l1NxjTHaGIOZVpJjz42uQSaI"
    );

    var raw = JSON.stringify({
      email: formData.email,
      password: formData.password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch("http://localhost:5000/login", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          window.location = "/";
        } else {
          setErrors((prev) => [...prev, data.message]);
        }
      });
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
