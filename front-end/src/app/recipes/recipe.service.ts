import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private _recipes: Recipe[] = [
    new Recipe(
      'Recipe1',
      'Description1',
      'https://thumbs.dreamstime.com/b/fried-cutlet-burger-vegetables-black-plate-wooden-background-top-view-free-space-your-text-flat-lay-164637219.jpg'
    ),
    new Recipe(
      'Recipe2',
      'Description2',
      'https://img.freepik.com/premium-photo/homemade-indian-flat-bread-chapati-roti-made-with-butter-ghee-flour-water_627828-443.jpg?w=360'
    ),
  ];

  constructor() {}

  getRecipes() {
    return this._recipes.slice();
  }
}
