import { DebouncedSearchBoxComponent } from "./debounced-search-box-component/debounced-search-box-component.component";
import { SightPreviewComponent } from "./sights/sight-preview/sight-preview.component";
import { IsLoadingDirective } from "./components/loader/loader.directive";
import { LoaderComponent } from "./components/loader/loader.component";
import { TyzenhausComponent } from "./tyzenhaus/tyzenhaus.component";
import SwiperCore, { Lazy, Navigation, Pagination } from "swiper";
import { ContactsComponent } from "./contacts/contacts.component";
import { SightComponent } from "./sights/sight/sight.component";
import { AuthorsComponent } from "./authors/authors.component";
import { SWIPER_CONFIG } from "@constants/injections-tokens";
import { HomeComponent } from "./sights/home/home.component";
import { SightsComponent } from "./sights/sights.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { MainComponent } from "./main/main.component";
import { UrlSafePipe } from "./pipes/url-safe.pipe";
import { NgAisModule } from "angular-instantsearch";
import { AppComponent } from "./app.component";
import { SwiperModule } from "swiper/angular";
import { NgModule } from "@angular/core";

// Setup SwiperJS modules.
SwiperCore.use([Navigation, Pagination, Lazy]);

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
		AuthorsComponent,
		LoaderComponent,
		IsLoadingDirective,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SwiperModule,
		HttpClientModule,
		NgAisModule.forRoot(),
	],
	providers: [
		{
			provide: SWIPER_CONFIG,
			useValue: {
				slidesPerView: 1,
				spaceBetween: 10,
				loop: true,
				navigation: true,
				pagination: { clickable: true },
				lazy: {
					enabled: true,
					loadPrevNext: true,
				},
			},
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
