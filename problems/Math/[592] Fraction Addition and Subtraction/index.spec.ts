import { describe, expect, it } from 'vitest';
import { fractionAddition } from '.';

describe.skip('fractionAddition', () => {
  it('should return 0/1 for expression = -1/2+1/2', () => {
    const expression = '-1/2+1/2';

    const result = fractionAddition(expression);

    expect(result).toBe('0/1');
  });

  it('should return 1/3 for expression = -1/2+1/2+1/3', () => {
    const expression = '-1/2+1/2+1/3';

    const result = fractionAddition(expression);

    expect(result).toBe('1/3');
  });

  it('should return -1/6 for expression = 1/3-1/2', () => {
    const expression = '1/3-1/2';

    const result = fractionAddition(expression);

    expect(result).toBe('-1/6');
  });
});
