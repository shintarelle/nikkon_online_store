'use client'
import React, { useContext, useState } from 'react'
import Button from './components/Button'
import Image from 'next/image'
import Link from 'next/link'
import { menu } from '../../../data.js'

import { Tenor_Sans } from 'next/font/google'
import SearchInput from './components/SearchInput'
import Burger from './components/Burger'
import Modal from './components/Modal' // Импортируем компонент модального окна
import { BasketContext } from '@/app/BasketContext'
import { useRouter } from 'next/navigation'

const tenorSans = Tenor_Sans({
  subsets: ['latin'],
  weight: '400',
})

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false) // Состояние для открытия и закрытия модального окна
  const { cartItems } = useContext(BasketContext)
  const router = useRouter()

  // Функция для открытия модального окна
  const openModal = () => {
    setIsModalOpen(true)
  }

  // Функция для закрытия модального окна
  const closeModal = () => {
    setIsModalOpen(false)
  }
  const handleClicktoBasket = () => {
    router.push('/checkout')
  }
  return (
    <header className="">
      <div className="hidden md:block h-6 bg-dark-grey ">
        <ul className="flex justify-center gap-10 ">
          <li className="">
            <a
              className="text-xs no-underline text-white leading-6 font-medium tracking-wider"
              href="#"
              target="_blank"
            >
              Наші контакти
            </a>
          </li>
          <li className="">
            <a
              className="text-xs no-underline text-white leading-6 font-medium tracking-wider"
              href="#"
              target="_blank"
            >
              Доставка і оплата
            </a>
          </li>
        </ul>
      </div>

      <div className="h-[80px] flex justify-between gap-5 px-[15px] max-w-[1300px] mx-auto">
        <div className="hidden md:flex flex-col justify-between">
          <a
            className={`text-sm no-underline text-black ${tenorSans.className}`}
            href="tel:+380635283957"
          >
            +380635283957
          </a>
          <span className={`text-xs text-light-grey ${tenorSans.className}`}>
            {' '}
            ПН-ПТ | 9:00-18:00
          </span>
          <Button
            title={'Зворотній дзвінок'}
            textSize={'sm'}
            onClick={openModal}
          />{' '}
          {/* Добавляем onClick для открытия модального окна */}
        </div>

        <div className="flex justify-center items-center">
          <Link href={`/`}>
            <Image
              className="w-[100px] h-[30px] sm:w-[150px] sm:h-[45px] md:w-[200px] md:h-[60px] "
              priority
              src={'/logo.png'}
              alt="Logo"
              width="200" //!!!!
              height="70" //переопределяются
            />
          </Link>
        </div>

        <ul className="flex justify-between items-center gap-6">
          <li className="self-center">
            {/* продумать адаптив когда відкрит пошук */}
            <SearchInput />
          </li>
          <li className="self-center flex">
            <Image
              src="/user.svg"
              alt="login"
              width="20"
              height="20"
              className="w-[22px] h-[22px]"
            />
            <span className="underline hidden ml:inline-block">
              Особистий кабінет
            </span>
          </li>
          <li className="self-center">
            <Image
              src="/heart.svg"
              alt="wishlist"
              width="20"
              height="20"
              className="w-[22px] h-[22px]"
            />
          </li>
          <li className="self-center flex justify-between items-center">
            <button className="relative" onClick={handleClicktoBasket}>
              <Image
                src="/bag.svg"
                alt="busket"
                width="20"
                height="20"
                className="w-[22px] h-[22px]"
              />
              {cartItems.length ? (
                <span className="w-[18px] h-[18px] rounded-full bg-powder-pink text-[11px] absolute top-[-7px] right-[-14px]">
                  {cartItems.reduce((total, product) => {
                    if (product.quantity !== undefined) {
                      return total + product.quantity
                    }
                    return total
                  }, 0)}
                </span>
              ) : null}
            </button>
          </li>
          <Burger />
        </ul>
      </div>
      <nav className="hidden md:flex justify-center h-[50px] max-w-[1300px] mx-auto">
        <ul className="flex gap-0 lg:gap-7  my-0 mx-auto self-center">
          {menu.map((item) => (
            <li className="" key={item.name}>
              <a
                href={item.link}
                className="block uppercase font-semibold text-sm no-underline text-black px-[8px] ml:px-[14px] py-[5px] border-b-[5px] border-transparent hover:border-powder-pink"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Передаем состояние открытия модального окна и функцию для закрытия */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  )
}

export default Header
