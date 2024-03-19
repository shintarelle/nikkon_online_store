import React from 'react'

interface ButtonProps {
  title: string;
  textSize: string;
}

function Button({ title, textSize }: ButtonProps) {
  return (
    <button className={`bg-powder-pink px-7 py-2 text-${textSize} font-medium`}>{title}</button>
  )
}

export default Button
