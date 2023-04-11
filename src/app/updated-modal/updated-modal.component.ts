import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-updated-modal',
  templateUrl: './updated-modal.component.html',
  styleUrls: ['./updated-modal.component.css']
})
export class UpdatedModalComponent {
  recievedData;

  constructor(public dialogRef: MatDialogRef<HomeComponent>,@Inject(MAT_DIALOG_DATA) public data: any){
    this.recievedData = data;
  }

  close(){
    window.location.reload()
  }
}
