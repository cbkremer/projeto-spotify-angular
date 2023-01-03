import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.css']
})
export class SearchScreenComponent implements OnInit {
  public search: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  pesquisar(){
    console.log(this.search);

  }
}
