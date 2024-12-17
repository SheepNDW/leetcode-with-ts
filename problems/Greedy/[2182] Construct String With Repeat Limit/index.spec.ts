import { describe, expect, it } from 'vitest';
import { repeatLimitedString } from '.';

describe.skip('repeatLimitedString', () => {
  it('should return "zzcccac" when s = "cczazcc" and repeatLimit = 3', () => {
    const s = 'cczazcc';
    const repeatLimit = 3;

    const result = repeatLimitedString(s, repeatLimit);

    expect(result).toBe('zzcccac');
  });

  it('should return "bbabaa" when s = "aababab" and repeatLimit = 2', () => {
    const s = 'aababab';
    const repeatLimit = 2;

    const result = repeatLimitedString(s, repeatLimit);

    expect(result).toBe('bbabaa');
  });
});
