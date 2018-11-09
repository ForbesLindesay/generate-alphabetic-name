import generateAlphabeticName, {
  generateAlphabeticNameFromNumber,
  hash,
} from '../';
import _generateAlphabeticNameFromNumber from '../generateAlphabeticNameFromNumber';
import _hash from '../hash';

test('creates alphabetic names for number input data', () => {
  expect(generateAlphabeticName(1000000000)).toEqual('cGNYzm');
  expect(generateAlphabeticName(2000000000)).toEqual('fnBWYy');
});

test('creates alphabetic names for string input data', () => {
  expect(generateAlphabeticName('Hello World')).toEqual('jpIYJx');
  expect(generateAlphabeticName('Whatever')).toEqual('eTaXMV');
});

test('it exports generateAlphabeticNameFromNumber and hash', () => {
  expect(generateAlphabeticNameFromNumber).toBe(
    _generateAlphabeticNameFromNumber,
  );
  expect(hash).toBe(_hash);
});
