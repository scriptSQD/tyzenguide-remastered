import { AfterViewInit, Component, OnInit } from "@angular/core";
import { SightPreviews } from "./sight-preview-definitions";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor() {}

  // Messy but the only way around is to implement database usage, which is out-of-scope as of now.
  sightPreviews = SightPreviews;

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
