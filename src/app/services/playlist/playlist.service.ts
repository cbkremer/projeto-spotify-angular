import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlaylistModel } from 'src/app/model/playlist.model';
@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private id = 19;
  private get_user_playlists_url = 'http://localhost:8082/playlist/'+this.id;
  constructor(private httpClient: HttpClient) { }

  getUserPlaylists(): Observable<PlaylistModel>{
    return this.httpClient.get<PlaylistModel>(this.get_user_playlists_url);
  }
}