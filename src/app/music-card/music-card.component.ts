import { PlaylistService } from './../services/playlist/playlist.service';
import { PlaylistModel } from 'src/app/model/playlist.model';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.css']
})
export class MusicCardComponent implements OnInit {
  public playlists: PlaylistModel[] = [];
  playlist: PlaylistModel | any;

  constructor(private playlist_service: PlaylistService, public router: Router) {
  }

  ngOnInit(): void {
      this.playlist_service.getUserPlaylists().subscribe((playlists: PlaylistModel[]) => {
      console.table(playlists);
      this.playlists = playlists;
      //this.playlist = null;
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
    this.router.navigate(['show-playlist/'+playlist.tag]);
  }
  public pegarPlaylistAberta(): PlaylistModel{
    return this.playlist;
  }
}
