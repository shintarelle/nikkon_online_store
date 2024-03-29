'use client'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { productsArray } from '../../../data.js';
import Product from '../types.js';
import ProductCard from '@/components/products/components/ProductCard';

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const searchValue = searchParams.get('q');
  const lowercaseSearchValue = searchValue ? searchValue.toLowerCase() : '';

  useEffect(() => {
    if (searchParams) {
      const filteredProducts = productsArray.filter(product =>
        product.title.toLowerCase().includes(lowercaseSearchValue)
      );
      setFilteredProducts(filteredProducts);
    }
  }, [searchParams]);

  return (
    <>
      <div className=" max-w-[350px] sm:max-w-[650px] md:max-w-[924px] lg:max-w-[1024px] px-[20px] sm:p-[10px] my-0 mx-auto ">
      <h1 className='text-xl'>{`Результати пошуку за запитом ${searchValue}`}</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  pt-7 pb-[75px]' >
        {filteredProducts.map(product =>
        (<div className='p-0 relative' key={product.id}>
            < ProductCard  product={product} />
          </div>)
          )}
      </div>
    </div>
    </>
  );
}
