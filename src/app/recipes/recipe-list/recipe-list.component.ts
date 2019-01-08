import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelecter = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('TestRecipe', 'This is a test',
    'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
    new Recipe('Recipe2', 'This is a test recipe 2',
    'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelecter(recipeEl: Recipe){
    this.recipeSelecter.emit(recipeEl);
  }
}
