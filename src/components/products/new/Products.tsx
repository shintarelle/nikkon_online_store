import React from 'react'
import Heading from './components/Heading'
import NewProductsSlider from './components/NewProductsSlider'

const productsArray = [
  {
    id: 1,
    title: 'Бавовняна футболка з написом &quot;Кохай. Цілуй. Обіймай.&quot; T-shirt print 4802/60 black/feeling (чорний)',
    price: 599,
    image: '/product2.jpeg',
    vendorCode: 20001,
    category: 'for home',
    type: 'new',
    discount: 0,

  },
  {
    id: 2,
    title: 'Бавовняний халат SEVILLA 7329/010 light powder (рожевий)',
    price: 999,
    image: '/product1.jpeg',
    vendorCode: 20002,
    category: 'for home',
    type: 'new',
    discount: 0,
  },
  {
    id: 3,
    title: 'Бавовняна футболка з написом &quot;Кохай. Цілуй. Обіймай.&quot; T-shirt print 4802/60 black/feeling (чорний)',
    price: 599,
    image: '/product2.jpeg',
    vendorCode: 20003,
    category: 'for home',
    type: 'top',
    discount: 10,
  },
  {
    id: 4,
    title: 'Бавовняний халат SEVILLA 7329/010 light powder (рожевий)',
    price: 999,
    image: '/product1.jpeg',
    vendorCode: 20004,
    category: 'for home',
    type: 'sale',
    discount: 30,
  },
  {
    id: 5,
    title: 'Бавовняна футболка з написом &quot;Кохай. Цілуй. Обіймай.&quot; T-shirt print 4802/60 black/feeling (чорний)',
    price: 800,
    image: '/product2.jpeg',
    vendorCode: 20005,
    category: 'for home',
    type: 'new',
    discount: 0,
  },
  {
    id: 6,
    title: 'Бавовняний халат SEVILLA 7329/010 light powder (рожевий)',
    price: 800,
    image: '/product1.jpeg',
    vendorCode: 20006,
    category: 'for home',
    type: 'new',
    discount: 0,
  },
  {
    id: 7,
    title: 'Бавовняний халат SEVILLA 7329/010 light powder (рожевий)',
    price: 999,
    image: '/product1.jpeg',
    vendorCode: 20007,
    category: 'for home',
    type: 'new',
    discount: 0,
  },
  {
    id: 8,
    title: 'Бавовняна футболка з написом &quot;Кохай. Цілуй. Обіймай.&quot; T-shirt print 4802/60 black/feeling (чорний)',
    price: 599,
    image: '/product2.jpeg',
    vendorCode: 20008,
    category: 'for home',
    type: 'top',
    discount: 25,
  },
  {
    id: 9,
    title: 'Бавовняна футболка з написом &quot;Кохай. Цілуй. Обіймай.&quot; T-shirt print 4802/60 black/feeling (чорний)',
    price: 599,
    image: '/product2.jpeg',
    vendorCode: 20009,
    category: 'for home',
    type: 'top',
    discount: 10,
  },
  {
    id: 10,
    title: 'Бавовняна футболка з написом &quot;Кохай. Цілуй. Обіймай.&quot; T-shirt print 4802/60 black/feeling (чорний)',
    price: 599,
    image: '/product2.jpeg',
    vendorCode: 20010,
    category: 'for home',
    type: 'top',
    discount: 34,
  },
  {
    id: 11,
    title: 'Бавовняний халат SEVILLA 7329/010 light powder (рожевий)',
    price: 500,
    image: '/product1.jpeg',
    vendorCode: 20011,
    category: 'for home',
    type: 'sale',
    discount: 34,
  },
  {
    id: 12,
    title: 'Бавовняний халат SEVILLA 7329/010 light powder (рожевий)',
    price: 899,
    image: '/product1.jpeg',
    vendorCode: 20012,
    category: 'for home',
    type: 'sale',
    discount: 49,
  },
  {
    id: 13,
    title: 'Бавовняний халат SEVILLA 7329/010 light powder (рожевий)',
    price: 999,
    image: '/product1.jpeg',
    vendorCode: 20013,
    category: 'for home',
    type: 'sale',
    discount: 34,
  },
]

function Products({ title, type }: { title: string, type: string }) {
  return (
    <div className="max-w-[1240px] my-0 mx-auto">
      <Heading title={title} />
      <NewProductsSlider products={productsArray.filter(item => item.type === type)} />
    </div>
  )
}

export default Products
