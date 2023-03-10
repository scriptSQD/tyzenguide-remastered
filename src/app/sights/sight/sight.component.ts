import { SWIPER_CONFIG } from "@constants/injections-tokens";
import { Observable, of, ReplaySubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Sight } from "./model/sight.model";

@Component({
	selector: "app-sight",
	templateUrl: "./sight.component.html",
	styleUrls: ["./sight.component.scss"],
})
export class SightComponent {
	sightName?: string | null;
	sight?: Observable<Sight>;
	prose?: string;

	fetchingSightInfo = new ReplaySubject<boolean>(1);

	constructor(
		private route: ActivatedRoute,
		private http: HttpClient,
		@Inject(SWIPER_CONFIG) public readonly swiperConfig: any,
	) {
		this.route.paramMap.subscribe(v => {
			this.sightName = v.get("sight");
			this._FetchSight();
		});
	}

	private _FetchSight(): void {
		this.fetchingSightInfo.next(true);
		this.http
			.get<Sight>(`/assets/sights/data/${this.sightName}.json`)
			.subscribe(res => {
				this.sight = of(res);
				this.fetchingSightInfo.next(false);
			});
	}
}
