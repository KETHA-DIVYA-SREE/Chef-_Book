import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Ingredient1', 1),
    new Ingredient('Ingredient2', 2),
    new Ingredient('Ingredient3', 3),
  ];
  constructor() {}

  ngOnInit(): void {}
}
