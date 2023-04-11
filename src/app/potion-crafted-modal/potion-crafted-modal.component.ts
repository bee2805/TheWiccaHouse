import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CraftingComponent } from '../crafting/crafting.component';

@Component({
  selector: 'app-potion-crafted-modal',
  templateUrl: './potion-crafted-modal.component.html',
  styleUrls: ['./potion-crafted-modal.component.css']
})
export class PotionCraftedModalComponent {

  recievedData;

  constructor(public dialogRef: MatDialogRef<CraftingComponent>,@Inject(MAT_DIALOG_DATA) public data: any){
    this.recievedData = data;
  }
  
  close(){
    window.location.reload()
  }
}
