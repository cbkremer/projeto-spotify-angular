import { UserInfoService } from './../services/user-info/user-info.service';
import { SelectPlaylistComponent } from './../select-playlist/select-playlist.component';
import { Component, OnInit } from '@angular/core';
import { MusicModel } from '../model/music.model';
import { Router } from '@angular/router';
import { MusicService } from '../services/music/music.service';

@Component({
  selector: 'app-music-music-card',
  templateUrl: './music-music-card.component.html',
  styleUrls: ['./music-music-card.component.css']
})
export class MusicMusicCardComponent implements OnInit {
  public musics: MusicModel[] = []
  music: MusicModel | any;
  constructor(private music_service: MusicService, private router: Router, private user_service: UserInfoService) { }

  ngOnInit(): void {
    this.music_service.getAllMusics().subscribe((musics: MusicModel[]) =>{
      this.musics = musics;
    });
  }
  abrirMusica(music: MusicModel){
    this.music_service.receiveMusic(music);
    this.router.navigate(['library/'+this.user_service.getUserName()+'/select-playlist']);
  }
}
