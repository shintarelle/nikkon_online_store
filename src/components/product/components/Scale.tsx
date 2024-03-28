'use client'
import React, { useState } from 'react';
import Image from 'next/image';


function Scale() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: { clientX: number; clientY: number; }) => {
    setIsDragging(true);
    setStartPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - startPosition.x,
        y: e.clientY - startPosition.y
      });
    }
  };

  return (
    <div
      className='p-[10px] relative overflow-hidden bg-light-grey w-[200px] h-[270px]'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <Image
        src='/product1.jpeg'
        alt='link'
        width={isHovered ? 225 : 100}
        height={isHovered ? 225 : 100}
        className='w-full h-auto aspect-[2.8/4]'
        style={{
          transform: `scale(${isHovered ? 2.25 : 1})`,
          transition: 'transform 0.3s ease',
          position: 'absolute',
          top: position.y,
          left: position.x
        }}
      />
    </div>
  );
}

export default Scale;
