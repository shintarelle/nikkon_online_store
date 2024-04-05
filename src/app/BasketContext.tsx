'use client'

import { createContext, useEffect, useState } from 'react'
import Product from './types';

interface BasketContextType {
  cartItems: Product[];
  addToCart: (selectedProduct: Product) => void;
  deleteItemById: (item: string) => void,
  clearAll: () => void
}

export const BasketContext = createContext<BasketContextType>({
  cartItems: [],
  addToCart: (selectedProduct: Product) => { },
  deleteItemById: (itemId: string) => { },
  clearAll: () => {  }
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
    // console.log('record', cartItems);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (selectedProduct: Product) => {
    let existingItemIndex: number = cartItems.findIndex(item => item.id === selectedProduct.id && item.selectedColor === selectedProduct.selectedColor && item.selectedSize === selectedProduct.selectedSize);

    console.log(existingItemIndex);
    const updatedCartItems = [...cartItems];

    if (existingItemIndex !== -1 && updatedCartItems[existingItemIndex].quantity && selectedProduct.quantity) {
      console.log(updatedCartItems);
        updatedCartItems[existingItemIndex].quantity += selectedProduct.quantity;
        setCartItems(updatedCartItems);
    } else {
        setCartItems(prevCartItems => [...prevCartItems, selectedProduct]);
    }
};

  const deleteItemById = (itemId: string) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== itemId));
  };

  const clearAll = () => {
    setCartItems([]);
  };
  console.log("Cart items:", cartItems);

  return (
    <BasketContext.Provider value={{ cartItems, addToCart, deleteItemById, clearAll }}>
      {children}
    </BasketContext.Provider>)
}
