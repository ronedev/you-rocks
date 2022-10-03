import React, { useState } from "react";
import Swal from 'sweetalert2';
import deleteIcon from "../../images/icons/delete.png";
import closeIcon from "../../images/icons/cerrar.png";
import { updateProduct } from "../../services/product";

const UpdateProductModal = ({ isOpened, setIsOpened, data, setModalData }) => {
  const [deletedImages, setDeletedImages] = useState([])

  const handleChange = (e)=> {
    const {name, value} = e.target
    setModalData(prev => {return {...prev, [name]: value }})
  }

  const handleChangeSizes = (e)=>{
    const {value} = e.target
    setModalData(prev => {return {...prev, sizes: prev.sizes.includes(value) ? prev.sizes.filter(size => size !== value) : [...prev.sizes, value]}})
  }

  const handleChangeFiles = (e)=>{
    const {files} = e.target
    setModalData(prev => {return {...prev, newImage: files[0]}})
  }

  const handleSubmit = async e =>{
    e.preventDefault()
    if(deletedImages.length > 0){
      setModalData(prev => {return {...prev, 'deletedImages': deletedImages}})
    }
    const res = await updateProduct(data)
    if(res.status === 200){
      setIsOpened(false)
      Swal.fire({
        icon: 'success',
        position: 'top',
        text: 'Se ha actualizado el producto con exito',
        confirmButtonText: 'Aceptar'
      }).then(() => window.location.reload())
    }
  }
  
  if (isOpened) {
    return (
      <section
        className={isOpened ? "modal-container visible" : "modal-container"}
      >
        <div className="modal-close" onClick={() => setIsOpened(false)}></div>
        <form onSubmit={handleSubmit} method='post' className="product-form" encType="multipart/form-data">
          <div className="close-icon-container">
            <img
              src={closeIcon}
              alt="Cerrar modal icono"
              id="close-icon"
              onClick={() => setIsOpened(false)}
            />
          </div>
          <div className="campos-flex">
            <div className="campo">
              <label id="title">Titulo del producto</label>
              <input type="text" name="title" value={data.title} onChange={handleChange}/>
            </div>
            <div className="campo">
              <label id="price">Precio</label>
              <input type="number" name="price" value={data.price} onChange={handleChange}/>
            </div>
            <div className="campo">
              <label id="quantity">En stock</label>
              <input type="number" name="quantity" value={data.quantity} onChange={handleChange}/>
            </div>
          </div>
          <div className="campo">
            <label id="description">Descripción</label>
            <textarea name="description" id="description" onChange={handleChange}>
              {data.description}
            </textarea>
          </div>
          <div
            className="campos-flex select"
          >
            <div className="campo select">
              <label id="category">Seleccione categoria</label>
              <select name="category" id="category" onChange={handleChange}>
                <option value="chaqueta" selected={data.category === 'chaqueta' ? true : false}>Chaqueta</option>
                <option value="abrigo" selected={data.category === 'abrigo' ? true : false}>Abrigo</option>
                <option value="remera" selected={data.category === 'remera' ? true : false}>Remera</option>
                <option value="camisa" selected={data.category === 'camisa' ? true : false}>Camisa</option>
                <option value="saco" selected={data.category === 'saco' ? true : false}>Saco</option>
                <option value="pantalon" selected={data.category === 'pantalon' ? true : false}>Pantalon</option>
              </select>
            </div>
            <div className="campo">
              <label id="gender">Seleccione el genero</label>
              <div className="campo-checkbox-radio">
                <label id="female">Female</label>
                <input type="radio" value="female" name="gender" checked={data.gender === 'female' ? true : false} onChange={handleChange}/>
              </div>
              <div className="campo-checkbox-radio">
                <label id="male">Male</label>
                <input type="radio" value="male" name="gender" checked={data.gender === 'male' ? true : false} onChange={handleChange}/>
              </div>
              <div className="campo-checkbox-radio">
                <label id="unisex">Unisex</label>
                <input type="radio" value="unisex" name="gender" checked={data.gender === 'unisex' ? true : false} onChange={handleChange}/>
              </div>
            </div>
            <div className="campo">
              <label id="offer">Esta en oferta</label>
              <div className="campo-checkbox-radio">
                <label>Si</label>
                <input type="radio" value={true} name='offer' onChange={handleChange} checked={data.offer === true || data.offer === 'true' ? true : false}/>
              </div>
              <div className="campo-checkbox-radio">
                <label>No</label>
                <input type="radio" value={false} name='offer' onChange={handleChange} checked={data.offer === false || data.offer === 'false' ? true : false}/>
              </div>
            </div>
          </div>
          <div
            className="campos-flex checkbox-radio"
          >
            <div className="campo">
              <label id="sizes">Talles disponibles</label>
              <div className="campo-checkbox-radio">
                <label id="s">S</label>
                <input type="checkbox" value="s" id="s" checked={data.sizes?.includes('s') ? true : false } onChange={handleChangeSizes}/>
              </div>
              <div className="campo-checkbox-radio">
                <label id="m">M</label>
                <input type="checkbox" value="m" id="m" checked={data.sizes?.includes('m') ? true : false } onChange={handleChangeSizes}/>
              </div>
              <div className="campo-checkbox-radio">
                <label id="l">L</label>
                <input type="checkbox" value="l" id="l" checked={data.sizes?.includes('l') ? true : false } onChange={handleChangeSizes}/>
              </div>
              <div className="campo-checkbox-radio">
                <label id="xl">XL</label>
                <input type="checkbox" value="xl" id="xl" checked={data.sizes?.includes('xl') ? true : false } onChange={handleChangeSizes}/>
              </div>
              <div className="campo-checkbox-radio">
                <label id="xxl">XXL</label>
                <input type="checkbox" value="xxl" id="xxl" checked={data.sizes?.includes('xxl') ? true : false } onChange={handleChangeSizes}/>
              </div>
            </div>
            <div className="campo select">
              <label id="enterprise">Seleccione empresa</label>
              <select name="enterprise" id-="enterprise" onChange={handleChange}>
                <option value="puma" selected={data.enterprise === 'puma' ? true : false}>Puma</option>
                <option value="adidas" selected={data.enterprise === 'adidas' ? true : false}>Adidas</option>
                <option value="nike" selected={data.enterprise === 'nike' ? true : false}>Nike</option>
                <option value="prada" selected={data.enterprise === 'prada' ? true : false}>Prada</option>
                <option value="gucci" selected={data.enterprise === 'gucci' ? true : false}>Gucci</option>
              </select>
            </div>
          </div>
          <div className="campo">
            <label id="images">Imagenes</label>
            <div className="campos-flex imagenes">
              {data.images?.map((image) => (
                <>
                  <div className="imageContainer">
                    <img src={image} alt="Imagen del producto" />
                    <div className="delete" onClick={()=> {
                      Swal.fire({
                        title: '¿Desea eliminar la imagen?',
                        text: 'Si elimina la imagen se eliminara de forma permanente, ¿esta seguro de hacerlo?',
                        confirmButtonText: 'Eliminar',
                        showCancelButton: true,
                        cancelButtonText: 'Cancelar',
                        icon: 'warning',
                      }).then(result=>{
                        if(result.isConfirmed){
                          setDeletedImages(prev => [...prev, image])
                          setModalData(prev => {return {...prev, images: prev.images.filter(img => img !== image), deletedImages: [...deletedImages, image]}})
                        }
                      })
                    }}>
                      <img src={deleteIcon} alt="Eliminar imagen" />
                    </div>
                  </div>
                </>
              ))}
            </div>
            {data.images.length > 3 ? (
              <p>Hay un maximo de 4 imagenes por producto</p>
            ) : (
              <input type="file" name='newImage' accept="image/png,image/jpeg,image/webp" onChange={handleChangeFiles}/>
            )}
          </div>
          <button className="btn btn-background">Actualizar producto</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

export default UpdateProductModal;
