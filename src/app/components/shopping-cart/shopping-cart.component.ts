import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Item} from '../../entities/item';
import {CartItem} from '../../entities/cart-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  amount = 0;

  constructor(public cartService: CartService) { }

  ngOnInit() {
  }

  showDetails(item: Item) {
    console.log('test');
  }

  addOne(item: CartItem) {
    console.log(item);
  }

  removeOne(item: CartItem) {
    item.amount -= 1;
  }
}
