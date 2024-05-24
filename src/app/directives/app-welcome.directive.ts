import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appWelcome]'
})
export class AppWelcomeDirective {
  @Input() set appWelcome(delay: number) {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: 'Welcome' });
    setTimeout(() => {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    }, delay);
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}
}
