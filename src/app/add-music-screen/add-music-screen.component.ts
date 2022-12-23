import { MusicModel } from './../model/music.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-music-screen',
  templateUrl: './add-music-screen.component.html',
  styleUrls: ['./add-music-screen.component.css']
})
export class AddMusicScreenComponent implements OnInit {
  music: MusicModel;

  constructor() {
    this.music = {name:'',playlistsDTO: [],tag:''};
  }

  ngOnInit(): void {
  }
  addMusica(){
    console.log(this.music.name);
  }
}
