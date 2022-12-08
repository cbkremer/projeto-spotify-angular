import { UserInfoService } from './../user-info/user-info.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MusicModel } from 'src/app/model/music.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
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
  constructor(private httpClient: HttpClient,private route: ActivatedRoute,private user_service: UserInfoService) {
    this.name = user_service.getUserName();
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
}
