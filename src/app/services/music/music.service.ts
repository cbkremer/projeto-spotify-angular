import { PlaylistModel } from 'src/app/model/playlist.model';
import { MusicModel } from './../../model/music.model';
import { UserInfoService } from './../user-info/user-info.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token',
  })
};

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private name = "";
  private delete_from_playlist_by_tag_url = 'http://localhost:8082/music/remove/';
  private url: string = '';
  private get_music_by_tag_url = 'http://localhost:8082/music/';
  private add_to_playlist_url = 'http://localhost:8082/music/add/';
  private post_music_url = 'http://localhost:8082/music';

  private received_music: MusicModel;
  constructor(private httpClient: HttpClient,private route: ActivatedRoute,private user_service: UserInfoService) {
    this.name = user_service.getUserName();
    this.received_music = {name: '', playlistsDTO: [], tag: ''};
  }
  getMusic(tag: string): Observable<MusicModel>{
    return this.httpClient.get<MusicModel>(this.get_music_by_tag_url+tag);
  }
  getAllMusics(): Observable<MusicModel[]>{
    return this.httpClient.get<MusicModel[]>('http://localhost:8082/music');
  }
  deleteMusicFromPlaylistByTag(tag: string, music: MusicModel): Observable<MusicModel>{
    this.url = this.delete_from_playlist_by_tag_url+tag;
    return this.httpClient.put<MusicModel>(this.url, music, httpOptions);
  }
  receiveMusic(music:MusicModel){
    console.log('received music: ');
    console.table(music);
    this.received_music = music;
  }
  giveReceivedMusic(){
    console.log('give music: ');
    console.table(this.received_music);
    return this.received_music;
  }
  addMusicToPlaylist(music:MusicModel,playlist:PlaylistModel){
    return this.httpClient.put<MusicModel>(this.add_to_playlist_url+playlist.tag, music, httpOptions);
  }
  postMusic(music:MusicModel){
    return this.httpClient.post<MusicModel>(this.post_music_url, music, {responseType: 'json'});
  }
}
