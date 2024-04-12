'use client'
import React, { useEffect, useState } from 'react'
import { productsArray } from '../../../data.js'
import ProductCard from '../products/components/ProductCard'
import SortingComponent from '../sort/SortingComponent'
import Product from '@/app/types.js'
import Pagination from "react-js-pagination";

function Category({ category }: { category: string }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Количество товаров на странице

  const categoryProducts = productsArray.filter(item => item.category === category)

  useEffect(() => {
    const categoryProducts = productsArray.filter(item => item.category === category);
    setProducts(categoryProducts);
  }, [category]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);




  return (
    <>
      <SortingComponent products={products} categoryProducts={ categoryProducts } setProducts={setProducts} />
    <div className=" max-w-[350px] sm:max-w-[650px] md:max-w-[924px] lg:max-w-[1024px] px-[20px] sm:p-[10px] my-0 mx-auto ">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  pt-7 pb-[75px]' >
        {currentItems?.map(product =>
        (<div className='p-0 relative' key={product.id}>
            < ProductCard  product={product} />
          </div>)
          )}
        </div>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={itemsPerPage}
          totalItemsCount={products.length}
          pageRangeDisplayed={5}
          onChange={paginate}
        />

      </div>
    </>
  )
}

export default Category
