import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';
import {Item} from '../../entities/item';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-items-overview',
  templateUrl: './items-overview.component.html',
  styleUrls: ['./items-overview.component.css']
})
export class ItemsOverviewComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService, private cartService: CartService) { }

  ngOnInit() {
    this.itemService.getAllItems().subscribe(response => {
      this.items = response;
    });
  }

  showDetails(item: Item) {

  }

  addToShoppingCart(item: Item) {
    this.cartService.items.push(item);
  }
}
