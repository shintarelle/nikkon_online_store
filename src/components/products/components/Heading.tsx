import React from 'react'

interface HeadingProps {
  title: string;
}

function Heading({ title }: HeadingProps) {
  return (
    <h2 className='max-w-[1240px] my-0 mx-auto uppercase text-3xl font-semibold text-center my-3'>{title}</h2>
  )
}

export default Heading
