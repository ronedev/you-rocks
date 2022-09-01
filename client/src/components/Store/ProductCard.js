import React from "react";

const ProductCard = ({ product, setModalData, setIsOpened }) => {

  return (
    <>
      <article className="itemContainer product">
        <div
          className="image"
          style={{ backgroundImage: `url(../${product.images[0]})` }}
        ></div>
        <div className="title-price">
          <h3>{product.title}</h3>
          <span>${product.price}</span>
        </div>
        <div className="description">
          <span>
            {product.description.length > 60
              ? product.description.substr(0, 60) + "..."
              : product.description}
          </span>
        </div>
        <div className="sizes">
          <div
            className={
              product.sizes.includes("s") ? "talle habilitado" : "talle"
            }
          >
            s
          </div>
          <div
            className={
              product.sizes.includes("m") ? "talle habilitado" : "talle"
            }
          >
            m
          </div>
          <div
            className={
              product.sizes.includes("l") ? "talle habilitado" : "talle"
            }
          >
            l
          </div>
          <div
            className={
              product.sizes.includes("xl") ? "talle habilitado" : "talle"
            }
          >
            xl
          </div>
          <div
            className={
              product.sizes.includes("xxl") ? "talle habilitado" : "talle"
            }
          >
            xxl
          </div>
        </div>
        <button className="btn btn-background" onClick={()=>{
          setModalData(product)
          setIsOpened(true)
        }}>Agregar al carrito</button>
      </article>
    </>
  );
};

export default ProductCard;
