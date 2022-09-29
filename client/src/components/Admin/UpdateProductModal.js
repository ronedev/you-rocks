import React from "react";
import deleteIcon from "../../images/icons/delete.png";
import closeIcon from "../../images/icons/cerrar.png";

const UpdateProductModal = ({ isOpened, setIsOpened, data, setModalData }) => {
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
                <option value="chaqueta" selected={data.category === 'chaqueta' ? true : false}>Chaqueta</option>
                <option value="abrigo" selected={data.category === 'abrigo' ? true : false}>Abrigo</option>
                <option value="remera" selected={data.category === 'remera' ? true : false}>Remera</option>
                <option value="camisa" selected={data.category === 'camisa' ? true : false}>Camisa</option>
                <option value="saco" selected={data.category === 'saco' ? true : false}>Saco</option>
                <option value="pantalon" selected={data.category === 'pantalon' ? true : false}>Pantalon</option>
              </select>
            </div>
            <div className="campo">
              <label id="gender">Seleccione el genero</label>
              <div className="campo-checkbox-radio">
                <label id="female">Female</label>
                <input type="radio" value="female" checked={data.gender === 'female' ? true : false}/>
              </div>
              <div className="campo-checkbox-radio">
                <label id="male">Male</label>
                <input type="radio" value="male" checked={data.gender === 'male' ? true : false}/>
              </div>
              <div className="campo-checkbox-radio">
                <label id="unisex">Unisex</label>
                <input type="radio" value="unisex" checked={data.gender === 'unisex' ? true : false}/>
              </div>
            </div>
            <div className="campo">
              <label id="offer">Esta en oferta</label>
              <div className="campo-checkbox-radio">
                <label>Si</label>
                <input type="radio" value={true} checked={data.offer === true ? true : false}/>
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
                <input type="checkbox" name="s" id="s" checked={data.sizes?.includes('s') ? true : false }/>
              </div>
              <div className="campo-checkbox-radio">
                <label id="m">M</label>
                <input type="checkbox" name="m" id="m" checked={data.sizes?.includes('m') ? true : false }/>
              </div>
              <div className="campo-checkbox-radio">
                <label id="l">L</label>
                <input type="checkbox" name="l" id="l" checked={data.sizes?.includes('l') ? true : false }/>
              </div>
              <div className="campo-checkbox-radio">
                <label id="xl">XL</label>
                <input type="checkbox" name="xl" id="xl" checked={data.sizes?.includes('xl') ? true : false }/>
              </div>
              <div className="campo-checkbox-radio">
                <label id="xxl">XXL</label>
                <input type="checkbox" name="xxl" id="xxl" checked={data.sizes?.includes('xxl') ? true : false }/>
              </div>
            </div>
            <div className="campo select">
              <label id="enterprise">Seleccione empresa</label>
              <select name="enterprise" id-="enterprise">
                <option value="puma" selected={data.enterprise === 'puma' ? true : false}>Puma</option>
                <option value="adidas" selected={data.enterprise === 'adidas' ? true : false}>Adidas</option>
                <option value="nike" selected={data.enterprise === 'nike' ? true : false}>Nike</option>
                <option value="prada" selected={data.enterprise === 'prada' ? true : false}>Prada</option>
                <option value="gucci" selected={data.enterprise === 'gucci' ? true : false}>Gucci</option>
              </select>
            </div>
          </div>
          <div className="campo">
            <label id="images">Imagenes</label>
            <div className="campos-flex imagenes">
              {data.images?.map((image) => (
                <>
                  <div className="imageContainer">
                    <img src={image} alt="Imagen del producto" />
                    <div className="delete" onClick={()=> setModalData(prev => {return {...prev, images: prev.images.filter(img => img !== image)}})}>
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
