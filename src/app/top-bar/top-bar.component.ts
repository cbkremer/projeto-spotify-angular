import { LoginServiceService } from './../services/login/login-service.service';
import { LoginScreenComponent } from './../login-screen/login-screen.component';
import { UserInfoService } from './../services/user-info/user-info.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  user_name: string = '';
  logged_in: boolean = false;
  constructor(
    private router: Router,
    private user_service:UserInfoService,
    private login_service:LoginServiceService
  ) {

  }

  ngOnInit(): void {
    this.user_name = this.user_service.getUserName();
    if(this.user_name == '' || this.user_name == null || this.user_name == undefined){
      this.logged_in = false;
    }
    else{
      this.logged_in = true;
    }
  }
  public goToInscrever(){
    this.router.navigate(['criar-conta']);
  }
  public goToLogin(){
    this.router.navigate(['login']);
  }
  public goToMinhaConta(){
    this.router.navigate(['minha-conta/'+this.user_name]);
  }
  public logout(){
    this.login_service.logout();

  }
  checkLogIn(){
    this.user_name = this.user_service.getUserName();
    if(this.user_name == '' || this.user_name == null || this.user_name == undefined){
      this.logged_in = false;
    }
    else{
      this.logged_in = true;
    }
  }
  checkEmailHaHa(){
    console.log(localStorage.getItem('email'));
  }
}
