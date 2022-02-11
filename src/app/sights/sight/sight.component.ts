import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as PhotoSwipe from 'photoswipe';
import { Observable, of } from 'rxjs';
import { PhotoSwipeComponent } from 'src/app/photo-swipe/photo-swipe.component';
import { PSWPImage } from 'src/app/pswpimage';

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Sight } from './model/sight.model';

SwiperCore.use([Navigation, Pagination]);

var apiLoaded: boolean = false;

@Component({
  selector: 'app-sight',
  templateUrl: './sight.component.html',
  styleUrls: ['./sight.component.scss'],
})
export class SightComponent implements OnInit {

  @ViewChild('photoSwipe') photoSwipe!: PhotoSwipeComponent;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  sightName?: string | null;
  sight?: Observable<Sight>;
  prose?: string;

  initYouTubePlayer() {
    if (apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }

  toInt(val: string) {
    return parseInt(val);
  }

  openPswp(index: number) {

    let ImgList: PSWPImage[] = [];

    this.sight?.subscribe(data => {
      data.images.full.forEach(img => {
        let imageEl = new Image();
        imageEl.src = img;
        imageEl.addEventListener('load', () => {

          let item = new PSWPImage();
          item.img = img;
          item.w = imageEl.naturalWidth;
          item.h = imageEl.naturalHeight;

          ImgList.push(item);

        });
      });
    });

    this.photoSwipe.openPswp(ImgList, index);    
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
