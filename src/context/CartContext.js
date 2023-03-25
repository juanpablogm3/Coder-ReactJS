import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totals, setTotals] = useState({ qty: 0, total: 0 });

    useEffect(() => {
        const localStorageCart = JSON.parse(localStorage.getItem('cart'));
        if (localStorageCart) {
          setCart(localStorageCart);
        }
      }, []);

    useEffect(() => {
        let qtyInitial = 0;
        let total = 0;
        cart.forEach((product) => {
            qtyInitial += product.quantity;
            total += product.quantity * product.price;
        });
        setTotals({ qty: qtyInitial, total: total });
        localStorage.setItem('cart', JSON.stringify(cart));        
    }, [cart]);


    const addProduct = (product, quantity) => {
        if (isInCart(product.id)) {
            setCart(
                cart.map((productCart) => {
                    if (productCart.id === product.id)
                    return { ...productCart, quantity };
                return productCart;
                })
            );
        } else {
            setCart([...cart, { ...product, quantity }]);
        }
    };

    const removeProduct = (id) =>{
        setCart(cart.filter((product) => {
            return product.id !== id;
        }));
    };
    
    const isInCart = (id) => {
    return cart.some((product) => product.id === id);
    };
    

    const clear = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, totals, addProduct, removeProduct, clear }}>
            {children}
        </CartContext.Provider>
    );
};