import generateAlphabeticNameFromNumber from '../generateAlphabeticNameFromNumber';

test('creates alphabetic names for number input data', () => {
  expect(generateAlphabeticNameFromNumber(1000000000)).toEqual('cGNYzm');
  expect(generateAlphabeticNameFromNumber(2000000000)).toEqual('fnBWYy');
});

test('does not fail for numbers above int32 limit', () => {
  expect(generateAlphabeticNameFromNumber(3819806601)).toEqual('kcwstn');
});

test('does not generate duplicates in at least the first 1,000,000 integers', () => {
  const seen = new Set();
  for (let i = 0; i < 1_000_000; i++) {
    const name = generateAlphabeticNameFromNumber(i);
    if (seen.has(name)) {
      throw new Error(`Found duplicate id at ${i}: ${name}`);
    }
    seen.add(name);
  }
});

test('even the largest possible hash is still a short string', () => {
  expect(generateAlphabeticNameFromNumber(Math.pow(2, 32) - 1)).toEqual(
    `lpvJyV`,
  );
});
