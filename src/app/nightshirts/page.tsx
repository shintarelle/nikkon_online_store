'use client'
import Category from '@/components/category/Category'
import Heading from '@/components/products/components/Heading'
import Text from '@/components/products/components/Text'

export default function Nightshirts() {
  return (
    <>
      <Heading title={'Нічні сорочки'} />
      <Category category={'nightshirts'} />
      <div className=" max-w-[350px] sm:max-w-[650px] md:max-w-[924px] lg:max-w-[1024px] p-[20px] mx-auto">
        <Heading title="ЯКІ ЦІНИ НА НІЧНІ СОРОЧКИ?" />
        <Text>
          Ціна на жіночі нічні сорочки починається від 249 грн до 799 грн.
        </Text>
        <Heading title="ДЕ НЕДОРОГО КУПИТИ НІЧНІ СОРОЧКИ?" />
        <Text>
          Недорого купити нічні сорочки від виробника Ви можете в нашому онлайн
          інтернет магазині. Швидка доставка за цінами перевізників по всій
          Україні. Також можливий оптовий продаж одягу для дому та сну у
          Харкові.
        </Text>
        <Heading title="ЯК ВИБРАТИ НІЧНІ СОРОЧКИ?" />
        <Text>
          Для зручності вибору розміру нічних сорочок, в кожній карточці товару
          присутня таблиця розмірів.
        </Text>
      </div>
    </>
  )
}
