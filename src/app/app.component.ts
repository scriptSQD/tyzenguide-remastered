import { Component } from "@angular/core";
import algoliasearch from "algoliasearch/lite";

var showingDropdown: boolean = false;

const aisSearchClient = algoliasearch(
  "BKR6K20R7M",
  "9d99bad05fa36f468e337ff1683e3abf"
);

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  changeDropdownState() {
    showingDropdown = !showingDropdown;
    document.getElementById("dropdown")!.style.display = showingDropdown
      ? "flex"
      : "none";
    document.body.style.overflow = showingDropdown ? "hidden" : "";
  }

  aisConfig = {
    indexName: "sights",
    searchClient: aisSearchClient
  };
}
