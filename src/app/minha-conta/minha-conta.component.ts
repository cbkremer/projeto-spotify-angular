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

}
