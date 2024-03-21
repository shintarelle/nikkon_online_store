import React from 'react'
import Heading from './components/Heading'
import NewProductsSlider from './components/ProductsSlider'
import { productsArray } from '../../../data.js'


function Products({ title, type }: { title: string, type: string }) {
  return (
    <div className="max-w-[1240px] my-0 mx-auto">
      <Heading title={title} />
      <NewProductsSlider products={productsArray.filter(item => item.type === type)} />
    </div>
  )
}

export default Products
