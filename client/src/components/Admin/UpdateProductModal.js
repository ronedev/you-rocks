import React from "react";
import deleteIcon from "../../images/icons/delete.png";
import closeIcon from "../../images/icons/cerrar.png";

const UpdateProductModal = ({ isOpened, setIsOpened, data }) => {
  if (isOpened) {
    return (
      <section
        className={isOpened ? "modal-container visible" : "modal-container"}
      >
        <div className="modal-close" onClick={() => setIsOpened(false)}></div>
        <form action="" className="product-form">
          <div className="close-icon-container">
            <img
              src={closeIcon}
              alt="Cerrar modal icono"
              id="close-icon"
              onClick={() => setIsOpened(false)}
            />
          </div>
          <div className="campos-flex">
            <div className="campo">
              <label id="title">Titulo del producto</label>
              <input type="text" name="title" value={data.title} />
            </div>
            <div className="campo">
              <label id="price">Precio</label>
              <input type="number" name="price" value={data.price} />
            </div>
            <div className="campo">
              <label id="quantity">En stock</label>
              <input type="number" name="quantity" value={data.quantity} />
            </div>
          </div>
          <div className="campo">
            <label id="description">Descripción</label>
            <textarea name="description" id="description">
              {data.description}
            </textarea>
          </div>
          <div
            className="campos-flex select"
          >
            <div className="campo select">
              <label id="category">Seleccione categoria</label>
              <select name="category" id="category">
                <option value="chaqueta">Chaqueta</option>
                <option value="abrigo">Abrigo</option>
                <option value="remera">Remera</option>
                <option value="camisa">Camisa</option>
                <option value="saco">Saco</option>
                <option value="pantalon">Pantalon</option>
              </select>
            </div>
            <div className="campo">
              <label id="gender">Seleccione el genero</label>
              <div className="campo-checkbox-radio">
                <label id="female">Female</label>
                <input type="radio" value="female" />
              </div>
              <div className="campo-checkbox-radio">
                <label id="male">Male</label>
                <input type="radio" value="male" />
              </div>
              <div className="campo-checkbox-radio">
                <label id="unisex">Unisex</label>
                <input type="radio" value="unisex" />
              </div>
            </div>
            <div className="campo">
              <label id="offer">Esta en oferta</label>
              <div className="campo-checkbox-radio">
                <label>Si</label>
                <input type="radio" value={true} />
              </div>
              <div className="campo-checkbox-radio">
                <label>No</label>
                <input type="radio" value={false} />
              </div>
            </div>
          </div>
          <div
            className="campos-flex checkbox-radio"
          >
            <div className="campo">
              <label id="sizes">Talles disponibles</label>
              <div className="campo-checkbox-radio">
                <label id="s">S</label>
                <input type="checkbox" name="s" id="s" />
              </div>
              <div className="campo-checkbox-radio">
                <label id="m">M</label>
                <input type="checkbox" name="m" id="m" />
              </div>
              <div className="campo-checkbox-radio">
                <label id="l">L</label>
                <input type="checkbox" name="l" id="l" />
              </div>
              <div className="campo-checkbox-radio">
                <label id="xl">XL</label>
                <input type="checkbox" name="xl" id="xl" />
              </div>
              <div className="campo-checkbox-radio">
                <label id="xxl">XXL</label>
                <input type="checkbox" name="xxl" id="xxl" />
              </div>
            </div>
            <div className="campo select">
              <label id="enterprise">Seleccione empresa</label>
              <select name="enterprise" id-="enterprise">
                <option value="puma">Puma</option>
                <option value="adidas">Adidas</option>
                <option value="nike">Nike</option>
                <option value="prada">Prada</option>
                <option value="gucci">Gucci</option>
              </select>
            </div>
          </div>
          <div className="campo">
            <label id="images">Imagenes</label>
            <div className="campos-flex imagenes">
              {data.images.map((image) => (
                <>
                  <div className="imageContainer">
                    <img src={image} alt="Imagen del producto" />
                    <div className="delete">
                      <img src={deleteIcon} alt="Eliminar imagen" />
                    </div>
                  </div>
                </>
              ))}
            </div>
            {data.images.length > 3 ? (
              <p>Hay un maximo de 4 imagenes por producto</p>
            ) : (
              <input type="file" placeholder="Subir otra imagen del producto" />
            )}
          </div>
          <button className="btn btn-background">Actualizar producto</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

export default UpdateProductModal;
