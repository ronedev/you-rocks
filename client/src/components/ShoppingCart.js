import React from 'react'

const ShoppingCart = ({isOpen}) => {
  if(isOpen){
    return (
        <div>ShoppingCart</div>
      )
  }else{
    return null
  }
}

export default ShoppingCart