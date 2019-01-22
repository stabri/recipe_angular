import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
import { RecipePersistanceService } from '../recipe-persistance.service';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();
  constructor(private shoppingListService: ShoppingListService,
              private recipePersistanceService: RecipePersistanceService) { }

  private recipes: Recipe[] = [
    new Recipe('Tuna Salat', 'This is a awesome tuna salat',
      'https://img.taste.com.au/1jAOXAA_/w720-h480-cfill-q80/taste/2016/11/mediterranean-tuna-salad-31059-1.jpeg',
      [new Ingredient('Tuna', 200), new Ingredient('Salat', 100), new Ingredient('Tomatoa', 2)]),
    new Recipe('Burger', '200g of delitious Beef',
      'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS-696x696.jpg',
      [new Ingredient('Beef', 200), new Ingredient('Bread', 1), new Ingredient('Tomatoa', 2), new Ingredient('BBQ souce', 25)]),
  ];

  getRecipes() {
    // return copy of recipes array slice()
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // ingredients.forEach(i => {
    //   this.shoppingListService.addIngredient(i);
    // })
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  persistRecipes(){
    this.recipePersistanceService.storeRecipes(this.recipes)
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  }

  fetchRecipes(){
    this.recipePersistanceService.fetchRecipes()
      .subscribe(
        (result: any[]) => {
          this.recipes = [];
          result.forEach(variable => {
              this.recipes.push(variable)
          });
        },
        (error) => console.log(error)
      );
      this.recipesChanged.next(this.recipes.slice());
  }

}
