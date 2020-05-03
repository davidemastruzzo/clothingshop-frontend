import {Component, OnInit} from '@angular/core';
import {ItemService} from '../../services/item.service';
import {CartService} from '../../services/cart.service';
import {DetailService} from '../../services/detail.service';

@Component({
  selector: 'app-items-overview',
  templateUrl: './items-overview.component.html',
  styleUrls: ['./items-overview.component.css']
})
export class ItemsOverviewComponent implements OnInit {

  constructor(public   itemService: ItemService,
              public cartService: CartService,
              public detailService: DetailService) {
  }

  ngOnInit() {
  }
}
