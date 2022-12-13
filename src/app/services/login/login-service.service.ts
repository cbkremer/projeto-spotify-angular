import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }
  login(email:string) {
    localStorage.setItem('Name', email);
  }

  getCostumer() {
    const user = {
      Name:  sessionStorage.getItem('firstName');
  }
}
