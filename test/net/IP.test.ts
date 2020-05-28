// import { IPv4 } from '../../src/net/IP';

// const validIPv4Addresses: string[] = [
//   "0.0.0.0",
//   "123.0.1.2"
// ];

// const invalidIPv4Addresses: string[] = [
//   "256.0.0.0",
//   "0.0.0.0.0",
// ]

// describe('Valid IPv4 strings passes validation', () => {
//   validIPv4Addresses.forEach((ip) => {
//     it(`${ip} should be valid`, () => {
//       expect(IPv4.validate(ip)).toBe(true);
//     });
//   });
// });

// describe('Invalid IPv4 strings does not pass validation', () => {
//   invalidIPv4Addresses.forEach((ip) => {
//     it(`${ip} should no be valid`, () => {
//       expect(IPv4.validate(ip)).toBe(false);
//     });
//   });
// });