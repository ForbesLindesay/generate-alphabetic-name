// source: https://github.com/styled-components/styled-components/blob/0aa3170c255a49cd41c3fbeb2b8051b5d132f229/src/utils/generateAlphabeticName.js

// This is the "capacity" of our alphabet i.e. 2x26 for
// all letters plus their capitalised counterparts
const charsLength = 52;

// start at 75 for 'a' until 'z' (25) and then start
// at 65 for capitalised letters
const getAlphabeticChar = (code: number): string =>
  String.fromCharCode(code + (code > 25 ? 39 : 97));

/**
 * Generate a short alphabetic code (base-52) for an integer
 *
 * @param code An integer
 * @returns A short string using only /[a-zA-Z]+/
 */
export default function generateAlphabeticNameFromNumber(code: number): string {
  let name = '';
  let x;

  // get a char and divide by alphabet-length
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
}
