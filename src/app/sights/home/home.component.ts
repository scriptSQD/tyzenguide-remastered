import { AfterViewInit, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor() {}

  previewSights = [
    {
      title: "Karalino",
      shortDesc:
        "Karalino country estate of Tyzenhauz is a bright page of our national history. The estate is located not far from Hrodna on the banks of the Tatarka River. The beauty of local landscapes combined with the revived architecture of the old buildings of the estate dips you  into the atmosphere of local colour. Everything in this amazing place is filled with history and the spirit of the 18th century.",
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
      title: "Tyzenhaus Archive",
      shortDesc:
        "Tyzenhauz's Archive is a place steeped in history. An archive was created with the formation of the Grodno province and the establishment of the provincial government. In the 1880s, the National Historical Archive was located in the building. In 1900, the building was completely transferred to the archive of the Hrodno provincial Government. The external look of the archive attracts attention of tourists and residents of Hrodno.",
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
    {
      title: "Chetvertinsky Palace",
      shortDesc:
        "In the 18th century Anthony Tyzenhauz established the first higher educational institution in the territory of modern Belarus not without the support of King Stanislav. In 1776, Grodno Medical Academy opened its doors. Tyzenhauz invited J.E. Giliber to head it and teach botany and biology. These days the palace has a new owner who plans to revive the place that Tyzenhauz once put his soul in and we will be able to follow the real steps of Tyzehauz.",
      imgList: [
        "/assets/sights/images/chetvertinsky-palace/1.jpg",
        "/assets/sights/images/chetvertinsky-palace/2.jpg",
        "/assets/sights/images/chetvertinsky-palace/3.jpg",
        "/assets/sights/images/chetvertinsky-palace/4.jpg",
        "/assets/sights/images/chetvertinsky-palace/5.jpg",
        "/assets/sights/images/chetvertinsky-palace/6.jpg",
        "/assets/sights/images/chetvertinsky-palace/7.jpg",
        "/assets/sights/images/chetvertinsky-palace/8.jpg"
      ],
      routerLink: "chetvertinsky-palace"
    },
    {
      title: "Farny Cathedral",
      shortDesc:
        "In the very centre of the ancient Hrodna, on Soviet Square, which changed many names in previous eras, in the Cathedral of St. Francis Xavier, there is an obelisk of the end of the 19th century, perpetuating the name of Anthony Tyzenhauz (1733–1785), a well-known political and public figure of the Grand Duchy of Lithuania, a philanthropist and a reformer.",
      imgList: [
        "/assets/sights/images/farny/1.jpg",
        "/assets/sights/images/farny/2.jpg",
        "/assets/sights/images/farny/3.jpg",
        "/assets/sights/images/farny/4.jpg",
        "/assets/sights/images/farny/5.jpg",
        "/assets/sights/images/farny/6.jpg",
        "/assets/sights/images/farny/7.jpg",
        "/assets/sights/images/farny/8.jpg",
        "/assets/sights/images/farny/9.jpg"
      ],
      routerLink: "farny-cathedral"
    },
    {
      title: "Pharmacy Museum",
      shortDesc:
        "The Pharmacy Museum in Hrodna is the oldest and only operating pharmacy museum in Belarus. The history of the museum is directly related to the development of medicine and pharmacology in Belarus, as well as the foundation of the pharmacy business in Hrodna. Due to its uniqueness and authenticity, it has gained popularity among tourists and residents of the city.",
      imgList: [
        "/assets/sights/images/pharmacy-museum/thumb/1.jpg",
        "/assets/sights/images/pharmacy-museum/thumb/2.jpg",
        "/assets/sights/images/pharmacy-museum/thumb/3.jpg",
        "/assets/sights/images/pharmacy-museum/thumb/4.jpg",
        "/assets/sights/images/pharmacy-museum/thumb/5.jpg",
        "/assets/sights/images/pharmacy-museum/thumb/6.jpg",
        "/assets/sights/images/pharmacy-museum/thumb/7.jpg",
        "/assets/sights/images/pharmacy-museum/thumb/8.jpg"
      ],
      routerLink: "pharmacy-museum"
    },
    {
      title: "Haradnitsa History Museum",
      shortDesc:
        "We graciously invite you to visit The Haradnitsa History Museum, which will inspire you to continue your journey in the footsteps of Tyzenhaus! It is a historically valuable building for our town, which will tell you about a politician, count and reformer - Antony Tyzenhauz, his life, achievements and more.",
      imgList: [
        "/assets/sights/images/haradnitsa-museum/thumb/1.jpg",
        "/assets/sights/images/haradnitsa-museum/thumb/2.jpg",
        "/assets/sights/images/haradnitsa-museum/thumb/3.jpg",
        "/assets/sights/images/haradnitsa-museum/thumb/4.jpg",
        "/assets/sights/images/haradnitsa-museum/thumb/5.jpg",
        "/assets/sights/images/haradnitsa-museum/thumb/6.jpg",
        "/assets/sights/images/haradnitsa-museum/thumb/7.jpg",
        "/assets/sights/images/haradnitsa-museum/thumb/8.jpg"
      ],
      routerLink: "haradnitsa-museum"
    },
    {
      title: "Hrodna Puppet Theatre",
      shortDesc:
        "Hrodna Puppet Theatre is considered to be a milestone of Hrodna history that perfectly fits the modern look of the city. The building has changed it appearance countless times during its existence and witnessed a lot of acting troupes. It has attracted spectators of all ages with its novelty and originality of performances.",
      imgList: [
        "/assets/sights/images/puppet-theatre/thumb/1.png",
        "/assets/sights/images/puppet-theatre/thumb/2.png",
        "/assets/sights/images/puppet-theatre/thumb/3.png",
        "/assets/sights/images/puppet-theatre/thumb/4.png",
        "/assets/sights/images/puppet-theatre/thumb/5.png",
        "/assets/sights/images/puppet-theatre/thumb/6.png",
        "/assets/sights/images/puppet-theatre/thumb/7.png",
        "/assets/sights/images/puppet-theatre/thumb/8.png"
      ],
      routerLink: "puppet-theatre"
    },
    {
      title: "The Palace of Tyzenhaus",
      shortDesc:
        "Nowadays nothing is left from once a huge palace of Tyzenhaus, but once it was a spectacular sight that had its place in the unique landscape of the city. The palace was built by an Italian architect Giuseppe Sacco in XVIII century. August Stanislav Ponyatowsky compared the palace to the city of Vienna in size. Now, on the  place where governor's palace once was destroyed by fire, there is a monument of the Eternal Flame in honor of the fallen heroes of WWII.",
      imgList: [
        "/assets/sights/images/palace-of-tyzenhaus/thumb/1.jpg",
        "/assets/sights/images/palace-of-tyzenhaus/thumb/1.jpeg",
        "/assets/sights/images/palace-of-tyzenhaus/thumb/2.jpeg",
        "/assets/sights/images/palace-of-tyzenhaus/thumb/3.jpg"
      ],
      routerLink: "palace-of-tyzenhaus"
    }
  ];

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
