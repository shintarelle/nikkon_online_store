import React from 'react'
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

import { slider } from '../../../data.js'



function MainSlider() {
  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
      autoplay={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full h-full"
    >
      {slider.map((slider, index) =>
        <SwiperSlide key={slider + index} className="h-[362px] bg-light-gray">
          <Link href={'#'}>
            {/* будет ли тут куда то переходить? */}
            <Image src={`${slider}`} width='1000' height='362' alt='slide1'  className='w-full h-362'/>
          </Link>
        </SwiperSlide>)}
      </Swiper>
  )
}

export default MainSlider
