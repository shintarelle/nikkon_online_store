'use client'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ProductCard from './ProductCard'
import Product from '../../../app/types'

interface NewProductsSliderProps {
  products: Product[];
}

const ProductsSlider = ({ products }: NewProductsSliderProps) => {
  const slickSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 924,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className='max-w-[1260px] h-full pt-6 pb-9 mx-auto overflow-hidden relative'>
      <Slider
        {...slickSettings}
        className='newProductSlider relative '>
        {products.map(product =>
        (<div className='p-0 relative' key={product.id}>
            < ProductCard  product={product} />
          </div>)
          )}

      </Slider>
    </section>
  )
}


export default ProductsSlider
