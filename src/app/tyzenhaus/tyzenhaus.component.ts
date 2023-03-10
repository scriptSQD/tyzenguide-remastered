import { Component } from "@angular/core";

@Component({
	selector: "app-tyzenhaus",
	templateUrl: "./tyzenhaus.component.html",
	styleUrls: ["./tyzenhaus.component.scss"],
})
export class TyzenhausComponent {
	photos: string[] = [
		"/assets/sights/images/tyzenhaus/2.png",
		"/assets/sights/images/tyzenhaus/3.png",
		"/assets/sights/images/tyzenhaus/4.png",
		"/assets/sights/images/tyzenhaus/5.png",
		"/assets/sights/images/tyzenhaus/6.png",
		"/assets/sights/images/tyzenhaus/7.png",
	];
}
