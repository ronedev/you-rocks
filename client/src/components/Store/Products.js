import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductsContext";
import useModal from "../../hooks/useModal";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import rightIcon from '../../images/icons/right.png'
import leftIcon from '../../images/icons/left.png'
import ItemCard from "../Home/ItemCard";

const Products = () => {
  const {
    actualAction,
    data,
    totalPages,
    limitProducts,
    setLimitsProducts,
    getAllProducts,
    getOfferedProducts,
    getFemaleProducts,
    getMaleProducts,
    getUnisexProducts,
  } = useContext(ProductContext);

  const {isOpened, setIsOpened, modalData, setModalData} = useModal()

  useEffect(() => {
    switch (actualAction) {
      case "ALL":
        getAllProducts(limitProducts);
        break;
      case "OFFERED":
        getOfferedProducts(limitProducts);
        break;
      case "MALE":
        getMaleProducts(limitProducts);
        break;
      case "FEMALE":
        getFemaleProducts(limitProducts);
        break;
      case "UNISEX":
        getUnisexProducts(limitProducts);
        break;
      default:
        getAllProducts(limitProducts);
    }
  }, [limitProducts]);
  return (
    <section className="products-container">
      <div className="products-grid">
        <ProductModal isOpened={isOpened} setIsOpened={setIsOpened} data={modalData}/>
        {data.products.map((product) => (
          <ItemCard item={product} setModalData={setModalData} setIsOpened={setIsOpened} />
        ))}
      </div>
      <div className="pagination">
        <span
          className={limitProducts === totalPages[0] ? "disabled nextOrPrev" : "nextOrPrev"}
          onClick={() => {
            if (limitProducts !== totalPages[0]) {
              setLimitsProducts(limitProducts - 1);
            }
          }}
        >
          <img src={leftIcon} alt="Pagina anterior" />
        </span>
        {totalPages.map((page) => (
          <span
            className={page === limitProducts ? "selected" : ""}
            onClick={() => {
              if (page !== limitProducts) {
                setLimitsProducts(page);
              }
            }}
          >
            {page}
          </span>
        ))}
        <span
          className={
            limitProducts === totalPages[totalPages.length - 1]
              ? "disabled nextOrPrev"
              : "nextOrPrev"
          }
          onClick={() => {
            if (limitProducts !== totalPages[totalPages.length - 1]) {
              setLimitsProducts(limitProducts + 1);
            }
          }}
        >
          <img src={rightIcon} alt="Siguiente pagina" />
        </span>
      </div>
    </section>
  );
};

export default Products;
