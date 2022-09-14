import React, { useContext, useEffect, useState } from "react";
import { JellyTriangle } from "@uiball/loaders";
import { CartContext } from "../context/CartContext";
import closeIcon from "../images/icons/cerrar.png";
import { getProductById } from "../services/product.js";
import sizeIcon from "../images/icons/size.png";
import priceIcon from "../images/icons/price.png";
import quantityIcon from "../images/icons/quantity.png";
import deleteIcon from "../images/icons/delete.png";

const ShoppingCart = ({ isOpen }) => {
  const { cartItems, closeCart, removeFromCart } = useContext(CartContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getCartItems() {
    const items = await Promise.all(
      cartItems.map(async (item) => {
        const response = await getProductById(item.id);
        const product = {
          title: response.data.title,
          id: item.id,
          description: response.data.description,
          quantity: item.quantity,
          price: response.data.price,
          size: item.size,
        };
        return product;
      })
    );
    setItems(items);
    setIsLoading(false);
  }

  useEffect(() => {
    setIsLoading(true);
    const loadItems = async () => {
      await getCartItems();
    };
    loadItems();
  }, [cartItems]);

  return (
    <>
    {isOpen && <div className="shopping-background" onClick={()=> closeCart()}></div>}
    <aside className={isOpen ? "shoppingCart visible" : "shoppingCart oculto"}>
      <div className="title">
        <h2>Mi carrito</h2>
        <img src={closeIcon} alt="Cerrar carrito" onClick={() => closeCart()} />
      </div>
      <div className="items-container">
        {isLoading ? (
          <JellyTriangle 
          size={50}
          speed={1.75} 
          color="white" 
         />
        ) : (
          items.map((item) => (
            <div className="item">
              <div className="item-title">
                <h3>{item.title}</h3>
                <img src={deleteIcon} alt="Eliminar prenda" onClick={()=> removeFromCart(item.id)} />
              </div>
              <p>{item.description.length > 30 ? item.description.substr(0, 70) + "..." : item.description}</p>
              <div className="item-icons">
                <span>
                  <img src={sizeIcon} alt="Tamaño de la prenda" />
                  {item.size}
                </span>
                <span>
                  <img src={quantityIcon} alt="Cantidad de prendas" />
                  {item.quantity}
                </span>
                <span>
                  <img src={priceIcon} alt="Precio de la prenda" />
                  ${item.price}
                </span>
              </div>
            </div>
          ))
        )}
        <button className="btn btn-background">Realizar Pago</button>
      </div>
    </aside>
    </>
  );
};

export default ShoppingCart;
