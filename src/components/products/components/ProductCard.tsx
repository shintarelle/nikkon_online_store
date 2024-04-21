'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Button from '@/components/header/components/Button';
import Product from '../../../app/types'
import { usePathname, useRouter } from 'next/navigation';


// Определяем интерфейс для компонента ProductCard
interface ProductCardProps {
  product: Product; // Используем интерфейс продукта в качестве типа для пропса product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const pathname = usePathname() //получаем путь
  const router = useRouter()
  const { id, vendorCode, title, price, image, category, type, discount } = product; // Деструктурируем свойства продукта
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const handleBuy = () => {
    router.push(`/${id}`);
  };

  return (
    <div className="p-[10px] max-w-[310px] relative bg-white product absolute top-0 left-0 mx-auto">
      <div className="flex flex-col ">
        <Link href={`/${id}`} className="block  relative overflow-hidden">
          <Image
            src={image[0]}
            alt="link"
            width={100}
            height={100}
            className="w-full h-auto aspect-[2.8/4]"
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {discount ? (
            <span className="absolute w-[60px] h-[30px] bottom-[10px] right-0 bg-light-red flex justify-center align-center text-white font-bold rounded-l-xl">{`-${discount}%`}</span>
          ) : null}
        </Link>
        <div className="flex flex-col my-3">
          <h4 className="text-xl font-medium mb-3 h-[115px] overflow-hidden">
            {title}
          </h4>
          <div className="flex justify-between">
            {discount ? (
              <div>
                <span className="text-powder-red text-md">{`${Math.round(price - (price * discount) / 100)}.00 грн`}</span>{' '}
                <span className="line-through text-xs">{`${price}.00 грн`}</span>
              </div>
            ) : (
              <span className="text-md">{`${price}.00 грн`}</span>
            )}
            <span className="text-light-grey">{`art:  ${vendorCode}`}</span>
          </div>
        </div>
        <div className="w-full flex justify-between hidden product-btn p-[10px] pt-4  absolute -bottom-[66px] left-0 z-9 bg-white">
          <Button title="Купити" textSize="base" onClick={handleBuy} />
          <Image
            src={isClicked ? '/heart-solid.svg' : '/heart.svg'}
            alt="wishlist"
            width="20"
            height="20"
            className="w-[22px] h-[22px] self-center"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
