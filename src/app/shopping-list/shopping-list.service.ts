import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {

  newIngredient = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Tomato', 5),
    new Ingredient('Pasta', 250)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.newIngredient.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    // ...ingredients traansform array into list
    this.ingredients.push(...ingredients);
    this.newIngredient.next(this.ingredients.slice());
  }

}
