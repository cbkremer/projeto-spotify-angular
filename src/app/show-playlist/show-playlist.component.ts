import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistService } from '../services/playlist/playlist.service';
import { PlaylistModel } from '../model/playlist.model';

@Component({
  selector: 'app-show-playlist',
  templateUrl: './show-playlist.component.html',
  styleUrls: ['./show-playlist.component.css']
})
export class ShowPlaylistComponent implements OnInit {
  tag: any;
  playlist: PlaylistModel;
  editar_nome = false;



  constructor(private route: ActivatedRoute,private playlist_service: PlaylistService) {
    this.playlist = {name: '', musicsDTO: [], quantity: 0, user_name: '', tag: ''}

   }

  ngOnInit(): void {
    this.tag= this.route.snapshot.paramMap.get('playlist_tag');
    //console.log(this.tag);
    this.playlist_service.getPlaylist(this.tag).subscribe((playlist: PlaylistModel) => {
      this.playlist = playlist;
      console.log(this.playlist);
    });
  }
  public editarNome(){
    this.editar_nome = true;
    console.log("editar nome");
  }
  public salvarNome(){
    this.playlist_service.updatePlaylist(this.playlist).subscribe();
    console.log(this.playlist);
    this.editar_nome = false;
  }
}
