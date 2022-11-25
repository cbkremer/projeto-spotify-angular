import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistScreenComponent } from './playlist-screen/playlist-screen.component';
import { MusicCardComponent } from './music-card/music-card.component';
import { CenterMainComponent } from './center-main/center-main.component';
import { LibraryComponent } from './library/library.component';

export const routes: Routes = [
  {path: '', redirectTo: 'center-main', pathMatch: 'full'},
  {path: 'center-main', component: CenterMainComponent},
  {path: 'playlist-screen', component: PlaylistScreenComponent},
  {path: 'library', component: LibraryComponent}
  //{path: '', redirectTo: 'extrato', pathMatch:'full'},
  //{path: 'extrato', component: ExtratoComponent},
  //{path: 'nova-transferencia', component: NovaTransferenciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
