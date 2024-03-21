import React from 'react'

import Product from '../../../app/types'
import SizeRadiogroup from './SizeRadiogroup';
import QuantityProductsBlock from './QuantityProductsBlock';
import Button from '@/components/header/components/Button';

interface ProductCardProps {
  product: Product; // Используем интерфейс продукта в качестве типа для пропса product
}

function ProductDescription({ product }: ProductCardProps) {
  const { vendorCode, title, price, image, category, type, discount, size } = product;
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

      <SizeRadiogroup group={size} />
      <QuantityProductsBlock />
      <Button title={ 'Додати до кошика'} textSize='14'/>
    </div>
  )
}

export default ProductDescription
