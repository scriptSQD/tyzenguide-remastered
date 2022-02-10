import { AfterViewInit, Component, OnInit } from '@angular/core';
// import { promisify } from 'util';
import { dimens } from '../sight-preview/dimens.interface';

// const sizeOf = promisify(require('image-size'));

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() {};

  imgList: string[] = [
    "/assets/sight-images/karalino/karalino-1-min.jpg",
    "/assets/sight-images/karalino/karalino-2-min.jpg",
    "/assets/sight-images/karalino/karalino-3-min.jpg",
    "/assets/sight-images/karalino/karalino-4-min.jpg",
    "/assets/sight-images/karalino/karalino-5-min.jpg"
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {}

}
