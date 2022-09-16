import React from "react";

const Header = () => {
  return (
    <header className="header contact">
      <div className="header-description">
        <h2>Contact</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum
          neque nec orci tempor, a accumsan turpis ornare. Vivamus vehicula mi
          sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum neque
          nec orci tempor, a accumsan turpis ornare. Vivamus vehicula mi sem.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form action="" className="contact-form">
          <div
            className="campos-flex"
          >
            <div className="campo">
              <label id="name">Name:</label>
              <input type="text" placeholder="Ej: Agustin" name="name" />
            </div>
            <div className="campo">
              <label id="email">Email:</label>
              <input
                type="email"
                placeholder="Ej: correo@correo.com"
                name="email"
              />
            </div>
          </div>
          <div className="campo">
            <label id="message">Message:</label>
            <textarea name="message" id="message"></textarea>
          </div>
        </form>
        <a href="/contact" className="btn btn-border">
          Contact with us
        </a>
      </div>
      <div className="image-container"></div>
    </header>
  );
};

export default Header;
