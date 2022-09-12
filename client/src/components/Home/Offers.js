import React, { useEffect, useState } from "react";
import {useSwipeable} from 'react-swipeable'
import { getProducts } from "../../services/product.js";
import ItemCard from "./ItemCard";
import useModal from "../../hooks/useModal.js";
import ProductModal from "../Store/ProductModal.js";

const Offers = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [sliderItemSelected, setSliderItemSelected] = useState(0);

  const {isOpened, setIsOpened, setModalData, modalData} = useModal()

  const handlers = useSwipeable({
    onSwipedLeft: (e) =>
      sliderItemSelected !== products.length - 1
        ? setSliderItemSelected((prev) => prev + 1)
        : null,
    onSwipedRight: (e) =>
      sliderItemSelected !== 0 ? setSliderItemSelected((prev) => prev - 1) : null,
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const response = await getProducts();

      if (response.status === 200) {
        setProducts(response.data.products);
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  return (
    <section className="container">
      <ProductModal isOpened={isOpened} setIsOpened={setIsOpened} data={modalData} />
      <div className="banner">
        <p className="right">
          {" "}
          |-20%| |-20%| |-20%| |-20%| |-20%| |-20%| |-20%| |-20%| |-20%| |-20%|
          |-20%| |-20%| |-20%| |-20%| |-20%| |-20%| |-20%| |-20%| |-20%| |-20%|
          |-20%| |-20%| |-20%| |-20%| |-20%| |-20%| |-20%| |-20%| |-20%| |-20%|
          |-20%| |-20%|{" "}
        </p>
      </div>
      {loading ? (
        <p>Esta cargando...</p>
      ) : (
        <>
          <div className="slider">
            {products.map((item, idx) => (
              <div
                className={
                  idx === sliderItemSelected
                    ? "slide-item selected"
                    : idx === sliderItemSelected - 1
                    ? "slide-item previuos"
                    : idx === sliderItemSelected + 1
                    ? "slide-item next"
                    : "slide-item"
                }
                {...(idx === sliderItemSelected && handlers)}
              >
                <ItemCard item={item} setIsOpened={setIsOpened} setModalData={setModalData}/>
              </div>
            ))}
          </div>
          <div className="dot-container">
                {products.map((item, idx)=>(
                  <div className={idx === sliderItemSelected ? "dot selected" : "dot"} onClick={()=> setSliderItemSelected(idx)} ></div>
                ))}
          </div>
        </>
      )}
      <div className="container" style={{marginTop: '3rem'}}>
        <a href="/products" className="btn btn-border">More products</a>
      </div>
      <div className="banner">
        <p className="left">
          {" "}
          |-20%| |-20%| |-20%| |-20%| |-20%| |-20%| |-20%| |-20%| |-20%| |-20%|
          |-20%| |-20%| |-20%| |-20%| |-20%| |-20%| |-20%| |-20%| |-20%| |-20%|
          |-20%| |-20%| |-20%| |-20%| |-20%| |-20%| |-20%| |-20%| |-20%| |-20%|
          |-20%| |-20%|{" "}
        </p>
      </div>
    </section>
  );
};

export default Offers;
