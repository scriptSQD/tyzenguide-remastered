import { SWIPER_CONFIG } from "@constants/injections-tokens";
import { Component, Inject, Input } from "@angular/core";

@Component({
	selector: "app-sight-preview",
	templateUrl: "./sight-preview.component.html",
	styleUrls: ["./sight-preview.component.scss"],
})
export class SightPreviewComponent {
	constructor(@Inject(SWIPER_CONFIG) public readonly swiperConfig: any) {}

	@Input("title") title!: string;
	@Input("description") desc!: string;
	@Input("thumbnail-list") thumbList!: string[];
	@Input("link") link!: string;
}
