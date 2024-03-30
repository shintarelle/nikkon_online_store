'use client'
import React, { useState } from 'react';

interface QuantityProductsBlockProps {
  selectedQuantity: number;
  onChange: (quantity: number) => void;
}

function QuantityProductsBlock({ selectedQuantity, onChange }: QuantityProductsBlockProps) {
  const [quantity, setQuantity] = useState(selectedQuantity);

  const decreaseQuantity = () => {
  if (quantity > 1) {
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
    onChange(newQuantity);
  }
};

const increaseQuantity = () => {
  const newQuantity = quantity + 1;
  setQuantity(newQuantity);
  onChange(newQuantity);
};

  return (
    <div className="">
      <label className="" htmlFor="input-quantity">
        Количество
        <div className="flex items-center border border-white-grey w-[100px]">
          <button type="button" className="flex-grow" onClick={decreaseQuantity}>
            <span className='text-lg'>-</span>
          </button>
          <input
            className=" w-10 text-center"
            type="text"
            name="quantity"
            id="input-quantity"
            value={quantity}
            readOnly
          />
          <button type="button" className="flex-grow" onClick={increaseQuantity}>
            <span>+</span>
          </button>
        </div>
      </label>
    </div>
  );
}

export default QuantityProductsBlock;
