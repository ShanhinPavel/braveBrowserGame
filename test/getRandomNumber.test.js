/* eslint-disable no-undef */
import getRandomNumber from '../src/help_modules/getRandomNumber';

describe('test random function', () => {
  test('examine if function return "number"', () => {
    expect(Number.isInteger(getRandomNumber(4))).toBeTruthy();
    expect(Number.isInteger(getRandomNumber(3))).toBeTruthy();
    expect(Number.isInteger(getRandomNumber(2))).toBeTruthy();
  });

  test('should returns value < given number', () => {
    expect(getRandomNumber(2)).toBeLessThan(2);
    expect(getRandomNumber(4)).toBeLessThan(4);
    expect(getRandomNumber(5)).toBeLessThan(5);
  });
});
