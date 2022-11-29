import { MusicCardComponent } from './../music-card/music-card.component';
import { PlaylistModel } from './../model/playlist.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-music-card-horizontal',
  templateUrl: './music-card-horizontal.component.html',
  styleUrls: ['./music-card-horizontal.component.css']
})
export class MusicCardHorizontalComponent implements OnInit {
  tag: any;
  playlist: PlaylistModel | any;

  constructor(private route: ActivatedRoute) {
    this.playlist = null;
  }

  ngOnInit(): void {
    this.tag = this.route.snapshot.paramMap.get('tag');
    console.log(this.tag);
  }

}
