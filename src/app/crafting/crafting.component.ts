import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { RecipedbService } from '../services/recipedb.service';
import { Recipe } from '../models/recipe';
import { PotionCraftedModalComponent } from '../potion-crafted-modal/potion-crafted-modal.component';
import { CannotCraftComponent } from '../cannot-craft/cannot-craft.component';

@Component({
  selector: 'app-crafting',
  templateUrl: './crafting.component.html',
  styleUrls: ['./crafting.component.css']
})
export class CraftingComponent {
  // disabled = new FormControl(false);
  constructor(private dialogRef: MatDialog, private recipeService : RecipedbService){}

  recipes: Recipe[] = [];
  selectedRecipe?: string;
  filtered!: any;

  craftable?: boolean;
  recipe_id?: String;

  // declaring variables for images
  recipeImage?: string;
  ingridientOneImage?: string;
  ingridientTwoImage?: string;
  ingridientThreeImage?: string;
  ingridientFourImage?: string;
  ingridientFiveImage?: string;
  ingridientSixImage?: string;

  // declaring variables for ingridient quantities
  ingridientOneAmount?: number;
  ingridientOneAmountNeeded?: number;
  ingridientTwoAmount?: number;
  ingridientTwoAmountNeeded?: number;
  ingridientThreeAmount?: number;
  ingridientThreeAmountNeeded?: number;
  ingridientFourAmount?: number;
  ingridientFourAmountNeeded?: number;
  ingridientFiveAmount?: number;
  ingridientFiveAmountNeeded?: number;
  ingridientSixAmount?: number;
  ingridientSixAmountNeeded?: number;

  isCrafting = false;

  ngOnInit(){
    let username = sessionStorage.getItem("username");
    console.log(username);

    if(username === null || username == undefined){
      this.dialogRef.open(ModalComponent)
    } else {
      this.dialogRef.closeAll()
    }

    this.recipeService.getAllRecipes().subscribe((recipeData) => {
      this.recipes = recipeData;
    })
  }

  recipeChange(){
    // I know I could probably do this in way less lines buuuuttt...
    this.filtered = this.recipes.find((obj) => {return obj.name == this.selectedRecipe})
    // setting images
    this.recipeImage = this.filtered?.image;
    this.ingridientOneImage = this.filtered?.ingredients[0]?.inventoryId.image;
    this.ingridientTwoImage = this.filtered?.ingredients[1]?.inventoryId.image;
    this.ingridientThreeImage = this.filtered?.ingredients[2]?.inventoryId.image;
    this.ingridientFourImage = this.filtered?.ingredients[3]?.inventoryId.image;
    this.ingridientFiveImage = this.filtered?.ingredients[4]?.inventoryId.image;
    this.ingridientSixImage = this.filtered?.ingredients[5]?.inventoryId.image;
    // setting quantities
    this.ingridientOneAmount = this.filtered.ingredients[0].inventoryId.quantity;
    this.ingridientOneAmountNeeded = this.filtered.ingredients[0].amountNeeded;
    this.ingridientTwoAmount = this.filtered.ingredients[1].inventoryId.quantity;
    this.ingridientTwoAmountNeeded = this.filtered.ingredients[1].amountNeeded;
    this.ingridientThreeAmount = this.filtered.ingredients[2].inventoryId.quantity;
    this.ingridientThreeAmountNeeded = this.filtered.ingredients[2].amountNeeded;
    this.ingridientFourAmount = this.filtered.ingredients[3].inventoryId.quantity;
    this.ingridientFourAmountNeeded = this.filtered.ingredients[3].amountNeeded;
    this.ingridientFiveAmount = this.filtered.ingredients[4].inventoryId.quantity;
    this.ingridientFiveAmountNeeded = this.filtered.ingredients[4].amountNeeded;
    this.ingridientSixAmount = this.filtered.ingredients[5].inventoryId.quantity;
    this.ingridientSixAmountNeeded = this.filtered.ingredients[5].amountNeeded;

    this.craftable = this.filtered.craftable
  }

  username = sessionStorage.getItem("username");

  craftRecipe(recipeId : string){
    if(this.username === null || this.username == undefined){
      this.dialogRef.open(ModalComponent)
    } else {
      this.isCrafting = true
      this.recipeService.craftRecipe(recipeId!).subscribe((response) => {
        this.isCrafting = false
        if(response.success){
          this.dialogRef.open(PotionCraftedModalComponent, {
            data: {
              name: this.filtered.name,
              image: this.recipeImage
            }
          });
        }
      })
    }
  }

  nocraft(){
    this.dialogRef.open(CannotCraftComponent)
  }
}
