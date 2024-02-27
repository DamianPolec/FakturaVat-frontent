import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Definicja funkcji walidatora
export function nipValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (value) {
      if (value.length !== 10) {
        return { invalidNipLength: true }; 
      }
      const isNumeric = /^\d+$/.test(value);
      if (!isNumeric) {
        return { nonNumericNip: true }; 
      }
    }
    return null; 
  };
}
 
