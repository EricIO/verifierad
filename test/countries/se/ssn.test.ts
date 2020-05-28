import { SSN } from '../../../src/countries/se/ssn';

import * as data from './ssn.data.json';

describe('Valid 10 digit SSNs passes validation', () => {
  data.valid10Digits.forEach((ssn) => {
    it(`${ssn} should be valid`, () => {
      expect(SSN.validate(ssn)).toBe(true)
    })
  })
})

describe('Valid 10 digit SSNs passes strict validation', () => {
  data.valid10Digits.forEach((ssn) => {
    it(`${ssn} should be valid`, () => {
      expect(SSN.validate(ssn, true)).toBe(true)
    })
  })
})

describe('Invalid 10 digit control number does not pass validation', () => {
  data.invalid10DigitsWrongControl.forEach((ssn) => {
    it(`${ssn} should not be valid`, () => {
      expect(SSN.validate(ssn)).toBe(false)
    })
  })
})

describe('Invalid 10 digit with strict mode does not pass validation', () => {
  data.invalid10DigitsStrict.forEach((ssn) => {
    it(`${ssn} should not be valid`, () => {
      expect(SSN.validate(ssn, true)).toBe(false)
    })
  })
})

describe('Valid 12 digit SSNs passes validation', () => {
  data.valid12Digits.forEach((ssn) => {
    it(`${ssn} should be valid`, () => {
      expect(SSN.validate(ssn)).toBe(true)
    })
  })
})

describe('Invalid 12 digits SSNs does not pass validation', () => {
  data.invalid12DigitsWrongControl.forEach((ssn) => {
    it(`${ssn} should not be valid`, () => {
      expect(SSN.validate(ssn)).toBe(false)
    })
  })
})