import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

var apiLoaded: boolean = false;

@Component({
  selector: 'app-sight',
  templateUrl: './sight.component.html',
  styleUrls: ['./sight.component.scss']
})
export class SightComponent implements OnInit {

  constructor(private route: ActivatedRoute) {};

  sightName!: string;

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => this.sightName = String(params.get('sight')))
    );

    if(!apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }

}
