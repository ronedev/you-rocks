import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCard = ({ item }) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useContext(CartContext);

  const [quantity, setQuantity] = useState(getItemQuantity(item._id));
  const [maxQuantityAlert, setMaxQuantityAlert] = useState(false)

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
      <div className="price">
        <span>${item.price}</span>
        <div className="btnContainer">
          {maxQuantityAlert && <p className="error">Hay un maximo de 5 prendas por producto, para compras por mayor comuniquese con nosotros. Gracias</p>}
          <button
            className="btn btn-background"
            onClick={() => {
              if (quantity > 0) {
                removeFromCart(item._id);
                setQuantity(0);
              } else {
                increaseCartQuantity(item._id);
                setQuantity(quantity + 1);
              }
            }}
          >
            {quantity > 0 ? "Remove from cart" : "Add to cart"}
          </button>
          {quantity > 0 && (
            <div className="btnQuantityContainer">
              <button className="btn btn-background small" onClick={()=>{
                if(quantity !== 1){
                  decreaseCartQuantity(item._id)
                  setQuantity(quantity - 1)
                }else{
                  removeFromCart(item._id)
                  setQuantity(0)
                }
              }}>-</button>
              <span style={{'fontSize': '2rem'}}>{quantity}</span>
              <button className="btn btn-background small" onClick={()=>{
                if(quantity < 5){
                  increaseCartQuantity(item._id)
                  setQuantity(quantity + 1)
                }else{
                  if(!maxQuantityAlert){
                    setMaxQuantityAlert(true)
                    setTimeout(()=> setMaxQuantityAlert(false), 6000)
                  }
                }
              }}>+</button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ItemCard;
