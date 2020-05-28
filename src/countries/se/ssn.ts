import { Validator } from '../../validate';

/**
 * A Swedish SSN ("personnummer") is a number that everyone who is registered
 * in Sweden is assigned. It is regulated by the Folkbokföringslag (1991:481).
 * 
 * Specification:
 *     A social security number consists of 10 digits split into 3 parts.
 *     The birthtime, the birth number and a control digit
 *     
 *     Birth time split into 3 parts:
 *       Year:  2 digits
 *       Month: 2 digits
 *       Day:   2 digits
 *
 *     Birth number: 3 digits
 * 
 *     Control number: 1 digit
 * 
 *     The birth time is separated from the birth number and control number with
 *     a "-" character which is replaced with a "+" character when a person turns 100.
 *  
 *     *Computing the control number:*
 * 
 *       Calculated with the modulus-10-method with weights 1 and 2.
 *       
 *       1. Multiply the digits of the year, month, day and birth number with 2 and 1
 *          alternately.
 * 
 *       2. Add all the digits of the previous products (i.e numbers larger than 9 like 11
 *          are added as 1 + 1.).
 * 
 *       3. Compute (10 - (sum mod 10)) if this is 10 then return 0.
 *
 * Deviations:
 *     A common deviation (and also how a Swedish SSN is recommended to be stored) is to
 *     have 4 digits for the year number giving a total length of 12. If this is the case
 *     the first 2 digits can only be 18, 19 or 20 `validate` allows such SSNs, `validate` 
 *     with the strict flag set does not.
 * 
 *     A SSN should be separated between the birth time and the birth number and control
 *     digit by a "-" or "+". In non strict mode this can be left out.
 */
export class SSN extends Validator {
  static validate(value: string, strict: boolean = false): boolean {
    if (strict && (value.length === 12 || (value.indexOf('-') === -1) || value.indexOf('+') === -1)) return false;

    let startIndex = 0;
    if (value.length === 12) {
      startIndex = 2;
      const century = value.slice(0,2)
      // The only valid century digits are 18, 19 and 20
      if (century !== "18" && century !== "19" && century !== "20") return false
    }

    const ssnNumber = value.slice(startIndex);
    
    if (ssnNumber.length !== 10) return false

    
  }
}