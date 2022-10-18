import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { LoaderComponent } from "./loader.component";

@Directive({
  selector: "[isLoading]"
})
export class IsLoadingDirective {
  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly ref: ViewContainerRef
  ) {}

  @Input("isLoading") set isLoading(val: boolean | null | undefined) {
    console.log(`Got val for isLoading directive: ${val}`);

    if (val) {
      this.ref.clear();
      this.ref.createComponent(LoaderComponent);
    } else {
      this.ref.clear();
      this.ref.createEmbeddedView(this.templateRef);
    }
  }
}
