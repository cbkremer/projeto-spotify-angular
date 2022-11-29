import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicCardComponent } from './music-card/music-card.component';
import { CenterMainComponent } from './center-main/center-main.component';
import { LibraryComponent } from './library/library.component';
import { ShowPlaylistComponent } from './show-playlist/show-playlist.component';



export const routes: Routes = [
  {path: '', redirectTo: 'center-main', pathMatch: 'full'},
  {path: 'center-main/:id', component: CenterMainComponent},
  {path: 'library/:id', component: LibraryComponent},
  {path: 'show-playlist/:id', component: ShowPlaylistComponent}
  //{path: '', redirectTo: 'extrato', pathMatch:'full'},
  //{path: 'extrato', component: ExtratoComponent},
  //{path: 'nova-transferencia', component: NovaTransferenciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
