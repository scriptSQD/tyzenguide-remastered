import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Sight } from './model/sight.model';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-sight',
  templateUrl: './sight.component.html',
  styleUrls: ['./sight.component.scss'],
})
export class SightComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  sightName?: string | null;
  sight?: Observable<any | Sight>;
  prose?: string;

  initYouTubePlayer() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  ngOnInit(): void {
    this.initYouTubePlayer();

    this.sightName = this.route.snapshot.paramMap.get('sight');
    this.http
      .get<Sight>('/assets/sights/data/' + this.sightName + '.json')
      .subscribe((res) => {
        this.sight = of(res);
      });
  }
}
