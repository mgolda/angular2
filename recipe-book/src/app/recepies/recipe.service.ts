import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

	private recipes: Recipe[] = [
    new Recipe(
    	'Hamburger', 
    	'some hamburger description', 
    	'http://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/6:4/w_620,h_413/the-ultimate-hamburger.jpg', 
    	[
    		new Ingredient('meat', 1),
    		new Ingredient('tomato', 2)
    	]),
    new Recipe(
    	'Pizza', 
    	'some pizza description', 
    	'http://www.cicis.com/media/1138/pizza_trad_pepperoni.png', 
    	[
    		new Ingredient('cheese', 1),
    		new Ingredient('olives', 10)
    	])
  ];

  constructor(private http: Http) { }

  getRecipes () {
  	return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe (recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipebook-dac71.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchData() {
    return this.http.get('https://recipebook-dac71.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      )
  }

}
