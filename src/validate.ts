export abstract class Validator {
  static validate: (value: string, strict?: boolean) => boolean
  static validateAll(values: string[]): boolean {
    values.forEach(value => {
      if (!this.validate(value)) return false;
    });

    return true;
  }
}