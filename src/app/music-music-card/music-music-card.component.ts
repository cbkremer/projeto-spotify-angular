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
  constructor(private music_service: MusicService, private router: Router) { }

  ngOnInit(): void {
    this.music_service.getAllMusics().subscribe((musics: MusicModel[]) =>{
      this.musics = musics;
    });
  }
  abrirMusica(music: MusicModel){
    console.log(music);
  }
}
