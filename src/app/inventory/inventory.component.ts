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

  ngOnInit(){
    this.itemService.getAllItems().subscribe((data) =>{
      console.log(data);
      this.inventory = data;
    })
  }

  // UPDATE
  newQuantityPlaceholder: number = 0

  detectQuantityChange(e: any){
    this.newQuantityPlaceholder = +e.target.value;
  }

  updateQuantity(_id: string){
    this.itemService.updateQuantity(_id, this.newQuantityPlaceholder).subscribe((item) => {
      console.log(item.quantity);
      alert('quantity updated!')
    })
  }

}
