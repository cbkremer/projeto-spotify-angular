import { PlaylistService } from './../services/playlist/playlist.service';
import { PlaylistModel } from 'src/app/model/playlist.model';
import { UserInfoModel } from 'src/app/model/user_info.model';
import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../services/user-info/user-info.service';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.css']
})
export class MusicCardComponent implements OnInit {
  playlists: PlaylistModel[] = [];
  playlist: PlaylistModel | any;

  constructor(private playlist_service: PlaylistService) {
  }

  ngOnInit(): void {
      this.playlist_service.getUserPlaylists().subscribe((playlists: PlaylistModel[]) => {
      console.table(playlists);
      this.playlists = playlists;
      //this.playlist = {musics: [], name: '', quantity: 0, user_name: '', tag: 0};
      //this.user_info.playlists = JSON.parse(user_info.playlists);
    });
  }

  public criarPlaylist(){
    console.log('criar nova');
  }
  public abrirPlaylist(playlist: PlaylistModel){
    console.log(playlist);
    this.playlist = playlist;
  }
  public pegarPlaylistAberta(): PlaylistModel{
    return this.playlist;
  }
}
