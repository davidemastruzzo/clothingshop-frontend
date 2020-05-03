import {Picture} from './picture';

export class CartItem {
  id: number;
  name: string;
  price: number;
  category: string;
  amount: number;
  pictures: Picture[];

  constructor(id: number, name: string, price: number, category: string, pictures: Picture[], amount: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.pictures = pictures;
    this.amount = amount;
  }
}
