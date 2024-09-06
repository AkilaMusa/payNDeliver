"use client"

import { createContext, useState, useContext, useEffect } from "react";
import { useSession } from "next-auth/react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

// Custom hook for localStorage
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.log(error);
    }
  }, [key]);

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", []);
  const { data: session } = useSession();

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item._id === product._id);
      
      if (existingItemIndex > -1) {
        // If the item already exists, increase its quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1
        };
        return updatedCart;
      } else {
        // If it's a new item, add it to the cart
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item._id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item._id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const saveCartToDatabase = async () => {
    if (!session?.user?.id) {
      console.log("User not authenticated");
      return;
    }

    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: session.user.id,
          products: cart.map(item => ({
            productId: item._id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save cart');
      }

      const data = await response.json();
      console.log('Cart saved successfully:', data);
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      clearCart, 
      updateQuantity,
      saveCartToDatabase
    }}>
      {children}
    </CartContext.Provider>
  );
};