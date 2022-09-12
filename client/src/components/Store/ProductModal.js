import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import closeIcon from "../../images/icons/cerrar.png";

const ProductModal = ({ isOpened, setIsOpened, data }) => {
  const { getItemQuantity, increaseCartQuantity, cartItems, removeFromCart } =
    useContext(CartContext);

  const [quantity, setQuantity] = useState(getItemQuantity(data._id));
  const [sizeSelected, setSizeSelected] = useState("");
  const [selectedSizeAlert, setSelectedSizeAlert] = useState(false)
  const [imageSelected, setImageSelected] = useState(0);

  useEffect(() => {
    if (isOpened) {
      setImageSelected(data.images[0]);
    }
  }, [isOpened]);

  useEffect(() => {
    if (cartItems.find((product) => product.id === data._id)) {
      setQuantity(getItemQuantity(data._id));
    } else {
      setQuantity(0);
    }
  }, [cartItems, data]);

  if (isOpened) {
    return (
      <section
        className={isOpened ? "modal-container visible" : "modal-container"}
      >
        <div className="modal-close" onClick={() => setIsOpened(false)}></div>
        <article className="product-modal">
          <img
            src={closeIcon}
            alt="Cerrar modal icono"
            style={{ width: "3rem", cursor: "pointer" }}
            onClick={() => setIsOpened(false)}
          />
          <div className="modal-info">
            <div className="images-container">
              <div className="secondary-images">
                {data.images.map((image) => (
                  <img
                    src={image}
                    alt="Imagen descriptiva del producto"
                    onClick={() => setImageSelected(image)}
                  />
                ))}
              </div>
              <img src={imageSelected} alt="Imagen descriptiva del producto" />
            </div>
            <div className="description">
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <div className="sizes-price">
                <div className="sizes">
                  <div
                    className={
                      data.sizes.includes("s") ? (sizeSelected === 's' ? "talle selected" : "talle habilitado") : "talle"
                    }
                    onClick={() => data.sizes.includes('s') && setSizeSelected("s")}
                  >
                    s
                  </div>
                  <div
                    className={
                      data.sizes.includes("m") ? (sizeSelected === 'm' ? "talle selected" : "talle habilitado") : "talle"
                    }
                    onClick={() => data.sizes.includes('m') && setSizeSelected("m")}
                  >
                    m
                  </div>
                  <div
                    className={
                      data.sizes.includes("l") ? (sizeSelected === 'l' ? "talle selected" : "talle habilitado") : "talle"
                    }
                    onClick={() => data.sizes.includes('l') && setSizeSelected("l")}
                  >
                    l
                  </div>
                  <div
                    className={
                      data.sizes.includes("xl") ? (sizeSelected === 'xl' ? "talle selected" : "talle habilitado") : "talle"
                    }
                    onClick={() => data.sizes.includes('xl') && setSizeSelected("xl")}
                  >
                    xl
                  </div>
                  <div
                    className={
                      data.sizes.includes("xxl") ? (sizeSelected === 'xxl' ? "talle selected" : "talle habilitado") : "talle"
                    }
                    onClick={() => data.sizes.includes('xxl') && setSizeSelected("xxl")}
                  >
                    xxl
                  </div>
                </div>
                <span>${data.price}</span>
              </div>
              <button
                className="btn btn-background"
                onClick={() => {
                  if (quantity > 0) {
                    removeFromCart(data._id);
                    setQuantity(0);
                  } else {
                    if(sizeSelected){
                      increaseCartQuantity(data._id, sizeSelected);
                      setQuantity(quantity + 1);
                    }else{
                      setSelectedSizeAlert(true)
                      setTimeout(()=> setSelectedSizeAlert(false), 3000)
                    }
                  }
                }}
              >
                {quantity > 0 ? "Remove" : "Add to cart"}
              </button>
              {selectedSizeAlert && <p className="error" style={{'width': '100%', 'textAlign': 'center', 'fontSize': '1rem'}}>Seleccione que talle desea</p>}
            </div>
          </div>
        </article>
      </section>
    );
  } else {
    return null;
  }
};

export default ProductModal;
