import React, { useContext, useState } from "react";
import cartIcon from "../images/icons/cart.png";
import menuIcon from "../images/icons/menu.png";
import { UserContext } from "../context/UserContext";
import { logoutUser } from "../services/user";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { actualUser, setActualUser } = useContext(UserContext);
  const { cartQuantity, openCart } = useContext(CartContext);

  const [openMenu, setOpenMenu] = useState(false)

  async function logout() {
    const res = await logoutUser();
    if (res.success) {
      setActualUser(null);
    }
  }

  return (
    <section className="container">
      <nav className="navbar">
        <div className="enlaces">
          <a href="/" id="logo">
            You Rock
          </a>
          <img src={menuIcon} alt="Abrir menu" id="menuIcon" onClick={()=> setOpenMenu(!openMenu)} />
          <div className={openMenu ? 'links-authentication aparecer' : 'links-authentication'} >
            <ul className="links">
              <a href="/">Home</a>
              <a href="/store">Products</a>
              <a href="/about">About Us</a>
            </ul>
            {actualUser ? (
              <div className="authentication">
                <button className="cart-btn" onClick={() =>{
                  if(openMenu){
                    setOpenMenu(false)
                  }
                  openCart()
                }}>
                  <img src={cartIcon} alt="Carrito de compras" />
                  <div className="cart-quantity">
                    <p>{cartQuantity}</p>
                  </div>
                </button>
                <p>
                  <span>
                    <button onClick={logout}>| Logout</button>
                  </span>
                </p>
              </div>
            ) : (
              <div className="authentication">
                <button className="cart-btn" onClick={() => {
                  if(openMenu){
                    setOpenMenu(false)
                  }
                  openCart()
                }}>
                  <img src={cartIcon} alt="Carrito de compras" />
                  <div className="cart-quantity">
                    <p>{cartQuantity}</p>
                  </div>
                </button>
                <p>
                  <a href="/signup">Sing up</a>{" "}
                  <span>
                    <a href="/login">| Login</a>
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
