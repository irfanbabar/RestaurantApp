import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {  Subject }  from 'rxjs';

@Injectable()

export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(1,
      'Spaghetti',
      'Very Tasty Reman',
      '../../../assets/spaghetti-dish.jpg',
      [
        new Ingredient('noodles', 2),
        new Ingredient('chicken', 2)
      ]
    ),
    new Recipe(2,
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

  getRequiredRecipe(id: number) {
    return this.recipes.find(
      (data) => data.id === id
    );
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addNewRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    // this.recipes[index] = newRecipe;
    let recipe = this.recipes.filter((recipe) => recipe.id == index)[0];
    let indexRecipe = this.recipes.indexOf(recipe);
    this.recipes[indexRecipe] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
}