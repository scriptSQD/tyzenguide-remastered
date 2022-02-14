import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor() {}

  previewSights = [
    {
      title: 'Karalino',
      shortDesc:
        'Karalino country estate of Tyzenhauz is a bright page of our national history. The estate is located not far from Hrodna on the banks of the Tatarka River. The beauty of local landscapes combined with the revived architecture of the old buildings of the estate dips you  into the atmosphere of local colour. Everything in this amazing place is filled with history and the spirit of the 18th century.',
      imgList: [
        '/assets/sights/images/karalino/thumb/thumb-1.jpg',
        '/assets/sights/images/karalino/thumb/thumb-2.jpg',
        '/assets/sights/images/karalino/thumb/thumb-3.jpg',
        '/assets/sights/images/karalino/thumb/thumb-4.jpg',
        '/assets/sights/images/karalino/thumb/thumb-5.jpg',
        '/assets/sights/images/karalino/thumb/thumb-6.jpg',
        '/assets/sights/images/karalino/thumb/thumb-7.jpg',
        '/assets/sights/images/karalino/thumb/thumb-8.jpg'
      ],
      routerLink: 'karalino',
    },
    {
      title: "Tyzenhaus' Archive",
      shortDesc:
        "Tyzenhauz's Archive is a place steeped in history. An archive was created with the formation of the Grodno province and the establishment of the provincial government. In the 1880s, the National Historical Archive was located in the building. In 1900, the building was completely transferred to the archive of the Hrodno provincial Government. The external look of the archive attracts attention of tourists and residents of Hrodno.",
      imgList: [
        '/assets/sights/images/archive/1.jpg',
        '/assets/sights/images/archive/2.jpg',
        '/assets/sights/images/archive/3.jpg',
        '/assets/sights/images/archive/4.jpg',
        '/assets/sights/images/archive/5.jpg',
        '/assets/sights/images/archive/6.jpg',
        '/assets/sights/images/archive/7.jpg',
        '/assets/sights/images/archive/8.jpg'
      ],
      routerLink: 'tyzenhaus-archive',
    },
    {
      title: "Farny Cathedral",
      shortDesc:
        "In the very centre of the ancient Hrodna, on Soviet Square, which changed many names in previous eras, in the Cathedral of St. Francis Xavier, there is an obelisk of the end of the 19th century, perpetuating the name of Anthony Tyzenhauz (1733–1785), a well-known political and public figure of the Grand Duchy of Lithuania, a philanthropist and a reformer.",
      imgList: [
        '/assets/sights/images/farny/1.jpg',
        '/assets/sights/images/farny/2.jpg',
        '/assets/sights/images/farny/3.jpg',
        '/assets/sights/images/farny/4.jpg',
        '/assets/sights/images/farny/5.jpg',
        '/assets/sights/images/farny/6.jpg',
        '/assets/sights/images/farny/7.jpg',
        '/assets/sights/images/farny/8.jpg',
        '/assets/sights/images/farny/9.jpg'
      ],
      routerLink: 'farny-cathedral',
    },
    {
      title: "Pharmacy Museum",
      shortDesc:
        "The Pharmacy Museum in Hrodna is the oldest and only operating pharmacy museum in Belarus. The history of the museum is directly related to the development of medicine and pharmacology in Belarus, as well as the foundation of the pharmacy business in Hrodna. Due to its uniqueness and authenticity, it has gained popularity among tourists and residents of the city.",
      imgList: [
        '/assets/sights/images/pharmacy-museum/thumb/1.jpg',
        '/assets/sights/images/pharmacy-museum/thumb/2.jpg',
        '/assets/sights/images/pharmacy-museum/thumb/3.jpg',
        '/assets/sights/images/pharmacy-museum/thumb/4.jpg',
        '/assets/sights/images/pharmacy-museum/thumb/5.jpg',
        '/assets/sights/images/pharmacy-museum/thumb/6.jpg',
        '/assets/sights/images/pharmacy-museum/thumb/7.jpg',
        '/assets/sights/images/pharmacy-museum/thumb/8.jpg'
      ],
      routerLink: 'pharmacy-museum',
    },
  ];

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
