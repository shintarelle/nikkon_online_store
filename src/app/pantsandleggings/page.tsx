
'use client'
import Category from "@/components/category/Category";
import Heading from "@/components/products/components/Heading";
import Text from "@/components/products/components/Text";


export default function Pantsandleggings() {
  return (
    <>
      <Heading title={'Штани та легінси'} />

      <Category category={'pantsandleggings'} />
      <div className=" max-w-[350px] sm:max-w-[650px] md:max-w-[924px] lg:max-w-[1024px] p-[20px] mx-auto">
        <Heading title="ЯКІ ЦІНИ НА ШТАНИ ТА ЛЕГІНСИ?" />
        <Text>
          Ціна на штани та легінси починається від 159 грн до 799 грн.
        </Text>
        <Heading title="ДЕ НЕДОРОГО КУПИТИ ШТАНИ ТА ЛЕГІНСИ?" />
        <Text>
          Недорого купити штани та легінси від виробника Ви можете в нашому
          онлайн інтернет магазині. Швидка доставка за цінами перевізників по
          всій Україні. Також можливий оптовий продаж одягу для дому та сну у
          Харкові.
        </Text>
        <Heading title="ЯК ВИБРАТИ ШТАНИ ТА ЛЕГІНСИ? " />
        <Text>
          Для зручності вибору розміру штанів та легінсів, в
          кожній карточці товару присутня таблиця розмірів.
        </Text>
      </div>
    </>
  )
}
