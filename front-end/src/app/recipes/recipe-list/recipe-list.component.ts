import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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
  @Output() onRecipeElSelected = new EventEmitter<Recipe>();

  constructor() {}
  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.onRecipeElSelected.emit(recipe);
  }
}
