import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetti',
      'Very Tasty Reman',
      '../../../assets/spaghetti-dish.jpg',
      [
        new Ingredient('noodles', 2),
        new Ingredient('chicken', 2)
      ]
    ),
    new Recipe(
      'Chicken Bread',
      'This is one hell of Spicy',
      '../../../assets/chicken-pieces.jpg',
      [
        new Ingredient('Bread', 2),
        new Ingredient('chicken', 5)
      ]
    )
  ];

  constructor(
    private shoppingListService: ShoppingListService
  ) {}

  getRecipes() {
    // this.recipes will point to actual array, so if we change something it will effect to actual array
    // So we will create a copy of it by using splice()
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}