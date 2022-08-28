import React from "react";

const Navbar = () => {
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
        <div className="authentication">
          <p>
            <a href="/signup">Sing up</a>{" "}
            <span>
              <a href="/login">| Login</a>
            </span>
          </p>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
