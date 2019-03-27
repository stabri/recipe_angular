import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.componenet';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {BasicHighlightDirective} from './shared-directives/basic-highlight.directive';
import {BetterHightlightsDirective} from './shared-directives/better-hightlights.directive';
import {HightlightHostBindingDirective} from './shared-directives/hightlight-host-binding.directive';
import {CodeExamplesComponent} from './code-examples/code-examples.component';
import {UnlessDirective} from './shared-directives/structural-directives/unless.directive';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';
import {ErrorPageComponent} from './error-page/error-page.component';
import {AuthService} from './auth-fake.service';
import {AuthGuard} from './app-route-guard.service';
import {FormComponent} from './code-examples/form/form.component';
import {FormReactiveComponent} from './code-examples/form-reactive/form-reactive.component';
import {RecipeService} from './recipes/recipe.service';
import {PipesComponent} from './code-examples/pipes/pipes.component';
import {ShortenPipe} from './code-examples/pipes/shorten.pipe';
import {FilterPipe} from './code-examples/pipes/filter.pipe';
import {HttpComponent} from './code-examples/http/http.component';
import {ServersService} from './servers.service';
import {RecipePersistanceService} from './recipe-persistance.service';
import {SinginComponent} from './auth/singin/singin.component';
import {SingoutComponent} from './auth/singout/singout.component';
import {RecipesModule} from "./recipes/recipes.module";
import {DropDownDirective} from "./shared-directives/structural-directives/dropdown.directive";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ErrorPageComponent,
    FormComponent,
    FormReactiveComponent,
    PipesComponent,
    HttpComponent,
    SinginComponent,
    SingoutComponent,
    CodeExamplesComponent,
    BasicHighlightDirective,
    UnlessDirective,
    BetterHightlightsDirective,
    HightlightHostBindingDirective,
    DropDownDirective,
    ShortenPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RecipesModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ShoppingListService, AuthService, AuthGuard, RecipeService, ServersService, RecipePersistanceService],
  bootstrap: [AppComponent]
 })
export class AppModule {
}
