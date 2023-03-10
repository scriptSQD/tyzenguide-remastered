import { Component } from "@angular/core";
import { SightPreviews } from "./sight-preview-definitions";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
	// Messy but the only way around is to implement database usage, which is out-of-scope as of now.
	sightPreviews = SightPreviews;
}
