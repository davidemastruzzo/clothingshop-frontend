import {Component, OnInit} from '@angular/core';
import {DetailService} from '../../services/detail.service';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  constructor(public detailsService: DetailService, public cartService: CartService) { }

  ngOnInit() {
  }

}
