import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductsContext";
import ProductCard from "./ProductCard";

const Products = () => {
  const { data, getAllProducts } = useContext(ProductContext);

  const [limitProducts, setLimitsProducts] = useState(1);

  const totalPagesIndex = data.count / 6;
  let totalPages = [];

  for (let index = 1; index <= totalPagesIndex; index++) {
    totalPages.push(index);
  }

  useEffect(() => {
    getAllProducts(limitProducts);
  }, [limitProducts]);
  return (
    <section className="products-container">
      <div className="products-grid">
        {data.products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
      <div className="pagination">
        <span className={limitProducts === totalPages[0] ? 'disabled' : ''}
            onClick={()=> {
                if(limitProducts !== totalPages[0]){
                    setLimitsProducts(limitProducts - 1)
                }
            }}
        >{"<"}</span>
        {totalPages.map((page) => (
          <span className={page === limitProducts ? 'selected' : ''} 
            onClick={()=>{
                if(page !== limitProducts){
                    setLimitsProducts(page)
                }
            }}
          >{page}</span>
        ))}
        <span className={limitProducts === totalPages[totalPages.length - 1] ? 'disabled' : ''}
            onClick={()=> {
                if(limitProducts !== totalPages[totalPages.length - 1]){
                    setLimitsProducts(limitProducts + 1)
                }
            }}
        >{">"}</span>
      </div>
    </section>
  );
};

export default Products;
