import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import * as PhotoSwipe           from 'photoswipe';
import * as PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';
import { PSWPImage } from '../pswpimage';

@Component({
  selector: 'app-photo-swipe',
  templateUrl: './photo-swipe.component.html',
  styleUrls: ['./photo-swipe.component.scss']
})
export class PhotoSwipeComponent {

  @ViewChild('photoSwipe') photoSwipe!: ElementRef;

  @Input('tyzen-images') imgs!: PSWPImage[];

  constructor() {};

  openPswp(images?: PSWPImage[], index: number = 0) {
    images = this.imgs || {};

    const options = {
      index: index
    }

    const gall = new PhotoSwipe(this.photoSwipe.nativeElement, PhotoSwipeUI_Default, images, options);
    gall.init();
  }

}
