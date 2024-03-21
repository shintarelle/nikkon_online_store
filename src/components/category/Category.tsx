import React from 'react'
import Heading from '../products/components/Heading'
import { productsArray } from '../../../data.js'
import ProductCard from '../products/components/ProductCard'

function Category({ category }: { category: string }) {

  const filteredProducts = productsArray.filter(item => item.category === category)

  return (
    <div className=" max-w-[350px] sm:max-w-[650px] md:max-w-[924px] lg:max-w-[1024px] px-[20px] sm:p-[10px] my-0 mx-auto ">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  pt-7 pb-[75px]' >
        {filteredProducts.map(product =>
        (<div className='p-0 relative' key={product.id}>
            < ProductCard  product={product} />
          </div>)
          )}
      </div>
    </div>
  )
}

export default Category
