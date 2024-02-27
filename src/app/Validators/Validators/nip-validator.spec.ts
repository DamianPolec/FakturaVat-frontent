import { FormControl } from '@angular/forms';
import { nipValidator } from './nip-validator';

describe('NIP Validator', () => {
  it('should return null for a valid NIP', () => {
    const control = new FormControl('1234567890');
    const validatorFn = nipValidator();
    const result = validatorFn(control);
    expect(result).toBeNull();
  });

  it('should return error object for invalid NIP length', () => {
    const control = new FormControl('123');
    const validatorFn = nipValidator();
    const result = validatorFn(control);
    expect(result).toEqual({ invalidNipLength: true });
  });

  it('should return error object for non-numeric NIP', () => {
    const control = new FormControl('12a3456789');
    const validatorFn = nipValidator();
    const result = validatorFn(control);
    expect(result).toEqual({ nonNumericNip: true });
  });
});