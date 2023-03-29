import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  constructor(private http: HttpClient, private errorHandler: ErrorService) { }

  httpUrl: string = "http://localhost:3000/user/login"

  // this method checks if user is verified to craft
  checkVerification(username: string, password: string): Observable<any>{
    return this.http.post<any>(this.httpUrl, {username, password})
    // .pipe(
    //   retry(2),
    //   catchError(this.errorHandler.handleError)
    // )
  }
  
}

