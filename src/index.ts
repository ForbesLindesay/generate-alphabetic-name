import generateAlphabeticNameFromNumber from './generateAlphabeticNameFromNumber';
import hash from './hash';

export {hash, generateAlphabeticNameFromNumber};

/**
 * Take an arbitrary string or number and generate a short
 * alphabetic code for it using only characters in /[a-zA-Z]+/
 *
 * @param input
 */
export default function generateAlphabeticName(input: string | number): string {
  return generateAlphabeticNameFromNumber(
    typeof input === 'number' ? input : hash(input),
  );
}
