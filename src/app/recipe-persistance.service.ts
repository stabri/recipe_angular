import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './recipes/recipe.model';


@Injectable()
export class RecipePersistanceService {

  constructor(private httpClient: HttpClient){
  }

  storeRecipes(recipes: Recipe[]){
    return this.httpClient.put('https://recipe-app-47480.firebaseio.com/recipes.json', recipes);
  }

  fetchRecipes(){
    return this.httpClient.get('https://recipe-app-47480.firebaseio.com/recipes.json');
  }

}
