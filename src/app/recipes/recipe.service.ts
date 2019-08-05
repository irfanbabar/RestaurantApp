import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Spaghetti', 'Very Tasty Reman',
    '../../../assets/spaghetti-dish.jpg'),
    new Recipe('Chicken Bread', 'This is one hell of Spicy',
    '../../../assets/chicken-pieces.jpg')
  ];

  getRecipes() {
    // this.recipes will point to actual array, so if we change something it will effect to actual array
    // So we will create a copy of it by using splice()
    return this.recipes.slice();
  }
}