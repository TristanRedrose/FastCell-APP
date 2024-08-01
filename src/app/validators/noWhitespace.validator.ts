import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function noWhitespaceValidator(length: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isWhitespace = (control.value || '').trim().length < length;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  };
}