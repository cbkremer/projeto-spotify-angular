import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-playlist',
  templateUrl: './show-playlist.component.html',
  styleUrls: ['./show-playlist.component.css']
})
export class ShowPlaylistComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
