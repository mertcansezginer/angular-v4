import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMultiple]'
})
export class AppMultipleDirective {
  @Input() set appMultiple(times: number) {
    this.viewContainer.clear();
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}
}
