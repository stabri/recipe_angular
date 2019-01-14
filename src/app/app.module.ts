import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.componenet';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { BasicHighlightDirective } from './shared-directives/basic-highlight.directive';
import { BetterHightlightsDirective } from './shared-directives/better-hightlights.directive';
import { HightlightHostBindingDirective } from './shared-directives/hightlight-host-binding.directive';
import { CodeExamplesComponent } from './code-examples/code-examples.component';
import { UnlessDirective } from './shared-directives/structural-directives/unless.directive';
import { DropDownDirective } from './shared-directives/structural-directives/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeDetailComponent,
    BasicHighlightDirective,
    BetterHightlightsDirective,
    HightlightHostBindingDirective,
    CodeExamplesComponent,
    UnlessDirective,
    DropDownDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
