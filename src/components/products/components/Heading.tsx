import React from 'react'

interface HeadingProps {
  title: string;
}

function Heading({ title }: HeadingProps) {
  return (
    <h2 className='max-w-[1240px] my-0 mx-auto uppercase text-2xl md:text-3xl font-semibold text-center pt-3 pb-0'>{title}</h2>
  )
}

export default Heading
