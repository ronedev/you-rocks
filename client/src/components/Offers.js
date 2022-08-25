import React, {useEffect, useState} from "react";
import { getProducts } from "../services";
import ItemCard from "./ItemCard";

const Offers = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(()=>{
    async function loadProducts(){
      setLoading(true)
      const response = await getProducts()
      
      if(response.status === 200){
        setProducts(response.data)
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  return (
    <section className="container">
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
      ):
        products.map(item => (
          <ItemCard item={item} />
        ))
      }
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
