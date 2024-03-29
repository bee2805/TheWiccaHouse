import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipedbService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:3000/recipes'

  recipe: Recipe[] = []

  // CRUD FUNCTIONALITY
  // READ
  getAllRecipes(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.url)
  }

  // method to craft
  craftRecipe(recipeId: string){
    return this.http.post<any>(`${this.url}/craft`, {recipeId})
  }
}
