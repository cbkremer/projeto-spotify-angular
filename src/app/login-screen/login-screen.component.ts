import { LoginServiceService } from './../services/login/login-service.service';
import { TopBarComponent } from './../top-bar/top-bar.component';
import { UserInfoModel } from 'src/app/model/user_info.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from '../services/user-info/user-info.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {
  user_info: UserInfoModel;
  email: string = '';
  password: string = '';
  aviso: any;

  constructor(private user_service: UserInfoService, private router: Router, private login_service: LoginServiceService) {
    this.user_info = {name: '', email: '',password:'',playlists:[]}
  }

  ngOnInit(): void {
  }
  public logar(){
    this.user_info.email = this.email;
    this.user_info.password = this.password;
    this.user_info.name = '';
    this.user_info.playlists = [];
    this.login_service.validateUserLogin(this.user_info).subscribe((response: any) => {
      this.aviso = JSON.stringify(response.response);
      if(this.aviso == '"ok"'){
        console.log('hahaha');
        this.aviso = '';
        this.login_service.login(this.email);
      }
    });
    //console.log(this.aviso);
    //this.user_service.setUserByEmail(this.email);
    //this.login_service.login(this.email);
    //this.router.navigate(['library/'+this.user_service.getUserName()]);
  }
}
