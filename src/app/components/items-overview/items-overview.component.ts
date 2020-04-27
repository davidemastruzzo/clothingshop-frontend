import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';
import {Item} from '../../entities/item';

@Component({
  selector: 'app-items-overview',
  templateUrl: './items-overview.component.html',
  styleUrls: ['./items-overview.component.css']
})
export class ItemsOverviewComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getAllItems().subscribe(response => {
      this.items = response;
    });
  }

  showDetails(item: Item) {

  }

  addToShoppingCart(item: Item) {
    
  }
}
