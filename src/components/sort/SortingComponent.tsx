'use client'
import Product from '@/app/types';
import React, { useEffect, useState } from 'react';
import PriceRangeSlider from './PriceRangeSlider';

interface SortingComponentProps {
  products: Product[];
  categoryProducts: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const SortingComponent: React.FC<SortingComponentProps> = ({ products, categoryProducts, setProducts }) => {
  const [minPrice, setMinPrice] = useState('0');
  const [maxPrice, setMaxPrice] = useState('3000');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');

  // console.log('minPrice:', minPrice, 'maxPrice:', maxPrice, 'size:', size, 'color:', color);
  // console.log('products:', products, 'categoryProducts:', categoryProducts)

  const handleReset = () => {
    setMinPrice('0');
    setMaxPrice('3000');
    setSize('');
    setColor('');
    setProducts(categoryProducts);
  };

  useEffect(() => {
    const sortedProducts = categoryProducts.filter(product => {
      const discountedPrice = product.discount ? Math.round(product.price - (product.price * product.discount / 100)) : product.price;
      // console.log(product.size)
      return (
        (minPrice === '0' || discountedPrice >= parseInt(minPrice)) &&
        (maxPrice === '3000' || discountedPrice <= parseInt(maxPrice)) &&
        (size === '' || product.size.includes(size)) &&
        (color === '' || product.color.includes(color))
        );
    });

    if (JSON.stringify(sortedProducts) !== JSON.stringify(products)) {
      setProducts(sortedProducts);
      console.log('Sorted Products: ', sortedProducts);
    }
  }, [products, categoryProducts, minPrice, maxPrice, size, color, setProducts]);

  const handleMinPriceChange = (value: string) => {
  if (value === '' || /^\d+$/.test(value)) {
    setMinPrice(value);
  }
};

const handleMaxPriceChange = (value: string) => {
  if (value === '' || /^\d+$/.test(value)) {
    setMaxPrice(value);
  }
};

  return (
    <div className=' bg-powder-pink p-[10px] mt-8'>
      <div className='flex justify-between max-w-[1024px] mx-auto'>

      <div className=''>
        <h2 className='text-xl font-bold'>Ціна</h2>
        <div className='flex gap-2 mb-3'>
          <div>
            <label className='hidden'>Min Price:</label>
            <input type="number" value={minPrice} onChange={e => handleMinPriceChange(e.target.value)} className='border border-light-grey w-[70px] rounded'/>
          </div><span> - </span>
          <div>
            <label className='hidden'>Max Price:</label>
            <input type="number" value={maxPrice} onChange={e => handleMaxPriceChange(e.target.value)} className='border border-light-grey w-[70px] rounded'/>
          </div>
        </div>

        <PriceRangeSlider
          minPrice={0}
          maxPrice={3000}
          value={[Number(minPrice), Number(maxPrice)]}
          onMinPriceChange={setMinPrice}
          onMaxPriceChange={setMaxPrice}
        />
      </div>

      <div>
        <h2 className='text-xl font-bold'>Розмір</h2>
        <label className='hidden'>Size:</label>
        <select className='border border-light-grey w-[150px] rounded'value={size} onChange={e => setSize(e.target.value)}>
          <option value="">All</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>

      <div>
        <h2 className='text-xl font-bold'>Колір</h2>
        <label className='hidden'>Color:</label>
        <select className='border border-light-grey w-[150px] rounded' value={color} onChange={e => setColor(e.target.value)}>
          <option value="">All</option>
          <option value="black">black</option>
          <option value="blue">blue</option>
          <option value="pink">pink</option>
          <option value="white">white</option>
        </select>
      </div>

      <div className='self-center'>
        <button className='text-xl font-bold border p-2 hover:bg-white-grey rounded' onClick={handleReset}>Без фільтрів</button>
      </div>
    </div>
    </div>
  );
};

export default SortingComponent;
