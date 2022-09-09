import React, { useContext } from "react";
import cartIcon from '../images/icons/cart.png'
import { UserContext } from "../context/UserContext";
import { logoutUser } from "../services/user";

const Navbar = () => {

  const { actualUser, setActualUser } = useContext(UserContext)

  async function logout(){
    const res = await logoutUser()
    if(res.success){
      setActualUser(null)
    }
  }
  
  return (
    <section className="container">
      <nav className="navbar">
        <div className="enlaces">
          <a href="/" id="logo">
            You Rock
          </a>
          <ul className="links">
            <a href="/">Home</a>
            <a href="/store">Products</a>
            <a href="/about">About Us</a>
          </ul>
        </div>
        {actualUser ? (
          <div className="authentication">
            <button className="cart-btn">
              <img src={cartIcon} alt="Carrito de compras" />
              <div className="cart-quantity"><p>2</p></div>
            </button>
          <p>
            <span>
              <button onClick={logout}>| Logout</button>
            </span>
          </p>
        </div>
        ): (
          <div className="authentication">
          <p>
            <a href="/signup">Sing up</a>{" "}
            <span>
              <a href="/login">| Login</a>
            </span>
          </p>
        </div>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
