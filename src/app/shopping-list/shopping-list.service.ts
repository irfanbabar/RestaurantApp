import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  onItemSelect = new Subject<number>();
  ingredientChanged = new Subject<Ingredient[]>();

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient): void{
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    let already_added = ingredients.map( (ing) => {
                          return this.ingredients.filter( (obj) => {
                                    return obj.name === ing.name && obj.amount === ing.amount
                                  })
                        });
 
    if (already_added.length == 0) {
      this.ingredients.push(...ingredients);
      this.ingredientChanged.next(this.ingredients.slice());
      alert('Added in your shopping list');
    }else {
      alert('Already added, wont add it again')
    }
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}