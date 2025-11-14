export interface Order {
  id: number;
  productName: string;
  price: number;
  quantity: number;
  image: string;
  status: 'Pending' | 'Completed';
  date: string;
}
