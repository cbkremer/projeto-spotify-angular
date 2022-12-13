import { UserInfoService } from './../services/user-info/user-info.service';
import { PlaylistService } from './../services/playlist/playlist.service';
import { MusicService } from './../services/music/music.service';
import { Component, OnInit } from '@angular/core';
import { MusicModel } from '../model/music.model';
import { PlaylistModel } from '../model/playlist.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-playlist',
  templateUrl: './select-playlist.component.html',
  styleUrls: ['./select-playlist.component.css']
})
export class SelectPlaylistComponent implements OnInit {
  playlists: PlaylistModel[];
  music: MusicModel;

  constructor(
    private user_service:UserInfoService,
    private music_service: MusicService,
    private playlist_service:PlaylistService,
    public router: Router
  )
  {
    this.music = {name: '', playlistsDTO: [], tag: ''};
    this.playlists = [];
  }

  ngOnInit(): void {
    this.playlist_service.getUserPlaylists().subscribe((playlists: PlaylistModel[]) => {
      console.table(playlists);
      this.playlists = playlists;
      //this.playlist = null;
      //this.playlist = {musics: [], name: '', quantity: 0, user_name: '', tag: 0};
      //this.user_info.playlists = JSON.parse(user_info.playlists);
    });
    this.updatePlaylists();
  }
  public receiveMusic(music:MusicModel){
    this.music = music;
  }
  selectPlaylist(playlist:PlaylistModel){
    this.music = this.music_service.giveReceivedMusic();
    //console.log('selected playlist: ');
    //console.table(playlist);
    //console.log('selected playlist music: ');
    //console.table(this.music);
    this.music_service.addMusicToPlaylist(this.music, playlist).subscribe();
    this.router.navigate(['library/'+this.user_service.getUserName()]);
  }
  updatePlaylists(){
    this.playlist_service.getUserPlaylists().subscribe((playlists: PlaylistModel[]) => {
      console.table(playlists);
      this.playlists = playlists;
      //this.playlist = null;
      //this.playlist = {musics: [], name: '', quantity: 0, user_name: '', tag: 0};
      //this.user_info.playlists = JSON.parse(user_info.playlists);
    });
  }
}
