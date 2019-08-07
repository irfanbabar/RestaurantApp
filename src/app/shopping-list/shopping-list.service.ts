import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  ingredientChanged = new EventEmitter<Ingredient[]>();

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void{
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    let already_added = ingredients.map( (ing) => {
                          return this.ingredients.filter( (obj) => {
                                    return obj.name === ing.name && obj.amount === ing.amount
                                  })
                        }).flat();
 
    if (already_added.length == 0) {
      this.ingredients.push(...ingredients);
      this.ingredientChanged.emit(this.ingredients.slice());
      alert('Added in your shopping list');
    }else {
      alert('Already added, wont add it again')
    }
  }
}