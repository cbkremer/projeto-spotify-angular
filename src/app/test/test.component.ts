import { PlaylistService } from './../services/playlist/playlist.service';
import { PlaylistModel } from 'src/app/model/playlist.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  playlist: PlaylistModel[] = [];

  constructor(private playlist_service: PlaylistService) {
  }

  ngOnInit(): void {
    this.playlist_service.getUserPlaylists().subscribe((playlist: PlaylistModel[]) => {
      console.table(playlist);
      this.playlist = playlist;
      //this.user_info.playlists = JSON.parse(user_info.playlists);
    });
  }

}
