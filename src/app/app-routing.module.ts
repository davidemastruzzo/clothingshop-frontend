import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemDetailsComponent} from './components/item-details/item-details.component';
import {ItemsOverviewComponent} from './components/items-overview/items-overview.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';


const routes: Routes = [
  {path: '', component: ItemsOverviewComponent },
  {path: 'item-details', component: ItemDetailsComponent},
  {path: 'items-overview', component: ItemsOverviewComponent},
  {path: 'cart', component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
