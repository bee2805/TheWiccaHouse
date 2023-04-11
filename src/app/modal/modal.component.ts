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
        sessionStorage.setItem("username", this.username.value!);
        window.location.reload();
      } else {
        alert('you have entered your username or password wrong, try again.');
      }
    })
  }

}
