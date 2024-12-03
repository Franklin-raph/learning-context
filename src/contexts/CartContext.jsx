import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // const addToCart = (item) => {
    //     setCart((prevCart) => [...prevCart, item]);
    // };

    const addToCart = (product) => {
        setCart((prevCart) => {
          const existingProduct = prevCart.find((item) => item.id === product.id);
    
          if (existingProduct) {
            return prevCart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          }
    
          return [...prevCart, { ...product, quantity: 1 }];
        });
      };

      const removeFromCart = (productId) => {
        setCart((prevCart) => {
          const existingProduct = prevCart.find((item) => item.id === productId);
    
          if (existingProduct && existingProduct.quantity > 1) {
            return prevCart.map((item) =>
              item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            );
          }
    
          // Remove the product completely if quantity is 1
          return prevCart.filter((item) => item.id !== productId);
        });
      };
    
    // const removeFromCart = (id) => {
    //     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    // };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}