import { Component } from "@angular/core";
import algoliasearch from "algoliasearch/lite";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	private _showingDropdown = false;

	changeDropdownState() {
		this._showingDropdown = !this._showingDropdown;
		document.getElementById("dropdown")!.style.display = this
			._showingDropdown
			? "flex"
			: "none";
		document.body.style.overflow = this._showingDropdown ? "hidden" : "";
	}

	aisConfig = {
		indexName: "sights",
		searchClient: algoliasearch(
			"BKR6K20R7M",
			"9d99bad05fa36f468e337ff1683e3abf",
		),
	};
}
