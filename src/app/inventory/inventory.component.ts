import { Component } from '@angular/core';
import { Item } from '../models/item';
import { InventorydbService } from '../services/inventorydb.service';
import { RecipedbService } from '../services/recipedb.service';
import { Recipe } from '../models/recipe';
import { UpdatedModalComponent } from '../updated-modal/updated-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  constructor (private itemService : InventorydbService, private recipeService : RecipedbService, private dialogRef: MatDialog){}

  inventory: Item[] = [];
  recipes: Recipe[] = [];
  username = sessionStorage.getItem("username");

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
    if(this.username === null || this.username == undefined){
      this.dialogRef.open(ModalComponent)
    } else {
      this.itemService.updateQuantity(_id, this.newQuantityPlaceholder).subscribe((item) => {
        this.dialogRef.open(UpdatedModalComponent, {
          data: {
            name: item.name,
            image: item.image,
            quantity: this.newQuantityPlaceholder
          }
        });
      })
    }
  }

}
