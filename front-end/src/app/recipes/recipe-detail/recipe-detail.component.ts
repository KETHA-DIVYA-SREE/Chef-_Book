import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;

  constructor(private _recipeService: RecipeService) {}
  ngOnInit(): void {}

  onAddToShoppingList() {
    this._recipeService.addIngreientsToShoppingList(this.recipe.ingredients);
  }
}
