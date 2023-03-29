import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  public handleError(error: HttpErrorResponse){
    if(error.status === 0){ // if error is on client side
      console.error('An error occurred: ', error.error)
    } else{ // if error is on server side
      console.error(`Backend return code ${error.status}, body was: `, error.error)
    }

    return throwError (() => new Error ('An error occuurred. Please try again later.'))
  }
}
