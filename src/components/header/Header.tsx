import React from 'react'
import Button from './components/Button'
import Image from 'next/image';

import { Tenor_Sans } from "next/font/google";

const tenorSans = Tenor_Sans({
  subsets: ["latin"],
  weight: '400'
});

const menu = ['Піжами', 'Нічні сорочки', 'Халати', 'Домашні костюми', 'Світшоти', 'Штани та легінси']

function Header() {
  return (
    <header className=''>
      <div className='h-6 bg-dark-grey '>
        <ul className='flex justify-center gap-10 '>
          <li className=''>
            <a className='text-xs no-underline text-white leading-6 font-medium tracking-wider' href='#' target='_blank' >
              Наші контакти
            </a>
          </li>
          <li className=''>
            <a className='text-xs no-underline text-white leading-6 font-medium tracking-wider' href='#' target='_blank' >
              Доставка і оплата
            </a>
          </li>
        </ul>
      </div>
      <div className='h-[80px] flex justify-between gap-5'>
        <div className='flex flex-col justify-between'>
          <a className={`text-sm no-underline text-black ${tenorSans.className}`} href='tel:+380635283957'>+380635283957</a>
          <span className={`text-xs text-light-grey ${tenorSans.className}`}> ПН-ПТ | 9:00-18:00</span>
          <Button title={'Зворотній дзвінок'} textSize={'sm'}></Button>
        </div>
        <div className='flex justify-center align-center'>
          <Image
            priority
            src={'/Logo.jpeg'}
            alt='Logo'
            width='230' //!!!!!!!!!!!!!!!!!!
            height='80' //!!!---- change size of image
          />
        </div>
        <ul className='flex justify-between align-center gap-6'>
          <li className='self-center'>
            <img className='w-[22px] h-[22px] ' src='/search.svg'></img>
          </li>
          <li className='self-center flex'>
            <img className='w-[22px] h-[22px] ' src='/user.svg'></img>
            <span className='underline'>Особистий кабінет</span>

          </li>
          <li className='self-center'>
            <img className='w-[22px] h-[22px]' src='/heart.svg'></img>
          </li>
          <li className='self-center'>
            <img className='w-[22px] h-[22px]' src='/bag.svg'></img>
          </li>
        </ul>

      </div>
      <nav className='flex justify-center h-[50px]'>
        <ul className='flex gap-0 lg:gap-7  my-0 mx-auto self-center'>
          {menu.map(item => (
          <li className='' key={item}>
              <a href='#' className='block uppercase font-semibold text-sm no-underline text-black px-[14px] py-[5px] border-b-[5px] border-transparent hover:border-powder-pink'>{item}</a>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  )
}

export default Header
