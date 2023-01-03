import { Router } from '@angular/router';
import { PlaylistService } from './../services/playlist/playlist.service';
import { UserInfoService } from './../services/user-info/user-info.service';
import { UserInfoModel } from 'src/app/model/user_info.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {
  temp_nome: string = '';
  temp_email: string = '';
  user_info: UserInfoModel | any;
  editar_nome: boolean = false;
  editar_email: boolean = false;
  editar_senha: boolean = false;
  no_password: boolean = false;

  constructor(private user_service:UserInfoService, private router: Router) {

    this.user_service.getUser().subscribe((user: UserInfoModel) => {
      console.table(user);
      this.user_info = user;
      this.temp_nome = '';
      this.temp_email = '';
      //this.playlist = null;
      //this.playlist = {musics: [], name: '', quantity: 0, user_name: '', tag: 0};
      //this.user_info.playlists = JSON.parse(user_info.playlists);
    });
  }

  ngOnInit(): void {
    this.temp_nome = '';
    this.temp_email = '';
  }
  public editarNome(){
    this.temp_nome = this.user_info.name;
    this.editar_nome = true;
  }
  public salvarNome(){
    this.user_service.updateUserName(this.user_info).subscribe();
    localStorage.setItem('name',this.user_info.name);
    this.editar_nome = false;
    this.temp_nome = '';
    //medida provisoria, mudar isso depois pelo amor de deus
    //this.user_service.setUserName(this.user_info.name);
  }
  public cancelarNome(){
    this.user_info.name = this.temp_nome;
    this.temp_nome = '';
    this.editar_nome = false;
  }
  public editarEmail(){
    this.temp_email = this.user_info.email;
    this.editar_email = true;
  }
  public salvarEmail(){
    this.user_service.updateUserEmail(this.user_info).subscribe();
    this.temp_email = '';
    this.editar_email = false;
  }
  public cancelarEmail(){
    this.user_info.email = this.temp_email;
    this.temp_email = '';
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
  cancelarSenha(){
    this.editar_senha = false;
    this.user_info.password = '';
    this.no_password = false;
  }
  public deletarUsuario(){
    this.user_service.deleteUser(this.user_info).subscribe();
    localStorage.clear();
    this.router.navigate(['center-main/']).then(() => {
      //console.log('hahahaha');
      window.location.reload();
    });
  }
}
