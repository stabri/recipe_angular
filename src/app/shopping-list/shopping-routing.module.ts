import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list.component";

const shopRoust: Routes = [
  {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(shopRoust)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule {

}
