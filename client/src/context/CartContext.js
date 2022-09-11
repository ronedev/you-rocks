import React, { useState } from "react";
import ShoppingCart from "../components/ShoppingCart";

export const CartContext = React.createContext({})

export const CartProvider = ({children})=>{
    
    const [cartItems, setCartItems] = useState([])

    const [isOpen, setIsOpen] = useState(false)

    const cartQuantity = cartItems.reduce((prevItem, currentItem)=> prevItem + currentItem.quantity, 0)

    const openCart = ()=> setIsOpen(true)
    const closeCart = ()=> setIsOpen(false)

    function getItemQuantity(id){
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id){
        setCartItems(prevItem => {
            if(prevItem.find(item => item.id === id) == null){
                return [...prevItem, {id, quantity: 1}]
            }else{
                return prevItem.map(item =>{
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id){
        setCartItems(prevItem =>{
            if(prevItem.find(item => item.id === id)?.quantity === 1){
                return prevItem.filter(item => item.id !== id)
            }else{
                return prevItem.map(item =>{
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id){
        setCartItems(prevItem =>{
            return prevItem.filter(item => item.id !== id)
        })
    }

    return(
        <CartContext.Provider value={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            cartItems,
            cartQuantity,
            openCart,
            closeCart
        }}>
            {children}
            <ShoppingCart isOpen={isOpen} />
        </CartContext.Provider>
    )
}