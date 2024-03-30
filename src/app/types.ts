// Определяем интерфейс для продукта
export default interface Product {
  id: number;
  vendorCode: number; //код товара
  title: string;
  price: number;
  image: string[];
  category?: string;
  type?: string; //new top sale
  discount?: number; //скидка
  size: string[],
  color: string[]; // Массив строк с названиями цветов
}
