import { MusicModel } from './../model/music.model';
import { PlaylistService } from './../services/playlist/playlist.service';
import { MusicCardComponent } from './../music-card/music-card.component';
import { PlaylistModel } from './../model/playlist.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-music-card-horizontal',
  templateUrl: './music-card-horizontal.component.html',
  styleUrls: ['./music-card-horizontal.component.css']
})
export class MusicCardHorizontalComponent implements OnInit {
  tag: any;
  playlist: PlaylistModel;
  get_playlist_tag_url = 'http://localhost:8082/playlist/tag/';

  constructor(private route: ActivatedRoute, private playlist_service: PlaylistService) {
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
}
