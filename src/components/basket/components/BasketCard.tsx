import React, {useContext} from 'react'
import Image from 'next/image'
import { BasketContext } from '../../../app/BasketContext'
import OrderList from './OrderList'
import Product from '@/app/types';

function calculateTotalPrice(cartItems: Product[]) {
  return cartItems.reduce((total, item) => {
    const itemTotal = item.discount ?
      Math.round(item.price - (item.price * item.discount / 100)) * (item.quantity || 1)
      : item.price * (item.quantity || 1);
    return total + itemTotal;
  }, 0);
}

function BasketCard() {
  const { cartItems } = useContext(BasketContext)
  const totalPrice = calculateTotalPrice(cartItems);

  return (
    <div className='w-[378px]  bg-white-grey p-[15px]'>
      <div className='h-[380px] overflow-scroll'>
        <OrderList hidden={true} />
      </div>

      <div className="grid grid-cols-2 grid-rows-3 gap-4 my-[15px]">
        <div className="">Сума: </div>
        <div className="">
          {cartItems.length ? (
            <span className='text-md'>{totalPrice}.00 грн</span>
          ) : null}
        </div>
        <div className="">Доставка</div>
        <div className="">за тарифами Нової Пошти</div>
        <div className="">Итого:</div>
        <div className="">
          {cartItems.length ? (
            <span className='text-md'>{totalPrice}.00 грн</span>
          ) : null}
        </div>
      </div>

      <div className='py-[10px] flex justify-end'>
        <button className='bg-powder-pink p-[10px]'>Редагувати замовлення</button>
      </div>

    </div>
  )
}

export default BasketCard
