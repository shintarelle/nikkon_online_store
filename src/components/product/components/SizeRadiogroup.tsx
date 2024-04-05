'use client'
import React, { useState } from 'react'

interface SizeRadiogrupProps {
  group: string[];
  size: string;
  onChange: (size: string) => void;
}

function SizeRadiogroup({ group, size, onChange}: SizeRadiogrupProps) {
  const [selectedSize, setSelectedSize] = useState(size);

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(e.target.value);
    onChange(e.target.value)
  };

  return (
    <div>
    <p className='text-md mb-1'>Размер</p>
    <div className="flex items-center space-x-4">
      {group.map((size) => (
        <label key={size} className="relative flex items-center">
          <input
            type="radio"
            name="size"
            value={size}
            className="hidden"
            checked={selectedSize === size}
            onChange={handleSizeChange}
          />
          <div className={`w-9 h-9 border border-light-grey flex items-center justify-center ${
              selectedSize === size ? 'border-powder-red border-2' : ''
            }`}>
            <span className={`text-[9px] text-light-grey ${
              selectedSize === size ? 'text-dark-grey' : 'text-light-grey'
          }`}>{size}</span>
          </div>
        </label>
      ))}
    </div>
  </div>
  )
}

export default SizeRadiogroup
