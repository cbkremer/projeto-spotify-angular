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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
