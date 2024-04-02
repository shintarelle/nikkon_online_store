'use client'

import { createContext, useEffect, useState } from 'react'
import Product from './types';

interface BasketContextType {
  cartItems: Product[];
  addToCart: (selectedProduct: Product) => void;
}

export const BasketContext = createContext<BasketContextType>({
  cartItems: [],
  addToCart: (selectedProduct: Product) => {},
});

export const BasketProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Загрузка корзины из Local Storage при загрузке компонента
useEffect(() => {
  const savedCartItems = localStorage.getItem('cartItems');
  if (savedCartItems) {
    setCartItems(prevCartItems => [...prevCartItems, ...JSON.parse(savedCartItems)]);
  }
}, []);

  // Сохранение корзины в Local Storage при изменении
  useEffect(() => {
    console.log('record', cartItems);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (selectedProduct: Product) => {
    console.log("Adding to cart:", selectedProduct);
    setCartItems(prevCartItems => [...prevCartItems, selectedProduct]);
  };
  console.log("Cart items:", cartItems);

  return (
    <BasketContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </BasketContext.Provider>)
}
