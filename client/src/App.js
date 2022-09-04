import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Aboutus from "./pages/Aboutus.js";
import Home from "./pages/Home.js";
import Store from "./pages/Store.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
