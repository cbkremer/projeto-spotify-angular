import { MusicService } from './../services/music/music.service';
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
  music: MusicModel;
  musics: MusicModel[] = [];
  get_playlist_tag_url = 'http://localhost:8082/playlist/tag/';
  all_musics = false;

  constructor(
    private route: ActivatedRoute,
    private playlist_service: PlaylistService,
    private music_service: MusicService
    )
    {
    this.playlist = {name: '', musicsDTO: [], quantity: 0, user_name: '', tag: ''}
    this.music = {name: '',playlistsDTO: [], tag: ''}
  }

  ngOnInit(): void {
    this.tag= this.route.snapshot.paramMap.get('playlist_tag');
    console.log(this.tag);
    if(this.tag == null || this.tag == ''){
      this.music_service.getAllMusics().subscribe((musics: MusicModel[]) => {
        this.musics = musics;
        this.all_musics = true;
      });
    }
    else{
      this.playlist_service.getPlaylist(this.tag).subscribe((playlist: PlaylistModel) => {
        this.playlist = playlist;
        console.log(this.playlist);
      });
    }
    console.log(this.all_musics);
  }
  clickMusic(music: MusicModel){
    this.tag= music.tag;
    this.music_service.getMusic(this.tag).subscribe((music: MusicModel) => {
      this.music = music;
      console.log(this.music);
    });
  }
  getPlaylist(){
    this.playlist_service.getPlaylist(this.tag).subscribe((playlist: PlaylistModel) => {
      this.playlist = playlist;
      console.log(this.playlist);
    });
  }
  removeMusic(music_choice: MusicModel){
    //console.log(music_choice);
    this.music_service.deleteMusicFromPlaylistByTag(this.tag,music_choice).subscribe();
    this.getPlaylist();
    location.reload();
  }
  addMusic(music: MusicModel){

  }
}
