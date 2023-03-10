import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { LoaderComponent } from "./loader.component";

@Directive({
	selector: "[isLoading]",
})
export class IsLoadingDirective {
	constructor(
		private readonly templateRef: TemplateRef<any>,
		private readonly ref: ViewContainerRef,
	) {}

	@Input() set isLoading(val: boolean | null | undefined) {
		this.ref.clear();

		if (val) {
			this.ref.createComponent(LoaderComponent);
		} else {
			this.ref.createEmbeddedView(this.templateRef);
		}
	}
}
