'use client'
import React, { useState } from 'react'

interface ColorRadiogrupProps {
  group: string[];
  color: string;
  onChange: (color: string) => void;
}

function ColorRadiogroup({ group, color, onChange }: ColorRadiogrupProps) {
  const [selectedColor, setSelectedColor] = useState(color);

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.value);
    onChange(e.target.value)
  };
  return (
    <div>
    <p className='text-md mb-1'>Колір</p>
    <div className="flex items-center space-x-4">
      {group.map((color) => (
        <label key={color} className="relative flex items-center">
          <input
            type="radio"
            name="color"
            value={color}
            className="hidden"
            checked={selectedColor === color}
            onChange={handleSizeChange}
          />
          <div className={`w-9 h-9 border border-light-grey flex items-center justify-center p-[3px] ${
              selectedColor === color ? 'border-powder-red border-2' : 'border-light-grey'
            }`}>
            <div className={`w-6 h-6 border border-light-grey text-xs flex items-center justify-center
            ${color === 'blue' ? 'bg-blue' : ''}
            ${color === 'white' ? 'bg-white' : ''}
            ${color === 'black' ? 'bg-black' : ''}
            ${color === 'pink' ? 'bg-powder-pink' : ''}
            `}>
          </div>
          </div>
        </label>
      ))}
    </div>
  </div>
  )
}

export default ColorRadiogroup
