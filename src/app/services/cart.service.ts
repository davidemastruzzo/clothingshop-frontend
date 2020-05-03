import {Injectable} from '@angular/core';
import {CartItem} from '../entities/cart-item';
import {Item} from '../entities/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public items: Item[] = [];

  constructor() {
  }

  public getCartItems(): CartItem[] {
    const cartItems: CartItem[] = [];
    for (const item of this.items) {
      const existingItem: CartItem = cartItems.find(cartItem =>
        cartItem.id === item.id);
      if (existingItem != null) {
        existingItem.amount += 1;
      } else {
        const newCartItem = new CartItem(item.id, item.name, item.price, item.category, item.pictures, 1);
        cartItems.push(newCartItem);
      }
    }

    return cartItems;
  }

  public getTotalAmountOfItems(): number {
    let amount = 0;
    this.getCartItems().forEach(cartItem => {
      amount = amount + cartItem.amount;
    });

    return amount;
  }

  public addItem(cartItem: CartItem): void {
    const itemToBeAdded = this.items.find(item => item.id === cartItem.id);
    this.items.push(itemToBeAdded);
    cartItem.amount += 1;
    console.log(this.items);
  }

  public removeItem(cartItem: CartItem): void {
    const itemToBeRemoved = this.items.find(item => item.id === cartItem.id);
    this.items.splice(this.items.indexOf(itemToBeRemoved), 1);
    cartItem.amount -= 1;
    console.log(this.items);
  }
}
