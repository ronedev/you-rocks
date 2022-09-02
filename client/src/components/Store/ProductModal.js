import React, { useEffect, useState } from "react";
import closeIcon from '../../images/icons/cerrar.png'

const ProductModal = ({ isOpened, setIsOpened, data }) => {
  const [imageSelected, setImageSelected] = useState(0);

  useEffect(()=>{
    if(isOpened){
      setImageSelected(data.images[0])
    }
  }, [isOpened])

  if(isOpened){
    return (
      <section
        className={isOpened ? "modal-container visible" : "modal-container"}
      >
        <div className="modal-close" onClick={()=>setIsOpened(false)}></div>
        <article className="product-modal">
          <img src={closeIcon} alt="Cerrar modal icono" style={{width: '3rem', cursor: 'pointer'}} onClick={()=> setIsOpened(false)}/>
          <div className="modal-info">
            <div className="images-container">
              <div className="secondary-images">
                {data.images.map(image => (
                    <img src={image} alt="Imagen descriptiva del producto" onClick={()=> setImageSelected(image)} />
                ))}
              </div>
              <img src={imageSelected} alt="Imagen descriptiva del producto" />
            </div>
            <div className="description">
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <div className="sizes-price">
                <div className="sizes">
                <div
              className={
                data.sizes.includes("s") ? "talle habilitado" : "talle"
              }
            >
              s
            </div>
            <div
              className={
                data.sizes.includes("m") ? "talle habilitado" : "talle"
              }
            >
              m
            </div>
            <div
              className={
                data.sizes.includes("l") ? "talle habilitado" : "talle"
              }
            >
              l
            </div>
            <div
              className={
                data.sizes.includes("xl") ? "talle habilitado" : "talle"
              }
            >
              xl
            </div>
            <div
              className={
                data.sizes.includes("xxl") ? "talle habilitado" : "talle"
              }
            >
              xxl
            </div>
                </div>
                <span>${data.price}</span>
              </div>
              <button className="btn btn-background">Agregar al carrito</button>
            </div>
          </div>
        </article>
      </section>
    );
  }else{
    return(null)
  }
};

export default ProductModal;
