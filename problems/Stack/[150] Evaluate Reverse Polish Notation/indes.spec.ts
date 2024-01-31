import { describe, expect, it } from 'vitest';
import { evalRPN } from '.';

describe.skip('evalRPN', () => {
  it('should evaluate expression ["2", "1", "+", "3", "*"] correctly', () => {
    const tokens = ['2', '1', '+', '3', '*'];

    const result = evalRPN(tokens);

    expect(result).toBe(9);
  });

  it('should evaluate expression ["4", "13", "5", "/", "+"] correctly', () => {
    const tokens = ['4', '13', '5', '/', '+'];

    const result = evalRPN(tokens);

    expect(result).toBe(6);
  });

  it('should evaluate expression ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"] correctly', () => {
    const tokens = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];

    const result = evalRPN(tokens);

    expect(result).toBe(22);
  });
});
