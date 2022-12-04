
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { asapScheduler, Observable, tap } from 'rxjs';
import { PlaylistModel } from 'src/app/model/playlist.model';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private name = "nome8";
  private get_user_playlists_url = 'http://localhost:8082/playlist/'+this.name;
  private get_playlist_url = 'http://localhost:8082/playlist/tag/';
  private update_playlist_url = 'http://localhost:8082/playlist/'+this.name;
  tag: string | null = '';
  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  getUserPlaylists(): Observable<PlaylistModel[]>{
    return this.httpClient.get<PlaylistModel[]>(this.get_user_playlists_url);
  }
  getPlaylist(tag: string):Observable<PlaylistModel>{
    console.log(tag);
    return this.httpClient.get<PlaylistModel>(this.get_playlist_url+tag);
  }
  updatePlaylist(playlist:PlaylistModel){
    console.log("update called");
    return this.httpClient.put<PlaylistModel>(this.update_playlist_url, playlist, httpOptions);
  }
}
