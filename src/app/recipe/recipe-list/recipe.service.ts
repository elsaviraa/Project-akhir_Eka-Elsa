import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  //property:class recipe
  private recipes:Recipe[]=[
    new Recipe('Fantastic Beasts: The Crimes of Grindelwald',
     'In an effort to thwart Grindelwald plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.', 
    'https://images-na.ssl-images-amazon.com/images/I/51Lvc2sf2GL._SS500.jpg'
  ,[
    new Ingredient(1, 'Johnny Depp'),
    new Ingredient (2,'Eddie Redmayne'),
    new Ingredient (3,'Jude Law'),
    new Ingredient (4,'Ezra Miller'),
    new Ingredient (5,'Zoë Kravitz')
  ]
),
    new Recipe('The Nutcracker and the Four Realms',
     'A young girl is transported into a magical world of gingerbread soldiers and an army of mice.',
      'https://lh3.googleusercontent.com/VUYqXue2fPBQp-mT7GCcai_akRlqgSQ2xbG5xvSxZcZNY2msF5mTypgdEOwdCJlJ1KEZSEVw7G0',
      [
        new Ingredient (1,'Mackenzie Foy'),
        new Ingredient (2,'Keira Knightley'),
        new Ingredient (3,'Misty Copeland')
      ]),
  ];
  
  constructor(private slsService: ShoppingListService,) { }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }

  getRecipe(index:number){
    return this.recipes [index];
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
     this.recipes.splice(index, 1);
     this.recipesChanged.next(this.recipes.slice());
  }
}
