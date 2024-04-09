'use client'
import React, { useEffect, useState } from 'react'
import { productsArray } from '../../../data.js'
import ProductCard from '../products/components/ProductCard'
import SortingComponent from '../sort/SortingComponent'
import Product from '@/app/types.js'

function Category({ category }: { category: string }) {
  const [products, setProducts] = useState<Product[]>([]);

  const categoryProducts = productsArray.filter(item => item.category === category)

  useEffect(() => {
    setProducts(categoryProducts)
  }, [])


  return (
    <>
      <SortingComponent products={products} categoryProducts={ categoryProducts } setProducts={setProducts} />
    <div className=" max-w-[350px] sm:max-w-[650px] md:max-w-[924px] lg:max-w-[1024px] px-[20px] sm:p-[10px] my-0 mx-auto ">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  pt-7 pb-[75px]' >
        {products?.map(product =>
        (<div className='p-0 relative' key={product.id}>
            < ProductCard  product={product} />
          </div>)
          )}
      </div>
      </div>
    </>
  )
}

export default Category
