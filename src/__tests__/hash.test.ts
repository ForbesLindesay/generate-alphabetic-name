import hash from '../hash';

test('generates a unique numeric code for each string', () => {
  expect(hash('hello world')).toEqual(1151865881);
  expect(hash('whatever')).toEqual(401988904);
});
