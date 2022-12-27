import { UserInfoService } from './../services/user-info/user-info.service';
import { MusicService } from './../services/music/music.service';
import { MusicModel } from './../model/music.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-music-screen',
  templateUrl: './music-screen.component.html',
  styleUrls: ['./music-screen.component.css']
})
export class MusicScreenComponent implements OnInit {
  editar_nome: boolean = false;
  music:MusicModel|any;
  constructor(
    private route: ActivatedRoute,
    private music_service:MusicService,
    private router: Router,
    private user_service:UserInfoService
    )
    {
    let tag: any = this.route.snapshot.paramMap.get('music_tag');
    this.music_service.getMusic(tag).subscribe(music => {
      console.log(music);
      this.music = music;
    })
  }
  ngOnInit(): void {
  }
  deletarMusica(){
    this.music_service.deleteMusic(this.music).subscribe((response:any) => {
      console.log(JSON.stringify(response.response));
    });
    this.router.navigate(['center-main/'+this.user_service.getUserName()]).then(() => {
      //console.log('hahahaha');
      window.location.reload();
    });
  }
  editarNome(){
    this.editar_nome = true;
  }
  salvarNome(){
    this.music_service.updateMusic(this.music).subscribe((response:any) => {
      console.log(JSON.stringify(response.response));
    });
  }
  addParaPlaylist(){
    this.music_service.receiveMusic(this.music);
    this.router.navigate(['library/'+this.user_service.getUserName()+'/select-playlist']);
  }
}
