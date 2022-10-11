import isValidArray from '../src';

it('not a valid array', () => {
  expect(isValidArray({})).toBe(false);
  expect(isValidArray(null)).toBe(false);
  expect(isValidArray(undefined)).toBe(false);
  expect(isValidArray(0)).toBe(false);
  expect(isValidArray([])).toBe(false);
});

it('valid array', () => {
  expect(isValidArray([{}])).toBe(true);
  expect(isValidArray([{ a: 3 }])).toBe(true);
  expect(isValidArray([0])).toBe(true);
});
