import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../../recipe.model";
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit() {
    this.recipe = this.recipeService.getRequiredRecipe(+this.recipe.id)
  }

  // onSelected() {
  //   this.recipeService.selectedRecipe.emit(this.recipe);
  // }

}
