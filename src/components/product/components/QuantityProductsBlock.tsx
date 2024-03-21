'use client'
import React, { useState } from 'react';

function QuantityProductsBlock() {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
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
