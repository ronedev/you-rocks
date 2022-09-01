import React, { useContext, useState } from "react";
import searchIcon from "../../images/icons/search.png";
import filterIcon from "../../images/icons/filter.png";
import downArrowIcon from "../../images/icons/down-arrow.png";
import reloadIcon from "../../images/icons/reload.png";
import { ProductContext } from "../../context/ProductsContext";

const Filters = () => {
  const [filter, setFilter] = useState(false);
  const [order, setOrder] = useState(false);

  const {
    limitProducts,
    getAllProducts,
    getOfferedProducts,
    getMaleProducts,
    getFemaleProducts,
    getUnisexProducts,
    orderByPrice,
    orderByDate
  } = useContext(ProductContext);

  const loadOfferedProducts = async () => {
    await getOfferedProducts();
    setFilter(false);
  };
  const loadMaleProducts = async () => {
    await getMaleProducts();
    setFilter(false);
  };
  const loadFemaleProducts = async () => {
    await getFemaleProducts();
    setFilter(false);
  };
  const loadUnisexProducts = async () => {
    await getUnisexProducts();
    setFilter(false);
  };

  const loadOrderByProducts = (lowOrHigh)=>{
    orderByPrice(lowOrHigh)
    setOrder(false)
  }

  const loadOrderByDate = (closeOrDistant)=>{
    orderByDate(closeOrDistant)
    setOrder(false)
  }

  return (
    <>
      <div className="filters-container">
        <div className="filter">
          <div className="filter-buttons">
            <button
              className="btn btn-border"
              onClick={() => setFilter(!filter)}
            >
              Filter <img src={filterIcon} alt="Icono de filtrado" />
            </button>
            <button>
              <img
                src={reloadIcon}
                alt="Reload products"
                id="reload"
                onClick={() => getAllProducts(limitProducts)}
              />
            </button>
          </div>
          <div
            className={filter ? "order-options aparecer" : "order-options none"}
          >
            <div className="options">
              <button onClick={() => loadOfferedProducts()}>Ofertas</button>
              <button onClick={() => loadMaleProducts()}>Masculino</button>
              <button onClick={() => loadFemaleProducts()}>Femenino</button>
              <button onClick={() => loadUnisexProducts()}>Unisex</button>
            </div>
          </div>
        </div>
        <div className="order">
          <div className="order-buttons">
            <button
              className="btn btn-background"
              onClick={() => setOrder(!order)}
            >
              Order by{" "}
              <img src={downArrowIcon} alt="Icono de flechas hacia abajo" />
            </button>
            <button>
              <img
                src={reloadIcon}
                alt="Reload products"
                id="reload"
                onClick={() => getAllProducts(limitProducts)}
              />
            </button>
          </div>
          <div
            className={order ? "order-options aparecer" : "order-options none"}
          >
            <div className="options">
              <button onClick={()=> loadOrderByProducts('low')}>Menor precio</button>
              <button onClick={()=> loadOrderByProducts('high')}>Mayor precio</button>
              <button onClick={()=> loadOrderByDate('close')}>Mas nuevo</button>
              <button onClick={()=> loadOrderByDate('distant')}>Mas antiguo</button>
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
