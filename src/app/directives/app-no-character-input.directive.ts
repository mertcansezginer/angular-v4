import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoCharacterInput]'
})
export class AppNoCharacterInputDirective {
  @HostListener('input', ['$event']) onInput(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\d/g, '');
  }
}
