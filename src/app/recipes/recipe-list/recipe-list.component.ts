import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Spaghetti', 'Very Tasty Reman',
    'http://www.wallpaperawesome.com/wallpapers-awesome/wallpapers-food-drinks-cocktails-cake-meat-pasta-pizza-awesome/wallpaper-spaghetti-italian-pasta.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
