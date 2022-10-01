import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private _ingredients: Ingredient[] = [
    new Ingredient('Ingredient1', 1),
    new Ingredient('Ingredient2', 2),
    new Ingredient('Ingredient3', 3),
  ];

  constructor() {}

  getIngredients() {
    return this._ingredients.slice();
  }
}
