import { Component, OnInit } from '@angular/core';
import { UserInfoModel } from '../model/user_info.model';
import { UserInfoService } from '../services/user-info/user-info.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  user_info:UserInfoModel;


  constructor(private user_service: UserInfoService) {
    this.user_info = {name: '', email: '',password: '',playlists:[]};
  }

  ngOnInit(): void {
    this.user_service.getUser().subscribe((user_info: UserInfoModel) => {
      console.table(user_info);
      this.user_info = user_info;
      //this.user_info.playlists = JSON.parse(user_info.playlists);
    });
  }

}
