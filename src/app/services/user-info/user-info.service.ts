import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfoModel } from 'src/app/model/user_info.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
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

  //dar uma ajeitada nisso depois
  private name = "nome10";
  private get_one_url = 'http://localhost:8082/user_info/';
  private criar_conta_url = 'http://localhost:8082/user_info';
  //private get_all_url = '';
  //private all_users: UserInfoModel[] = [];

  constructor(private httpClient: HttpClient) {
    //this.user_info = {name: '', email: '',password: '',playlists:[]};
  }
  getUser(): Observable<UserInfoModel>{
    return this.httpClient.get<UserInfoModel>(this.get_one_url+this.name);
  }
  createUser(user_info: UserInfoModel){
    return this.httpClient.post<UserInfoModel>(this.criar_conta_url, user_info, {responseType: 'json'});
  }
  public setUserName(name:string){
    this.name = name;
  }
  public getUserName():string{
    return this.name;
  }
}
