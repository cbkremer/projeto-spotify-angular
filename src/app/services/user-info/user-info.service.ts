import { PlaylistService } from './../playlist/playlist.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { UserInfoModel } from 'src/app/model/user_info.model';

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
export class UserInfoService {
  //private user_info: UserInfoModel | undefined;
  private user_info: UserInfoModel;
  //dar uma ajeitada nisso depois
  private name = "";
  private get_one_url = 'http://localhost:8082/user_info/';
  private get_one_url_by_email = 'http://localhost:8082/user_info/email/';
  private criar_conta_url = 'http://localhost:8082/user_info';
  private update_user_name_url = 'http://localhost:8082/user_info/name/';
  private update_user_email_url = 'http://localhost:8082/user_info/email/';
  private update_user_password_url = 'http://localhost:8082/user_info/password/';
  private delete_user_url = 'http://localhost:8082/user_info/';
  //private get_all_url = '';
  //private all_users: UserInfoModel[] = [];

  constructor(private httpClient: HttpClient) {
    this.user_info = {name: '', email: '',password: '',playlists:[]};
    /*this.getUser().subscribe((user_info => {
      this.user_info = user_info;
    }));*/
  }
  getUser(): Observable<UserInfoModel>{
    return this.httpClient.get<UserInfoModel>(this.get_one_url+this.getUserName()).pipe(
      tap(user => {
        if(user.email == undefined||user.email == null|| user.email == ''){
          console.log('epa');
        }
        else{
          console.log(user.email);
        }
      }
      )
    );
  }
  setUserByEmail(email: string | null){
    console.log('setting user by email: '+email);
    return this.httpClient.get<UserInfoModel>(this.get_one_url_by_email+email).subscribe(user => {
      this.user_info = user;
      //this.name = user.name;
      localStorage.setItem('name',user.name);
    });
  }
  createUser(user_info: UserInfoModel){
    return this.httpClient.post<UserInfoModel>(this.criar_conta_url, user_info, {responseType: 'json'});
  }
  public updateUserName(user_info:UserInfoModel){

    return this.httpClient.put<UserInfoModel>(this.update_user_name_url+this.getUserName(), user_info, httpOptions);
  }
  public updateUserEmail(user_info:UserInfoModel){
    return this.httpClient.put<UserInfoModel>(this.update_user_email_url+this.getUserName(), user_info, httpOptions);
  }
  public updateUserPassword(user_info:UserInfoModel){
    return this.httpClient.put<UserInfoModel>(this.update_user_password_url+this.getUserName(), user_info, httpOptions);
  }
  public deleteUser(user_info:UserInfoModel){
    return this.httpClient.delete<UserInfoModel>(this.delete_user_url+user_info.email, httpOptions);
  }
  public getUserName():string | any{
    console.log('user info get user name: '+localStorage.getItem('name'));
    return localStorage.getItem('name');
  }
}
