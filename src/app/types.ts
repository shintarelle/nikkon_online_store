// Определяем интерфейс для продукта
export default interface Product {
  id: number;
  vendorCode: number;
  title: string;
  price: number;
  image: string;
  category?: string;
  type?: string;
  discount?: number;
}
