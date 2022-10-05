import React, { useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import { deleteProduct } from "../../services/product";

const ItemCard = ({ item, setIsOpened, setModalData }) => {
  const { adminUser } = useContext(UserContext);

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    cartItems,
    removeFromCart,
  } = useContext(CartContext);

  const [quantity, setQuantity] = useState(getItemQuantity(item._id));
  const [maxQuantityAlert, setMaxQuantityAlert] = useState(false);

  useEffect(() => {
    if (cartItems.find((product) => product.id === item._id)) {
      setQuantity(getItemQuantity(item._id));
    } else {
      setQuantity(0);
    }
  }, [cartItems]);

  return (
    <article className="itemContainer">
      <div
        className="image"
        style={{ backgroundImage: `url(../${item.images[0]})` }}
      ></div>
      <div className="description">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      <div className="price" style={item.offer ? { gap: "3rem" } : {}}>
        <div className="price-container">
          {item.offer ? (
            <>
              <p className="actual-price">${item.price}</p>
              <p className="offered-price">${item.price - item.price * 0.2}</p>
            </>
          ) : (
            `$${item.price}`
          )}
        </div>
        <div className="btnContainer">
          {maxQuantityAlert && (
            <p className="error">
              Hay un maximo de 5 prendas por producto, para compras por mayor
              comuniquese con nosotros. Gracias
            </p>
          )}
          {adminUser ? (
            <>
              <button
                className="btn btn-background"
                onClick={() => {
                  setModalData(item);
                  setIsOpened(true);
                }}
              >
                Modificar producto
              </button>
              <button
                className="btn btn-background"
                style={{ backgroundColor: "red", marginTop: "1rem" }}
                onClick={()=>{
                  Swal.fire({
                    icon: 'warning',
                    title: '¿Desea elminar el producto?',
                    text: 'Si elimina este producto no se podra recuperar luego ¿Esta seguro?',
                    confirmButtonText: 'Eliminar'
                  }).then( async (result) =>{
                    if(result.isConfirmed){
                      const response = await deleteProduct(item._id)
                      if(response.status === 200){
                        Swal.fire({
                          icon: 'success',
                          text: 'Se ha eliminado el producto con exito',
                          confirmButtonText: 'Aceptar'
                        }).then(() => window.location.reload())
                      }else{
                        Swal.fire({
                          icon: 'error',
                          text: response.message,
                          confirmButtonText: 'Aceptar'
                        })
                      }
                    }
                  })
                }}
              >
                Eliminar producto
              </button>
            </>
          ) : (
            <>
              <button
                className="btn btn-background"
                onClick={() => {
                  if (quantity > 0) {
                    removeFromCart(item._id);
                    setQuantity(0);
                  } else {
                    setModalData(item);
                    setIsOpened(true);
                  }
                }}
              >
                {quantity > 0 ? "Remove" : "Add to cart"}
              </button>
            </>
          )}
          {quantity > 0 && (
            <div className="btnQuantityContainer">
              <button
                className="btn btn-background small"
                onClick={() => {
                  if (quantity !== 1) {
                    decreaseCartQuantity(item._id);
                    setQuantity(quantity - 1);
                  } else {
                    removeFromCart(item._id);
                    setQuantity(0);
                  }
                }}
              >
                -
              </button>
              <span style={{ fontSize: "2rem" }}>{quantity}</span>
              <button
                className="btn btn-background small"
                onClick={() => {
                  if (quantity < 5) {
                    increaseCartQuantity(item._id);
                    setQuantity(quantity + 1);
                  } else {
                    if (!maxQuantityAlert) {
                      setMaxQuantityAlert(true);
                      setTimeout(() => setMaxQuantityAlert(false), 6000);
                    }
                  }
                }}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ItemCard;
