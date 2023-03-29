import { Component } from '@angular/core';
import { Item } from '../models/item';
import { InventorydbService } from '../services/inventorydb.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  constructor (private itemService : InventorydbService){}

  inventory: Item[] = [];
  whiteMagicItems: Item[] = [];

  ngOnInit(){
    this.itemService.getAllItems().subscribe((data) =>{
      this.inventory = data;
      console.log(data)

      const whiteMagic = data.filter((item) => {
        if(item.category === "White Magic"){
          console.log("alright")
        }
      })
      this.whiteMagicItems = whiteMagic
      console.log(whiteMagic)
    })
  }

  // UPDATE
  newQuantityPlaceholder: number = 0

  detectQuantityChange(e: any){
    this.newQuantityPlaceholder = +e.target.value;
  }

  updateQuantity(_id: string){
    this.itemService.updateQuantity(_id, this.newQuantityPlaceholder).subscribe((item) => {
      alert('quantity updated!')
    })
  }

}
