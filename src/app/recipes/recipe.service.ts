import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  

  private recipes: Recipe[] = [
    new Recipe('TestRecipe', 'This is a test',
    'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
    new Recipe('Recipe2', 'This is a test recipe 2',
    'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
  ];

  getRecipes(){
    // return copy of recipes array slice()
    return this.recipes.slice();
  }


}
