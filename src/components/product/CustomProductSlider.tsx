'use client'
import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Link from 'next/link'
import Image from 'next/image'
import { productsArray } from '../../../data.js'

interface CustomProductSliderProps {
  id: string
}
const CustomProductSlider = ({ id }: CustomProductSliderProps) => {
  const product = productsArray.find((product) => product.id === id)
  const settings = {
    customPaging: function (i: number) {
      return (
        // пока не работает маленький список как нужно !!!!! добавляет li но он без key

        <Image
          src={product?.image[i] || ''}
          alt="link"
          width={100}
          height={100}
          className="w-full h-auto aspect-[2.8/4]"
        />
      )
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
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
        {product?.image.map((_, index) => dots[index])}
      </ul>
    ),
  }
  return (
    <div className="md:max-w-[470px] lg:max-w-[700px] pt-[10px]">
      <Slider {...settings}>
        {product?.image.map((picture) => (
          <div className="p-[10px] relative overflow-hidden" key={picture + id}>
            {/* // подумать над ключом */}
            <Image
              src={picture}
              alt="link"
              width={100}
              height={100}
              className="w-full h-auto aspect-[2.8/4]"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CustomProductSlider
