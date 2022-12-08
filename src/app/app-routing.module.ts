import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicCardComponent } from './music-card/music-card.component';
import { CenterMainComponent } from './center-main/center-main.component';
import { LibraryComponent } from './library/library.component';
import { ShowPlaylistComponent } from './show-playlist/show-playlist.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';



export const routes: Routes = [
  {path: '', redirectTo: 'center-main', pathMatch: 'full'},
  {path: 'center-main', component: CenterMainComponent},
  {path: 'center-main/:user_name', component: CenterMainComponent},
  {path: 'library/:user_name', component: LibraryComponent},
  {path: 'show-playlist/:user_name/:playlist_tag', component: ShowPlaylistComponent},
  {path: 'criar-conta', component: CriarContaComponent},
  {path: 'login', component: LoginScreenComponent},
  {path: 'minha-conta/:user_name', component: MinhaContaComponent}
  //{path: '', redirectTo: 'extrato', pathMatch:'full'},
  //{path: 'extrato', component: ExtratoComponent},
  //{path: 'nova-transferencia', component: NovaTransferenciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
