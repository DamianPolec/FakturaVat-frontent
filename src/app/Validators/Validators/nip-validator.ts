import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Definicja funkcji walidatora
export function nipValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (value) {
      // Tutaj możesz dodać swoją logikę walidacji NIP

      // Przykładowa logika sprawdzająca długość NIP
      if (value.length !== 10) {
        return { invalidNipLength: true }; // Zwracamy błąd, jeśli długość NIP jest inna niż oczekiwana
      }

      // Przykładowa logika sprawdzająca, czy NIP składa się tylko z cyfr
      const isNumeric = /^\d+$/.test(value);
      if (!isNumeric) {
        return { nonNumericNip: true }; // Zwracamy błąd, jeśli NIP zawiera inne znaki niż cyfry
      }
    }
    return null; // Zwracamy null, jeśli walidacja przebiegła pomyślnie
  };
}
 