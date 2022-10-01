import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes!: Recipe[];
  @Output() onRecipeElSelected = new EventEmitter<Recipe>();

  constructor(private _recipeService: RecipeService) {}
  ngOnInit(): void {
    this.recipes = this._recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe) {
    this.onRecipeElSelected.emit(recipe);
  }
}
