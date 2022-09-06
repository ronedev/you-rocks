import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Aboutus from "./pages/Aboutus.js";
import Contact from "./pages/Contact.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Store from "./pages/Store.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
