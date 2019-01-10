import { EventEmitter } from '@angular/core'

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  newIngredient = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Tomato', 5),
    new Ingredient('Pasta', 250)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.newIngredient.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    // ...ingredients traansform array into list
    this.ingredients.push(...ingredients);
    this.newIngredient.emit(this.ingredients.slice());
  }

}
