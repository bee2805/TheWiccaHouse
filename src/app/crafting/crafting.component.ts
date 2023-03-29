import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-crafting',
  templateUrl: './crafting.component.html',
  styleUrls: ['./crafting.component.css']
})
export class CraftingComponent {
  // disabled = new FormControl(false);
  constructor(private dialogRef: MatDialog){}
  // check if user is verified
  // isVerified = false

  ngOnInit(){
    let username = sessionStorage.getItem("username");
    console.log(username);

    if(username === null || username == undefined){
      this.dialogRef.open(ModalComponent)
    }
  }

  username = sessionStorage.getItem("username");
}
