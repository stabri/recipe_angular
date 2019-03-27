import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {CodeExamplesComponent} from './code-examples/code-examples.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {AuthGuard} from './app-route-guard.service';
import {FormComponent} from './code-examples/form/form.component';
import {FormReactiveComponent} from './code-examples/form-reactive/form-reactive.component';
import {PipesComponent} from './code-examples/pipes/pipes.component';
import {HttpComponent} from './code-examples/http/http.component';
import {SinginComponent} from './auth/singin/singin.component';
import {HomeComponent} from "./home/home.component";

const appRouts: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  {path: 'singup', component: SinginComponent},
  {path: '**', component: ErrorPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],  // forRoot only in app-routing module
  exports: [RouterModule],
})
export class AppRoutingModule {
}
