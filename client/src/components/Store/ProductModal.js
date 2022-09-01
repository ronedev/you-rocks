import React from "react";

const ProductModal = ({ isOpened, setIsOpened, data }) => {
  console.log(isOpened);

  return (
    <section
      className={isOpened ? "modal-container visible" : "modal-container"}
    >
      <div className="modal ">{data.title}</div>
    </section>
  );
};

export default ProductModal;
