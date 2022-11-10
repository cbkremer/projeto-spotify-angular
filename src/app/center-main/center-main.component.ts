import { PlaylistModel } from './../model/playlist.model';
import { UserInfoModel } from 'src/app/model/user_info.model';
import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../services/user-info/user-info.service';
import { PlaylistService } from '../services/playlist/playlist.service';

@Component({
  selector: 'app-center-main',
  templateUrl: './center-main.component.html',
  styleUrls: ['./center-main.component.css']
})
export class CenterMainComponent implements OnInit {
  user_info:UserInfoModel;


  constructor(private user_service: UserInfoService) {
    this.user_info = {name: '', email: '',password: '',playlists:[]};
   }

  ngOnInit(): void {
    this.user_service.getUser().subscribe((user_info: UserInfoModel) => {
      console.table(user_info);
      this.user_info = user_info;
    });
  }

}
