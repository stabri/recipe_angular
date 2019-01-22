import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthService } from './auth-fake.service';
import { AuthGuard } from './app-route-guard.service';
import { FormComponent } from './code-examples/form/form.component';
import { FormReactiveComponent } from './code-examples/form-reactive/form-reactive.component';
import { RecipeService } from './recipes/recipe.service';
import { PipesComponent } from './code-examples/pipes/pipes.component';
import { ShortenPipe } from './code-examples/pipes/shorten.pipe';
import { FilterPipe } from './code-examples/pipes/filter.pipe';
import { HttpComponent } from './code-examples/http/http.component';
import { ServersService } from './servers.service';
import { RecipePersistanceService } from './recipe-persistance.service';
import { SinginComponent } from './auth/singin/singin.component';
import { SingoutComponent } from './auth/singout/singout.component';

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
    RecipeStartComponent,
    RecipeEditComponent,
    ErrorPageComponent,
    FormComponent,
    FormReactiveComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    HttpComponent,
    SinginComponent,
    SingoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ShoppingListService, AuthService, AuthGuard, RecipeService, ServersService, RecipePersistanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
