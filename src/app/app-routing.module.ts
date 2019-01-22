import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CodeExamplesComponent } from './code-examples/code-examples.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './app-route-guard.service';
import { FormComponent } from './code-examples/form/form.component';
import { FormReactiveComponent } from './code-examples/form-reactive/form-reactive.component';
import { PipesComponent } from './code-examples/pipes/pipes.component';
import { HttpComponent } from './code-examples/http/http.component';
import { SinginComponent } from './auth/singin/singin.component';

const appRouts: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent },
  ]},
  { path: 'examples', component: CodeExamplesComponent, children: [
    { path: 'form', component: FormComponent },
    { path: 'form-reactive', component: FormReactiveComponent },
    { path: 'pipes', component: PipesComponent },
    { path: 'http', component: HttpComponent },
  ]},
  { path: 'examples/:option', canActivate: [AuthGuard], component: CodeExamplesComponent },
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: 'singup', component: SinginComponent},
  { path: '**', component: ErrorPageComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
