import React, { useState } from 'react'


export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item) =>{
        setCart([...cart, item])
    };

    const removeItem = (item) => {
        return function() {
            setCart(cart.filter(x => x !== item))
        }
    };

    const clear = () => {
        setCart ([])
    };

    const isInCart = (id) => {
        return cart.some(x => x.id === id)
    };

    const cartCount = () => {
        return cart.reduce ((acc, prod) => acc + prod.quantity, 0 )
    };

    const cartTotal = () => {
        return cart.reduce ((acc, prod) => acc + prod.quantity * prod.price, 0)
    };

    
    const addSameItem = (i, obj) => {
        cart.splice(i, 1, obj)
        setCart([...cart]);
    };
    
    return (
        <CartContext.Provider value = {
            {
                cart, 
                clear, 
                isInCart, 
                removeItem, 
                addItem, 
                cartCount, 
                addSameItem, 
                cartTotal
            }
        }>
            {children}
        </CartContext.Provider>
    )
}

