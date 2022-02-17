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
import { NgAisModule } from 'angular-instantsearch';
import { DebouncedSearchBoxComponent } from './debounced-search-box-component/debounced-search-box-component.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AuthorsComponent } from './authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    SightPreviewComponent,
    SightComponent,
    SightsComponent,
    UrlSafePipe,
    TyzenhausComponent,
    DebouncedSearchBoxComponent,
    ContactsComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    YouTubePlayerModule,
    HttpClientModule,
    NgAisModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
