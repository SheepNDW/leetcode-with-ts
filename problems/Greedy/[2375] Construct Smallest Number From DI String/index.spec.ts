import { describe, expect, it } from 'vitest';
import { smallestNumber } from '.';

describe.skip('smallestNumber', () => {
  it('should return 123549876 when pattern is IIIDIDDD', () => {
    const pattern = 'IIIDIDDD';

    const result = smallestNumber(pattern);

    expect(result).toEqual('123549876');
  });

  it('should return 4321 when pattern is DDD', () => {
    const pattern = 'DDD';

    const result = smallestNumber(pattern);

    expect(result).toEqual('4321');
  });
});
