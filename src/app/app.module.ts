import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CenterMainComponent } from './center-main/center-main.component';
import { HttpClientModule } from '@angular/common/http';
import { MusicCardComponent } from './music-card/music-card.component';
import { TestComponent } from './test/test.component';
import { LibraryComponent } from './library/library.component';
import { MusicCardHorizontalComponent } from './music-card-horizontal/music-card-horizontal.component';
import { ShowPlaylistComponent } from './show-playlist/show-playlist.component';
import { FormsModule } from '@angular/forms';
import { MusicMusicCardComponent } from './music-music-card/music-music-card.component';
import { AddPlaylistComponent } from './add-playlist/add-playlist.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { SelectPlaylistComponent } from './select-playlist/select-playlist.component';
import { AddMusicScreenComponent } from './add-music-screen/add-music-screen.component';
import { MusicScreenComponent } from './music-screen/music-screen.component';
import { SearchScreenComponent } from './search-screen/search-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent,
    CenterMainComponent,
    MusicCardComponent,
    TestComponent,
    LibraryComponent,
    MusicCardHorizontalComponent,
    ShowPlaylistComponent,
    MusicMusicCardComponent,
    AddPlaylistComponent,
    CriarContaComponent,
    LoginScreenComponent,
    MinhaContaComponent,
    SelectPlaylistComponent,
    AddMusicScreenComponent,
    MusicScreenComponent,
    SearchScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
