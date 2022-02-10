import { AfterViewInit, Component } from '@angular/core';
// import * as Rellax from 'rellax';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {

  constructor() {};

  ngAfterViewInit(): void {
    // const rellax = new Rellax('.to-rellax', {
    //   speed: 2,
    //   center: false,
    //   vertical: true,
    //   horizontal: false
    // });
  }

}
