import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { VerifyService } from '../services/verify.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(private verify: VerifyService){}

  username = new FormControl("");
  password = new FormControl("");

  checkVefification(){
    this.verify.checkVerification(this.username.value!, this.password.value!).subscribe((response) => {
      if(response.success){
        console.log("login success")
        sessionStorage.setItem("username", this.username.value!)
      } else {
        console.log("error has occurred")
      }
    })
  }

}
