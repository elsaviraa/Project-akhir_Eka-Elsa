//import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class ShoppingListService {
  
  IngredientChanged = new Subject<Ingredient[]>();
  
  startedEditing = new Subject<number>();

  private ingredients:Ingredient[]=[
    //new Ingredient(23,'kiwi'),
  ];
constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }
  
  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.IngredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.IngredientChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.IngredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.IngredientChanged.next(this.ingredients.slice());
  }
}
    