import React, { useState } from "react";
import searchIcon from "../../images/icons/search.png";
import filterIcon from "../../images/icons/filter.png";
import downArrowIcon from "../../images/icons/down-arrow.png";

const Filters = () => {
  const [filter, setFilter] = useState(false);
  const [order, setOrder] = useState(false);

  return (
    <>
      <div className="filters-container">
        <div className="filter">
          <button className="btn btn-border" onClick={() => setFilter(!filter)}>
            Filter <img src={filterIcon} alt="Icono de filtrado" />
          </button>
          <div className={filter ? "order-options aparecer" : "order-options none"}>
            <div className="options">
              <button>Ofertas</button>
              <button>Masculino</button>
              <button>Femenino</button>
              <button>Unisex</button>
            </div>
          </div>
        </div>
        <div className="order">
          <button
            className="btn btn-background"
            onClick={() => setOrder(!order)}
          >
            Order by{" "}
            <img src={downArrowIcon} alt="Icono de flechas hacia abajo" />
          </button>
          <div className={order ? "order-options aparecer" : "order-options none"}>
            <div className="options">
              <button>Menor precio</button>
              <button>Mayor precio</button>
              <button>Mas nuevo</button>
              <button>Mas antiguo</button>
            </div>
          </div>
        </div>
        <div className="btn btn-border">
          <input type="text" name="search" id="search" placeholder="Search" />
          <img src={searchIcon} alt="Icono de buscar" />
        </div>
      </div>
    </>
  );
};

export default Filters;
