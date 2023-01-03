import { Router } from '@angular/router';
import { MusicService } from './../services/music/music.service';
import { MusicModel } from './../model/music.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-music-screen',
  templateUrl: './add-music-screen.component.html',
  styleUrls: ['./add-music-screen.component.css']
})
export class AddMusicScreenComponent implements OnInit {
  music: MusicModel;

  constructor(private music_service:MusicService, private router:Router) {
    this.music = {name:'',playlistsDTO: [],tag:''};
  }

  ngOnInit(): void {
  }
  addMusica(){
    console.log('dando post na música: '+this.music);
    this.music_service.postMusic(this.music).subscribe((response: any) => {
      console.log(JSON.stringify(response.response));
      this.router.navigate(['center-main']).then(() => {
        window.location.reload();
      });
    });
  }
}
