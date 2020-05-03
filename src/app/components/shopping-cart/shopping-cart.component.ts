import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Item} from '../../entities/item';
import {CartItem} from '../../entities/cart-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: CartItem[] = [];

  constructor(public cartService: CartService) {
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  showDetails(item: CartItem) {
    console.log('show detail');
  }

  addOne(item: CartItem) {
    this.cartService.addItem(item);
  }

  removeOne(item: CartItem) {
    this.cartService.removeItem(item);
    if (item.amount === 0) {
      const itemToBeRemoved = this.cartItems.find(cartItem => item.id === cartItem.id);
      this.cartItems.splice(this.cartItems.indexOf(itemToBeRemoved), 1);
    }
  }

  getTotalAmount(): number {
    let amount = 0;
    this.cartItems.forEach(cartItem => {
      amount = amount + cartItem.amount * cartItem.price;
    });
    return amount;
  }
}
