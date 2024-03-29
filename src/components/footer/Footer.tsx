import React from 'react'
import Image from 'next/image';
import { menu } from '../../../data.js';
import { Tenor_Sans } from "next/font/google";
import Button from '../header/components/Button.jsx';

const tenorSans = Tenor_Sans({
  subsets: ["latin"],
  weight: '400'
});

function Footer() {
  return (
    <>
      <div className='bg-dark-grey w-full h-[30px]'>Footer</div>

      <div className='bg-white w-full h-[200px] flex justify-between max-w-[1300px] mx-auto' >
        <div className='flex justify-center items-center'>
          <Image
            className=' w-[150px] h-[50px] md:w-[230px] md:h-[80px] '
            priority
            src={'/Logo.jpeg'}
            alt='Logo'
            width='230' //!!!!!!!!!!!!!!!!!!
            height='80' //!!!---- change size of image
          />
        </div>
        <ul className='flex justify-between align-center gap-6'>
          <li className='self-center'>
            <Image src='/search.svg' alt='search' width='20' height='20' className='w-[22px] h-[22px]'/>
          </li>
          <li className='self-center flex'>
            <Image src='/user.svg' alt='login' width='20' height='20' className='w-[22px] h-[22px]'/>
            <span className='underline'>Особистий кабінет</span>

          </li>
          <li className='self-center'>
            <Image src='/heart.svg' alt='wishlist' width='20' height='20' className='w-[22px] h-[22px]'/>
          </li>
          <li className='self-center'>
            <Image src='/bag.svg' alt='busket' width='20' height='20' className='w-[22px] h-[22px]'/>
          </li>
        </ul>
      </div>

      <div className='bg-dark-grey w-full h-[300px]'>
        <div className='max-w-[1300px] mx-auto flex justify-between'>
        <ul className=' self-center '>
          {menu.map(item => (
          <li className='' key={item.name}>
              <a href={item.link} className='block uppercase font-semibold text-sm no-underline text-white px-[14px] py-[5px] border-b-[5px] border-transparent hover:border-powder-pink'>{item.name}</a>
            </li>
          ))}
        </ul>

        <ul className='flex flex-col'>
          <a className={`text-sm no-underline text-white ${tenorSans.className}`} href='tel:+380635283957'>+380635283957</a>
          <span className={`text-xs text-light-grey ${tenorSans.className}`}> ПН-ПТ | 9:00-18:00</span>
          {/* <Button title={'Зворотній дзвінок'} textSize={'sm'}></Button> */}
        </ul>
        </div>
      </div>

      <div className='flex justify-center align-center text-light-grey'>@NikKon</div>
    </>
  )
}

export default Footer
