import { Validator } from '../validate';

export class IPv4 extends Validator {
  static validate(value: string): boolean {
     return false
  }
}