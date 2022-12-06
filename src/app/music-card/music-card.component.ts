import { PlaylistService } from './../services/playlist/playlist.service';
import { PlaylistModel } from 'src/app/model/playlist.model';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.css']
})
export class MusicCardComponent implements OnInit {
  public playlists: PlaylistModel[] = [];
  playlist: PlaylistModel | any;
  user_name: string | any;

  constructor(private playlist_service: PlaylistService, public router: Router, private route: ActivatedRoute) {
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

  public criarPlaylist(){
    console.log('criar nova');
    this.playlist_service.createPlaylist(this.playlists.length+1).subscribe();
    location.reload();
  }
  public abrirPlaylist(playlist: PlaylistModel){
    //console.log(playlist);
    this.playlist = playlist;
    this.user_name= this.route.snapshot.paramMap.get('user_name');
    this.router.navigate(['show-playlist/'+this.user_name+'/'+playlist.tag]);
  }
  public pegarPlaylistAberta(): PlaylistModel{
    return this.playlist;
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
