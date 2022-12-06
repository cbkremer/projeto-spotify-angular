import { UserInfoService } from './../services/user-info/user-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent implements OnInit {

  constructor(private user_service: UserInfoService) { }

  ngOnInit(): void {
  }

}
