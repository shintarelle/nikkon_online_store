export const productsArray = [
  {
    id: 1,
    title: 'Бавовняна футболка з написом "Кохай. Цілуй. Обіймай." T-shirt print 4802/60 black/feeling (чорний)',
    price: 599,
    image: '/product2.jpeg',
    vendorCode: 20001,
    category: 'nightshirts',
    type: 'new',
    discount: 0,
    size: ['S', 'M', 'L', 'Xl', 'XXl'],

  },
  {
    id: 2,
    title: 'Бавовняний халат SEVILLA 7329/010 light powder (рожевий)',
    price: 999,
    image: '/product1.jpeg',
    vendorCode: 20002,
    category: 'pajamas',
    type: 'new',
    discount: 0,
    size: ['S', 'M', 'L', 'Xl', 'XXl'],
  },
  {
    id: 3,
    title: 'Бавовняна футболка з написом "Кохай. Цілуй. Обіймай." T-shirt print 4802/60 black/feeling (чорний)',
    price: 599,
    image: '/product2.jpeg',
    vendorCode: 20003,
    category: 'nightshirts',
    type: 'top',
    discount: 10,
    size: ['S', 'M', 'L', 'Xl', 'XXl'],
  },
  {
    id: 4,
    title: 'Бавовняний халат SEVILLA 7329/010 light powder (рожевий)',
    price: 999,
    image: '/product1.jpeg',
    vendorCode: 20004,
    category: 'nightshirts',
    type: 'sale',
    discount: 30,
    size: ['S', 'M', 'L', 'Xl', 'XXl'],
  },
  {
    id: 5,
    title: 'Бавовняна футболка з написом "Кохай. Цілуй. Обіймай." T-shirt print 4802/60 black/feeling (чорний)',
    price: 800,
    image: '/product5.jpeg',
    vendorCode: 20005,
    category: 'homesuits',
    type: 'new',
    discount: 0,
    size: ['S', 'M', 'L', 'Xl', 'XXl'],
  },
  {
    id: 6,
    title: 'Бавовняний халат SEVILLA 7329/010 light powder (рожевий)',
    price: 800,
    image: '/product1.jpeg',
    vendorCode: 20006,
    category: 'robes',
    type: 'new',
    discount: 0,
    size: ['S', 'M', 'L', 'Xl'],
  },
  {
    id: 7,
    title: 'Бавовняний халат SEVILLA 7329/010 light powder (рожевий)',
    price: 999,
    image: '/product1.jpeg',
    vendorCode: 20007,
    category: 'robes',
    type: 'new',
    discount: 0,
    size: ['S', 'M', 'L', 'Xl', 'XXl'],
  },
  {
    id: 8,
    title: 'Бавовняна футболка з написом "Кохай. Цілуй. Обіймай." T-shirt print 4802/60 black/feeling (чорний)',
    price: 599,
    image: '/product2.jpeg',
    vendorCode: 20008,
    category: 'homesuits',
    type: 'top',
    discount: 25,
    size: ['S', 'M', 'L', 'Xl', 'XXl'],
  },
  {
    id: 9,
    title: 'Бавовняна футболка з написом "Кохай. Цілуй. Обіймай." T-shirt print 4802/60 black/feeling (чорний)',
    price: 599,
    image: '/product2.jpeg',
    vendorCode: 20009,
    category: 'robes',
    type: 'top',
    discount: 10,
    size: ['S', 'M', 'L', 'Xl', 'XXl'],
  },
  {
    id: 10,
    title: 'Бавовняна футболка з написом "Кохай. Цілуй. Обіймай." T-shirt print 4802/60 black/feeling (чорний)',
    price: 599,
    image: '/product2.jpeg',
    vendorCode: 20010,
    category: 'homesuits',
    type: 'top',
    discount: 34,
    size: ['S', 'M', 'L', 'Xl', 'XXl'],
  },
  {
    id: 11,
    title: 'Бавовняний халат SEVILLA 7329/010 light powder (рожевий)',
    price: 500,
    image: '/product4.jpeg',
    vendorCode: 20011,
    category: 'homesuits',
    type: 'sale',
    discount: 34,
    size: ['S', 'M', 'L', 'Xl', 'XXl'],
  },
  {
    id: 12,
    title: 'Бавовняний халат SEVILLA 7329/010 light powder (рожевий)',
    price: 899,
    image: '/product3.jpeg',
    vendorCode: 20012,
    category: 'homesuits',
    type: 'sale',
    discount: 49,
    size: ['S', 'M', 'L', 'Xl', 'XXl'],
  },
  {
    id: 13,
    title: 'Бавовняний халат SEVILLA 7329/010 light powder (рожевий)',
    price: 999,
    image: '/product1.jpeg',
    vendorCode: 20013,
    category: 'homesuits',
    type: 'sale',
    discount: 34,
    size: ['S', 'M', 'L', 'Xl', 'XXl'],
  },
]



export const menu = [
  {
    name: 'Піжами',
    link: '/pajamas'
  },
  {
    name: 'Нічні сорочки',
    link: '/nightshirts',
  },
  {
    name: 'Халати',
    link: '/robes'
  },
  {
    name: 'Домашні костюми',
    link: '/homesuits'
  },
  {
    name: 'Світшоти',
    link: '/sweatshirts',
  },
  {
    name: 'Штани та легінси',
    link: '/pantsandleggings',
  }]


  // Дублируем слайды, чтобы было больше, чем slidesToShow
  export const pictures = [
    { id: 1, src: '/product1.jpeg' },
    { id: 2, src: '/product2.jpeg' },
    { id: 3, src: '/product3.jpeg' },
    { id: 4, src: '/product4.jpeg' },
    { id: 5, src: '/product1.jpeg' }, // Дублируем для "фантомного" слайда
    // { id: 6, src: '/product2.jpeg' }  // Дублируем для "фантомного" слайда
  ];
