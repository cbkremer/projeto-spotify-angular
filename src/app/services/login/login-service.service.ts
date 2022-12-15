import { Router } from '@angular/router';
import { UserInfoModel } from './../../model/user_info.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface Response {
  status: number,
  message: string
}
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  user_info:UserInfoModel | any;
  private get_one_url_by_email = 'http://localhost:8082/user_info/email/';
  private validate_user_url = 'http://localhost:8082/user_info/validar';

  constructor(private router:Router, private httpClient: HttpClient) {

  }

  login(email:string) {
    this.setUserByEmail(email);
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['center-main']).then(() => {
      window.location.reload();
    });
  }
  setUserByEmail (email: string | null){
    console.log('here');
    return this.httpClient.get<UserInfoModel>(this.get_one_url_by_email+email).subscribe(user => {
      this.user_info = user;
      //this.name = user.name;
      localStorage.setItem('name',user.name);
      this.wait(1000);
    });
  }
  wait(ms: number){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
    }
    this.router.navigate(['center-main/'+this.user_info.name]).then(() => {
      console.log('hahahaha');
      window.location.reload();
    });
  }
  validateUserLogin(user_info: UserInfoModel | any){
    return this.httpClient.get<UserInfoModel>(this.validate_user_url, user_info).subscribe((response:any)=>{
      console.log(JSON.stringify(response.response))
    });
  }
}
