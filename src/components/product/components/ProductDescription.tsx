'use client'
import React, { useState, useContext } from 'react'
import  Product  from '../../../app/types'
import SizeRadiogroup from './SizeRadiogroup';
import QuantityProductsBlock from './QuantityProductsBlock';
import Button from '@/components/header/components/Button';
import ColorRadiogroup from './ColorRadioGroup';
import { BasketContext } from '@/app/BasketContext';


interface ProductCardProps {
  product: Product; // Используем интерфейс продукта в качестве типа для пропса product
}

function ProductDescription({ product }: ProductCardProps) {

  const { id, vendorCode, title, price, image, category, type, discount, size, color } = product;

  const [currentSelectedSize, setSelectedSize] = useState(size[0]);
  const [currentSelectedColor, setSelectedColor] = useState(color[0]);
  const [currentQuantity, setQuantity] = useState(1);
  const { addToCart } = useContext(BasketContext)
  const [showMessage, setShowMessage] = useState(false);

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
    const cartData: Product = {
      id: `${id}-${currentSelectedSize}-${currentSelectedColor}`,
      vendorCode,
      title,
      price,
      image,
      category,
      type,
      discount,
      size,
      color,
      selectedSize: currentSelectedSize,
      selectedColor: currentSelectedColor,
      quantity: currentQuantity,
    };
    addToCart(cartData);
    setSelectedSize(size[0]);
    setSelectedColor(color[0]);
    setQuantity(1);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    },3000)
    console.log(cartData)
  };

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

      <SizeRadiogroup group={size} size={currentSelectedSize} onChange={handleSizeChange} />
      <ColorRadiogroup group={color} color={currentSelectedColor} onChange={handleColorChange} />
      <QuantityProductsBlock selectedQuantity={currentQuantity} onChange={handleQuantityChange} />
      <Button title={'Додати до кошика'} textSize='14' onClick={handleAddToCart} />
      {showMessage &&
        <div className='' >
          <p className='text-sm text-powder-red'>Товар успішно додан до кошика!</p>
        </div>
      }

    </div>
  )
}

  export default ProductDescription;
