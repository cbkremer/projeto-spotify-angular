import { UserInfoService } from './../services/user-info/user-info.service';
import { UserInfoModel } from 'src/app/model/user_info.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {
  user_info: UserInfoModel | any;
  editar_nome: boolean = false;
  editar_email: boolean = false;
  editar_senha: boolean = false;
  no_password: boolean = false;

  constructor(private user_service:UserInfoService) {

    this.user_service.getUser().subscribe((user: UserInfoModel) => {
      console.table(user);
      this.user_info = user;
      //this.playlist = null;
      //this.playlist = {musics: [], name: '', quantity: 0, user_name: '', tag: 0};
      //this.user_info.playlists = JSON.parse(user_info.playlists);
    });
  }

  ngOnInit(): void {
  }
  public editarNome(){
    this.editar_nome = true;
  }
  public salvarNome(){
    this.user_service.updateUserName(this.user_info).subscribe();
    this.editar_nome = false;
    //medida provisoria, mudar isso depois pelo amor de deus
    //this.user_service.setUserName(this.user_info.name);
  }
  public editarEmail(){
    this.editar_email = true;
  }
  public salvarEmail(){
    this.user_service.updateUserEmail(this.user_info).subscribe();
    this.editar_email = false;
  }
  public editarSenha(){
    this.editar_senha = true;
  }
  public salvarSenha(){
    if(this.user_info.password == '' || this.user_info.password == undefined){
      this.no_password = true;
    }
    else{
      this.user_service.updateUserPassword(this.user_info).subscribe();
      this.user_info.password = '';
      this.editar_senha = false;
      this.no_password = false;
    }
  }
  public deletarUsuario(){

  }
}
