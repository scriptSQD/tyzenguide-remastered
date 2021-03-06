import { Component, Inject, forwardRef, Optional, Input } from "@angular/core";
import {
  TypedBaseWidget,
  NgAisInstantSearch,
  NgAisIndex
} from "angular-instantsearch";
import connectSearchBox, {
  SearchBoxWidgetDescription,
  SearchBoxConnectorParams
} from "instantsearch.js/es/connectors/search-box/connectSearchBox";

@Component({
  selector: "app-debounced-search-box",
  template: `
    <div class="relative">
      <label class="block text-xs font-medium text-gray-100" for="email">
        Search query
      </label>

      <input
        class="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded"
        id="email"
        type="text"
        #input
        (keyup)="onChangeDebounced(input.value)"
        [value]="this.state.query"
      />
    </div>
  `
})
export class DebouncedSearchBoxComponent extends TypedBaseWidget<
  SearchBoxWidgetDescription,
  SearchBoxConnectorParams
> {
  private timerId: ReturnType<typeof setTimeout> | null = null;
  @Input() delay: number = 0;
  public override state: SearchBoxWidgetDescription["renderState"] = {
    clear(): void {},
    isSearchStalled: false,
    query: "",
    refine(value: string): void {}
  };

  // Rendering options
  constructor(
    @Inject(forwardRef(() => NgAisIndex))
    @Optional()
    public parentIndex: NgAisIndex,
    @Inject(forwardRef(() => NgAisInstantSearch))
    public instantSearchInstance: NgAisInstantSearch
  ) {
    super("SearchBox");
  }

  public onChangeDebounced(value: string) {
    if (this.timerId) clearTimeout(this.timerId);
    this.timerId = setTimeout(() => this.state.refine(value), this.delay);
  }

  override ngOnInit() {
    this.createWidget(connectSearchBox, {
      // instance options
    });
    super.ngOnInit();
  }
}
