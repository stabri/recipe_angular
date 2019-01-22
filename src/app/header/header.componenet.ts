import { Component } from "@angular/core";
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.componenet.html'
})

export class HeaderComponent {
  constructor(private recipeService: RecipeService){}

  onSaveRecipes(){
    this.recipeService.persistRecipes();
  }

  onFetchRecipes(){
    this.recipeService.fetchRecipes();
  }
}
