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
        const newCartItem = new CartItem(item.id, item.name, item.price, item.category, 1);
        cartItems.push(newCartItem);
      }
    }

    return cartItems;
  }

}
