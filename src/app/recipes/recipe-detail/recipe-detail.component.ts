import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  recipeId: string;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeId = params['id'];
        this.selectedRecipe = this.recipeService.getRequiredRecipe(+this.recipeId);
      }
    );
  }

  goToEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  deleteRecipe() {
    let recipeIndex = +this.recipeId;
    console.log(recipeIndex)
    this.recipeService.deleteRecipe(recipeIndex);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
