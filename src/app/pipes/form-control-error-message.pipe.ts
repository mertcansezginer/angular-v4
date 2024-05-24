import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'formControlErrorMessage'
})
export class FormControlErrorMessagePipe implements PipeTransform {
  transform(control: AbstractControl): string {
    if (!control || !control.errors) return '';

    const errors = control.errors;
    if (errors.required) {
      return 'This field is required';
    } else if (errors.minlength) {
      return `Minimum length is ${errors.minlength.requiredLength}`;
    } else if (errors.maxlength) {
      return `Maximum length is ${errors.maxlength.requiredLength}`;
    } else if (errors.email) {
      return 'Invalid email address';
    }
    return 'Unknown error';
  }
}
