import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfoModel } from 'src/app/model/user_info.model';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  //private user_info: UserInfoModel | undefined;

  //dar uma ajeitada nisso depois
  private name = "nome8";
  private get_one_url = 'http://localhost:8082/user_info/'+this.name;
  //private get_all_url = '';
  //private all_users: UserInfoModel[] = [];

  constructor(private httpClient: HttpClient) {
    //this.user_info = {name: '', email: '',password: '',playlists:[]};
  }
  getUser(): Observable<UserInfoModel>{
    return this.httpClient.get<UserInfoModel>(this.get_one_url);
  }
}
