import React from 'react'

interface ButtonProps {
  title: string;
  textSize: string;
  onClick?: () => void; // Добавляем пропс для колбэка onClick
}

function Button({ title, textSize, onClick }: ButtonProps) {
  return (
    <button className={`bg-powder-pink px-7 py-2 text-${textSize} font-medium hover:bg-dark-grey hover:text-white focus:bg-black focus:text-white`} onClick={onClick}>{title}</button>
  )
}

export default Button
