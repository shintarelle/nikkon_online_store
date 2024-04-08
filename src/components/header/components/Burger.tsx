'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';
import { Tenor_Sans } from 'next/font/google';
import { menu } from '../../../../data.js';

const tenorSans = Tenor_Sans({
  subsets: ['latin'],
  weight: '400'
});

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  //доделать адаптив когда меньше 400 и уточнить наполнение и кнопка подходит или нет
  return (
    <>
    <li className='md:hidden self-center flex justify-center align-center bg-powder-pink p-[5px]'>
      <button onClick={handleToggleMenu}>
        <Image  src='/burger.svg' alt='burger menu' width='20' height='20' className='w-[22px] h-[22px]'/>
      </button>
    </li>
    <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.7 }}
            className='fixed left-0 top-0 h-screen w-64 bg-dark-grey z-50'
          >
      <div className='flex justify-between items-center p-4'>
        <div>
          <a href='#' className={`text-sm no-underline text-light-grey leading-6 font-medium tracking-wider ${tenorSans.className}`}>
            Наші контакти
            </a>
          <a href='tel:+380635283957' className={`block text-sm no-underline text-black ${tenorSans.className}`}>
            +380635283957
            </a>
          <hr className='border-light-grey my-4' />
          <span className={`block text-md text-light-grey  ${tenorSans.className}`}>Ми працюємо</span>
          <span className={`block text-xs text-black ${tenorSans.className}`}>ПН-ПТ | 9:00-18:00</span>
          <hr className='border-light-grey my-4' />
          <a href='#' className={`text-sm no-underline text-light-grey leading-6 font-medium tracking-wider ${tenorSans.className}`}>
            Доставка та оплата
          </a>
          </div>
            <button className='absolute top-0 right-0 p-3 text-white text-md' onClick={handleToggleMenu}>x</button>
      </div>
      <hr className='border-light-grey my-4' />
      <ul className='flex flex-col gap-1'>
        {menu.map(item => (
          <li key={item.name}>
            <a href={item.link} className='block uppercase font-semibold text-sm no-underline text-black px-4 py-1 border-b border-transparent hover:border-powder-pink'>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
          </motion.div>
        )}
      </AnimatePresence>
      </>
  );
};

export default BurgerMenu;
