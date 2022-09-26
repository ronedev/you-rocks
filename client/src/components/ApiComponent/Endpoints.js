import React from "react";

const Endpoints = () => {
  return (
    <section className="endpointsSection">
      <h3>Endpoints</h3>
      <ul>
        <li className="endpoint">
          <div className="title">
            <button className="method">GET</button>
            <span>https://you-rocks-backend.vercel.app/product/get</span>
          </div>
          <p>
            Para obtener todos los productos, recuerda que las imagenes son
            referencias, deberas agregarlas en tu proyecto
          </p>
        </li>
        <li className="endpoint">
          <div className="title">
            <button className="method">GET</button>
            <span>
              https://you-rocks-backend.vercel.app/product/get/(id del producto)
            </span>
          </div>
          <p>Devovlera el producto correspondiente al id ingresado.</p>
        </li>
        <li className="endpoint">
          <div className="title">
            <button className="method">GET</button>
            <span>
              https://you-rocks-backend.vercel.app/product/get-offered
            </span>
          </div>
          <p>
            Obtiene unicamente los productos que se encuentran en oferta, estos
            productos puedes filtrarlos y descontarles una cantidad del precio
            total. En este proyecto fue el 20%
          </p>
        </li>
        <li className="endpoint">
          <div className="title">
            <button className="method">GET</button>
            <span>
              https://you-rocks-backend.vercel.app/product/get-(male/female/unisex)
            </span>
          </div>
          <p>
            La respuesta serán los productos masculinos, femeninos o unisex
            segun se haya especificado
          </p>
        </li>
        <li className="endpoint">
          <div className="title">
            <button className="method">GET</button>
            <span>https://you-rocks-backend.vercel.app/product/get-random</span>
          </div>
          <p>
            Se devolverá un producto aleatorio, en este proyecto se utilizo para
            obtener el producto del header de la home page
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Endpoints;
