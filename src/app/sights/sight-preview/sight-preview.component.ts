import { Component, Input } from "@angular/core";
import SwiperCore, {
	Lazy,
	Navigation,
	Pagination,
	SwiperOptions,
} from "swiper";

SwiperCore.use([Navigation, Pagination, Lazy]);

@Component({
	selector: "app-sight-preview",
	templateUrl: "./sight-preview.component.html",
	styleUrls: ["./sight-preview.component.scss"],
})
export class SightPreviewComponent {
	SwiperConfig: SwiperOptions = {
		slidesPerView: 1,
		spaceBetween: 35,
		loop: true,
		pagination: {
			clickable: true,
		},
		lazy: {
			enabled: true,
			loadPrevNext: true,
		},
	};

	constructor() {}

	@Input("title") title!: string;
	@Input("description") desc!: string;
	@Input("thumbnail-list") thumbList!: string[];
	@Input("link") link!: string;
}
