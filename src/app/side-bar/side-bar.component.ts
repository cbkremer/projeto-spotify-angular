import { UserInfoModel } from './../model/user_info.model';
import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../services/user-info/user-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  user_info: UserInfoModel;

  constructor(private user_service: UserInfoService, public router: Router) {
    this.user_info = {name: '', email: '',password: '',playlists:[]};
  }

  ngOnInit(): void {
    this.user_service.getUser().subscribe((user_info: UserInfoModel) => {
      //console.table(user_info);
      this.user_info = user_info;
      //this.user_info.playlists = JSON.parse(user_info.playlists);
    });
  }
  public goToLibrary(){
    if(localStorage.getItem('name') == null || localStorage.getItem('name') == undefined || localStorage.getItem('name') == '')
    {
      this.router.navigate(['login']);
    }else{
      this.router.navigate(['library/'+this.user_service.getUserName()]);
    }
  }
  public goToHome(){
    this.router.navigate(['center-main/'+this.user_service.getUserName()]);
  }
  public goToAddMusic(){
    this.router.navigate(['add-music']);
  }
}
