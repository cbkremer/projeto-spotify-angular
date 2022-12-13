import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }
  login(email:string) {
    localStorage.setItem('email', email);
    console.log(localStorage.getItem("email"));
  }
}
