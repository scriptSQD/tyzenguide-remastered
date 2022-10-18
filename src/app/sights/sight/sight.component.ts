import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, of, ReplaySubject } from "rxjs";

import SwiperCore, { Navigation, Pagination, SwiperOptions } from "swiper";

import { Sight } from "./model/sight.model";

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: "app-sight",
  templateUrl: "./sight.component.html",
  styleUrls: ["./sight.component.scss"]
})
export class SightComponent implements OnInit {
  SwiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: true,
    pagination: { clickable: true }
  };

  sightName?: string | null;
  sight?: Observable<Sight>;
  prose?: string;

  fetchingSightInfo = new ReplaySubject<boolean>(1);

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.sightName = this.route.snapshot.paramMap.get("sight");

    this.fetchingSightInfo.next(true);
    this.http
      .get<Sight>(`/assets/sights/data/${this.sightName}.json`)
      .subscribe(res => {
        this.sight = of(res);
        this.fetchingSightInfo.next(false);
      });
  }
}
