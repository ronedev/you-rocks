import React from 'react'

const UpdateProductModal = ({isOpened, setIsOpened, data}) => {

    console.log(data)
    if(!isOpened) return null
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default UpdateProductModal