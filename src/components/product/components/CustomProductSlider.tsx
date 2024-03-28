'use client'
import React, { Component } from "react";
import Slider from 'react-slick';
import ReactSlick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from "next/link";
import Image from 'next/image';
import { pictures } from '../../../../data.js'
import ReactImageMagnify from 'react-image-magnify';

const baseUrl = ''


function CustomProductSlider() {
  const settings = {
    customPaging: function (i: number) {
      return (

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
      <ReactSlick {...settings}>
        {pictures.map(picture => (
          <div className='customProductSlider relative overflow-hidden' key={picture.id}>
            {/* <Image src={picture.src} alt='link' width={100} height={100} className='w-full h-auto aspect-[2.8/4]' /> */}
            <ReactImageMagnify
      {...{
        smallImage: {
          alt: 'Wristwatch by Ted Baker London',
          isFluidWidth: true,
          src: picture.src,
          // sizes: '(max-width: 767px) 100vw, (max-width: 1024px) 30vw, 360px'
        },
        largeImage: {
          src: '/big.jpeg',
          width: 400,
          height: 530,
          // sizes: '(max-width: 767px) 100vw, (max-width: 1024px) 30vw, 360px'
          // width: 430, //важно! размер
          // height: 560, // важно
          // width: 430, //важно! размер
          // height: 560, // важно
                },
        enlargedImageClassName: 'enlargedImage',
        enlargedImageContainerStyle: {
          background: '#fff',
          zIndex: 10,
          transform: 'scale(1.7)' //важно
          // transform: 'scale(1.7)' //важно
                },
        enlargedImageContainerClassName: 'customContainer',
        hoverDelayInMs: 200, // Установка задержки в 200 миллисекунд
        lensStyle: { backgroundColor: 'rgba(0,0,0,.3)' },
        isHintEnabled: true,
        shouldHideHintAfterFirstActivation: false,
        enlargedImagePosition: 'over',

      }}
    />
          </div>
        ))}
      </ReactSlick>
    </div>
  );
}

export default CustomProductSlider;
