import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  ingredientChanged = new Subject<Ingredient[]>();

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
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
}