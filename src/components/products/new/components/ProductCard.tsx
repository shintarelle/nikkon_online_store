import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Button from '@/components/header/components/Button';
import Product from '../../../../app/types'


// Определяем интерфейс для компонента ProductCard
interface ProductCardProps {
  product: Product; // Используем интерфейс продукта в качестве типа для пропса product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { vendorCode, title, price, image, category, type, discount } = product; // Деструктурируем свойства продукта
  return (
    <div className='p-[10px] max-w-[310px] relative bg-white product absolute top-0 left-0'>
      <div className='flex flex-col'>
        <Link href='#' className='relative'>
          <Image src={image} alt='link' width={100} height={100} className='w-full h-auto' />
          {discount ? <span className='absolute w-[60px] h-[30px] bottom-[10px] right-0 bg-light-red flex justify-center align-center text-white font-bold rounded-l-xl'>{`-${discount}%`}</span> : null}
        </Link>
        <div className='flex flex-col my-3' >
          <h4 className='text-xl font-medium mb-1 h-[115px] overflow-hidden' >{title}</h4>
          <div className='flex justify-between'>
            {discount ?
              <div>
                <span className='text-powder-red text-lg'>{`${Math.round(price - (price * discount / 100))}.00 грн`}</span> <span className='line-through text-xs'>{`${price}.00 грн`}</span>
            </div>
            : <span className='text-lg'>{`${price}.00 грн`}</span>}
            <span className='text-light-grey'>{`art:  ${vendorCode}`}</span>
          </div>
        </div>
        <div className='w-full flex justify-between hidden product-btn p-[10px] pt-4  absolute -bottom-[66px] left-0 z-9 bg-white'>
          <Button title="Купити" textSize='base' />
          <Image src='/heart-solid.svg' alt='wishlist' width='20' height='20' className='w-[22px] h-[22px]'/>
        </div>
      </div>
      </div>
  )
}

export default ProductCard
