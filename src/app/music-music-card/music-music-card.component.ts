import { UserInfoService } from './../services/user-info/user-info.service';
import { SelectPlaylistComponent } from './../select-playlist/select-playlist.component';
import { Component, Input, OnInit } from '@angular/core';
import { MusicModel } from '../model/music.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicService } from '../services/music/music.service';

@Component({
  selector: 'app-music-music-card',
  templateUrl: './music-music-card.component.html',
  styleUrls: ['./music-music-card.component.css']
})

export class MusicMusicCardComponent implements OnInit {
  @Input() item = '';
  public musics: MusicModel[] = []
  music: MusicModel | any;
  is_searching: string | null = '';
  constructor(private music_service: MusicService, private router: Router, private route: ActivatedRoute)
  { }

  ngOnInit(): void {
    this.music_service.getAllMusics().subscribe((musics: MusicModel[]) =>{
      this.musics = musics;
    });
    this.is_searching= this.route.snapshot.paramMap.get('search');
  }
  abrirMusica(music: MusicModel){
    //this.music_service.receiveMusic(music);
    //this.router.navigate(['library/'+this.user_service.getUserName()+'/select-playlist']);
    this.router.navigate(['music/'+music.tag]);
  }
  addMusica(){
    console.log()
  }
  validateSearch(name: string): boolean{
    if(name.includes(this.item)){
      return true;
    }
    else{
      return false;
    }
  }
}
