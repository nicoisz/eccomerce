import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false, 
    setIsCartopen: ()=>{}
})

export const CartProvider = ({ children }) => {
    const []

    return <CartContext.Provider>{children}</CartContext.Provider>
}