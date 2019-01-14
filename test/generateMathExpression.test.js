/* eslint-disable no-undef */
import generateMathExpression from '../src/components/tasks/task_util_functions/generateMathExpression';

describe('generate math expression with answer', () => {
  const limit = 50;
  const result = generateMathExpression(limit);

  test('examine if function returns array', () => {
    expect(Array.isArray(result)).toBeTruthy();
  });

  test('examine "result" has two elements', () => {
    expect(result).toHaveLength(2);
  });

  test('examine if the first element of "result" is "string"', () => {
    expect(typeof result[0]).toEqual('string');
  });

  test('examine if the second element of "result" is "number"', () => {
    expect(typeof result[1]).toEqual('number');
  });

  test('examine if the second element of "result" is "number"', () => {
    expect(typeof result[1]).toEqual('number');
  });

  test('examine if the second element of "result" is number from 0 to 50', () => {
    expect(result[1]).toBeLessThanOrEqual(limit);
  });
});
