'use client'
import React, { useState } from 'react'
import Product from '../../../app/types'
import SizeRadiogroup from './SizeRadiogroup';
import QuantityProductsBlock from './QuantityProductsBlock';
import Button from '@/components/header/components/Button';
import ColorRadiogroup from './ColorRadioGroup';

interface ProductCardProps {
  product: Product; // Используем интерфейс продукта в качестве типа для пропса product
}

function ProductDescription({ product }: ProductCardProps) {

  const { vendorCode, title, price, image, category, type, discount, size, color } = product;

  const [selectedSize, setSelectedSize] = useState(size[0]);
  const [selectedColor, setSelectedColor] = useState(color[0]);
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (quantity: number) => {
    setQuantity(quantity);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor || !quantity) {
      console.error('Please select size, color, and quantity');
      return <h1 className='text-powder-red'>Please select size, color, and quantity</h1>;
    }
    // Собираем все данные о продукте
    const selectedProduct = {
      vendorCode,
      title,
      price,
      image,
      category,
      type,
      discount,
      selectedSize,
      selectedColor,
      quantity,
    };
    console.log(selectedProduct);
    // Передаем данные в компонент корзины или обработчик добавления в корзину
    // Например, передаем их через пропсы в компонент корзины
    // <CartComponent product={selectedProduct} />
  };
  // if (!product) {
  //   return <h1>Продукт не найден</h1>;
  // }

  return (
    <div className='flex flex-col gap-6 "md:max-w-[300px] lg:max-w-[400px] p-[10px]'>
      <h1>{title}</h1>
      <div className='flex justify-between'>
        {discount ?
          <div>
            <span className='text-powder-red text-md'>{`${Math.round(price - (price * discount / 100))}.00 грн`}</span> <span className='line-through text-xs'>{`${price}.00 грн`}</span>
          </div>
            : <span className='text-md'>{`${price}.00 грн`}</span>}
      </div>
      <p className='text-light-grey'>{`articul:  ${vendorCode}`}</p>

      <SizeRadiogroup group={size} size={selectedSize} onChange={handleSizeChange} />
      <ColorRadiogroup group={color} color={selectedColor} onChange={handleColorChange} />
      <QuantityProductsBlock selectedQuantity={quantity} onChange={handleQuantityChange} />
      <Button title={'Додати до кошика'} textSize='14' onClick={handleAddToCart} />

      {(!selectedSize || !selectedColor || !quantity) ?
      <h1 className='text-powder-red'>Please select size, color, and quantity</h1>
        : null}

    </div>
  )
}

export default ProductDescription
