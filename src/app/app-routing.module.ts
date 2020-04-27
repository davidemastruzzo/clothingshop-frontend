import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemDetailsComponent} from './components/item-details/item-details.component';
import {ItemsOverviewComponent} from './components/items-overview/items-overview.component';


const routes: Routes = [
  {path: '', component: ItemsOverviewComponent },
  {path: 'item-details', component: ItemDetailsComponent},
  {path: 'items-overview', component: ItemsOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
