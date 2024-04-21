'use client'
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { BasketContext } from '../../../app/BasketContext'
import OrderList from './OrderList'
import Product from '@/app/types'

function calculateTotalPrice(cartItems: Product[]) {
  return cartItems.reduce((total, item) => {
    const itemTotal = item.discount
      ? Math.round(item.price - (item.price * item.discount) / 100) *
        (item.quantity || 1)
      : item.price * (item.quantity || 1)
    return total + itemTotal
  }, 0)
}

function BasketCard() {
  const { cartItems } = useContext(BasketContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const totalPrice = calculateTotalPrice(cartItems)

  const handleEditOrder = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="md:max-w-[378px]  bg-white-grey p-[15px]">
      <div className="max-h-[380px] overflow-scroll relative">
        <OrderList hidden={true} />
      </div>

      <div className="grid grid-cols-2 grid-rows-3 gap-4 my-[15px]">
        <div className="">Сума: </div>
        <div className="">
          {cartItems.length ? (
            <span className="text-md">{totalPrice}.00 грн</span>
          ) : null}
        </div>
        <div className="">Доставка</div>
        <div className="">за тарифами Нової Пошти</div>
        <div className="">Разом:</div>
        <div className="">
          {cartItems.length ? (
            <span className="text-md">{totalPrice}.00 грн</span>
          ) : null}
        </div>
      </div>

      {isModalOpen && (
        <div className="absolute md:fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 relative  md:mx-10 md:my-10">
            <OrderList hidden={false} />
            <button
              className="absolute w-[20px] h-[20px] text-xl md:text-white top-[10px] right-[10px] md:top-[-30px] md:right-[-30px]"
              onClick={handleCloseModal}
            >
              X
            </button>
          </div>
        </div>
      )}

      <div className="py-[10px] flex justify-end">
        <button
          className="bg-powder-pink p-[10px] hover:bg-dark-grey hover:text-white focus:bg-black focus:text-white"
          onClick={handleEditOrder}
        >
          Редагувати замовлення
        </button>
      </div>
    </div>
  )
}

export default BasketCard
