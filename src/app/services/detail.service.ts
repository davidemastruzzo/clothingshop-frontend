import { Injectable } from '@angular/core';
import {Item} from '../entities/item';
import {Router} from '@angular/router';
import {CartItem} from '../entities/cart-item';
import {ItemService} from './item.service';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  public item: Item;

  constructor(private router: Router, private itemService: ItemService) { }

  showItem(item: Item) {
    this.item = item;
    this.router.navigate(['/item-details']);
  }

  showCartItem(cartItem: CartItem, ) {
    const itemToBeShown: Item = this.itemService.items.find(item => item.id === cartItem.id);
    this.showItem(itemToBeShown);
  }
}
