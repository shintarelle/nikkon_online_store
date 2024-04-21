import React from 'react'
import Heading from './components/Heading'
import ProductsSlider from './components/ProductsSlider'
import { productsArray } from '../../../data.js'


function Products({ title, type }: { title: string, type: string }) {
  return (
    <div className="max-w-[1240px] pt-6 my-0 mx-auto">
      <Heading title={title} />
      <ProductsSlider products={productsArray.filter(item => item.type === type)} />
    </div>
  )
}

export default Products
