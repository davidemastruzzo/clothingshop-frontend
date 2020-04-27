export class CartItem {
  id: number;
  name: string;
  price: number;
  category: string;
  amount: number;

  constructor(id: number, name: string, price: number, category: string, amount: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.amount = amount;
  }
}
