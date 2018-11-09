import generateAlphabeticNameFromNumber from '../generateAlphabeticNameFromNumber';

test('creates alphabetic names for number input data', () => {
  expect(generateAlphabeticNameFromNumber(1000000000)).toEqual('cGNYzm');
  expect(generateAlphabeticNameFromNumber(2000000000)).toEqual('fnBWYy');
});

test('does not fail for numbers above int32 limit', () => {
  expect(generateAlphabeticNameFromNumber(3819806601)).toEqual('kcwstn');
});
