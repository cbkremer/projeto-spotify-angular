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

  constructor(private user_service: UserInfoService, private router: Router, private login_service: LoginServiceService) {
    this.user_info = {name: '', email: '',password:'',playlists:[]}
  }

  ngOnInit(): void {
  }
  public logar(){
    //autenticar
    this.user_service.setUserByEmail(this.email);
    this.login_service.login(this.email);
    //this.router.navigate(['library/'+this.user_service.getUserName()]);
  }
}
