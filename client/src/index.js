import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProductProvider } from "./context/ProductsContext";
import { UserProvider } from "./context/UserContext";
import "./sass/App.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </ProductProvider>
);
