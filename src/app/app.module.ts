import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.componenet';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';
import {ErrorPageComponent} from './error-page/error-page.component';
import {AuthService} from './auth-fake.service';
import {AuthGuard} from './app-route-guard.service';
import {RecipeService} from './recipes/recipe.service';
import {ServersService} from './servers.service';
import {RecipePersistanceService} from './recipe-persistance.service';
import {SharedModule} from "./shared/shared.module";
import {ShoppingModule} from "./shopping-list/shopping.module";
import {AuthModule} from "./auth/auth.module";
import {ExampleModule} from "./code-examples/example.module";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorPageComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ShoppingModule,
    SharedModule,
    AuthModule,
    ExampleModule,
    AppRoutingModule,
  ],
  providers: [ShoppingListService, AuthService, AuthGuard, RecipeService, ServersService, RecipePersistanceService],
  bootstrap: [AppComponent]
 })
export class AppModule {
}
