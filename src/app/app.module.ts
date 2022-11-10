import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CenterMainComponent } from './center-main/center-main.component';
import { HttpClientModule } from '@angular/common/http';
import { MusicCardComponent } from './music-card/music-card.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent,
    CenterMainComponent,
    MusicCardComponent
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
