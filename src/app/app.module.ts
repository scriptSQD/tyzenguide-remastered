import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './sights/home/home.component';
import { SightPreviewComponent } from './sights/sight-preview/sight-preview.component';
import { SightComponent } from './sights/sight/sight.component';
import { SightsComponent } from './sights/sights.component';
import { UrlSafePipe } from './url-safe.pipe';
import { TyzenhausComponent } from './tyzenhaus/tyzenhaus.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    SightPreviewComponent,
    SightComponent,
    SightsComponent,
    UrlSafePipe,
    TyzenhausComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    YouTubePlayerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
