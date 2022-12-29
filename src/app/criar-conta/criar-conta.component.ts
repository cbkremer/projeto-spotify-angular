import { LoginServiceService } from './../services/login/login-service.service';
import { UserInfoModel } from './../model/user_info.model';
import { UserInfoService } from './../services/user-info/user-info.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent implements OnInit {
  user_info: UserInfoModel;
  user_name: string = '';
  password: string = '';
  email: string = '';
  aviso: any;
  constructor(private user_service: UserInfoService, private router: Router, private login_service:LoginServiceService) {
    this.user_info = {name: '', email: '',password:'',playlists:[]}
    this.aviso = '';
  }

  ngOnInit(): void {
  }
  public criarConta(){
    this.user_info.name = this.user_name;
    this.user_info.email = this.email;
    this.user_info.password = this.password;
    this.user_service.createUser(this.user_info).subscribe((response: any) => {
      this.aviso = JSON.stringify(response.response);
      //this.login_service.login(this.user_info.email);
    });
    //this.router.navigate(['library/'+this.user_info.name]);
  }
}
