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
  private post_playlist_url = 'http://localhost:8082/playlist/'+this.name;
  private delete_playlist_url = 'http://localhost:8082/playlist/';
  private new_playlist:PlaylistModel;
  tag: string | null = '';
  constructor(private httpClient: HttpClient,private route: ActivatedRoute) {
    this.new_playlist = {musicsDTO: [], name:'', quantity: 0, user_name: '', tag:0};
   }

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
  createPlaylist(num: number){
    this.new_playlist.name = 'Sua playlist nº'+num;
    return this.httpClient.post<PlaylistModel>(this.post_playlist_url, this.new_playlist , httpOptions);
  }
  deletePlaylist(tag:string){
    return this.httpClient.delete(this.delete_playlist_url+tag, httpOptions);
  }
}
