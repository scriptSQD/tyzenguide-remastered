import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() {};

  previewSights = [
    {
      title: "Karalino",
      shortDesc: "",
      imgList: [
        "/assets/sights/images/karalino/thumb/thumb-1.jpg",
        "/assets/sights/images/karalino/thumb/thumb-2.jpg",
        "/assets/sights/images/karalino/thumb/thumb-3.jpg",
        "/assets/sights/images/karalino/thumb/thumb-4.jpg",
        "/assets/sights/images/karalino/thumb/thumb-5.jpg",
        "/assets/sights/images/karalino/thumb/thumb-6.jpg",
        "/assets/sights/images/karalino/thumb/thumb-7.jpg",
        "/assets/sights/images/karalino/thumb/thumb-8.jpg"
      ],
      routerLink: "karalino"
    },
    {
      title: "Tyzenhaus' Archive",
      shortDesc: "",
      imgList: [
        "/assets/sights/images/archive/1.jpg",
        "/assets/sights/images/archive/2.jpg",
        "/assets/sights/images/archive/3.jpg",
        "/assets/sights/images/archive/4.jpg",
        "/assets/sights/images/archive/5.jpg",
        "/assets/sights/images/archive/6.jpg",
        "/assets/sights/images/archive/7.jpg",
        "/assets/sights/images/archive/8.jpg"
      ],
      routerLink: "tyzenhaus-archive"
    },

  ]

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {}

}
