"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartContextType {
  cartItems: any[];
  setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  setCartItems: () => {},
  cartCount: 0,
  setCartCount: () => {},
});

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [cartCount, setCartCount] = useState(0);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
