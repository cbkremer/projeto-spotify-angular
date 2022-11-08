import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from 'src/app/model/user_info.model';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private user_info: UserInfo | undefined;
  private id = 15;
  private get_one_url = 'http://localhost:8082/user_info/'+this.id;
  private get_all_url = '';
  private all_users: UserInfo[] = [];

  constructor(private httpClient: HttpClient) {
    this.user_info = {name: '', email: '',password: '',playlistsDTO:[]};
  }
  getUser(): Observable<UserInfo>{
    return this.httpClient.get<UserInfo>(this.get_one_url);
  }
}
