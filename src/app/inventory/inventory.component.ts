import { Component } from '@angular/core';
import { Item } from '../models/item';
import { InventorydbService } from '../services/inventorydb.service';
import { RecipedbService } from '../services/recipedb.service';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  constructor (private itemService : InventorydbService, private recipeService : RecipedbService){}

  inventory: Item[] = [];
  recipes: Recipe[] = [];

  ngOnInit(){
    this.itemService.getAllItems().subscribe((data) =>{
      this.inventory = data;
    }),
    this.recipeService.getAllRecipes().subscribe((recipeData) => {
      this.recipes = recipeData;
    })
  }

  // UPDATE
  newQuantityPlaceholder: number = 0

  detectQuantityChange(e: any){
    this.newQuantityPlaceholder = +e.target.value;
  }

  updateQuantity(_id: string){
    this.itemService.updateQuantity(_id, this.newQuantityPlaceholder).subscribe((item) => {
      // window.location.reload()
      alert('quantity updated!')
    })
  }

}
