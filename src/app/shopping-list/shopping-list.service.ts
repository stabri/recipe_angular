import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {

  newIngredient = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Tomato', 5),
    new Ingredient('Pasta', 250)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.newIngredient.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // ...ingredients traansform array into list
    this.ingredients.push(...ingredients);
    this.newIngredient.next(this.ingredients.slice());
  }

  removeIngredient(ingredient: Ingredient) {
    const index = this.ingredients.indexOf(ingredient, 0);
    if (index > -1) {
      this.ingredients[index].amount -= ingredient.amount;
      this.newIngredient.next(this.ingredients.slice());
    }
  }

}
