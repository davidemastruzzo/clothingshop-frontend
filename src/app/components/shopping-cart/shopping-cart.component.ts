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
  cartItems: any;

  constructor(public cartService: CartService) {
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  showDetails(item: Item) {
    console.log('test');
  }

  addOne(item: CartItem) {
    item.amount += 1;
  }

  removeOne(item: CartItem) {
    item.amount -= 1;
  }
}
