'use client'
import React, { Component } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from "next/link";
import Image from 'next/image';
import { pictures } from '../../../../data.js'

// import { baseUrl } from "./config";
const baseUrl = ''

function CustomProductSlider() {
  const settings = {
    customPaging: function (i: number) {
      return (
        //   {/* <img src={`${baseUrl}/product${i + 1}.jpg`} /> */}

        <Image src={`/product${i + 1}.jpeg`} alt='link' width={100} height={100} className='w-full h-auto aspect-[2.8/4]'
        />
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
    {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },

    ],
    appendDots: (dots: JSX.Element[]) => (
      <ul className="slick-dots ">
        {pictures.map((_, index) => (
          <>{dots[index]}</>
        ))}
      </ul>
    ),
  };
  return (
    <div className="md:max-w-[470px] lg:max-w-[700px] pt-[10px]">
      <Slider {...settings}>
        {pictures.map(picture => (
          <div className='p-[10px] relative overflow-hidden' key={picture.id}>
            <Image src={picture.src} alt='link' width={100} height={100}  className='w-full h-auto aspect-[2.8/4]'/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomProductSlider;
