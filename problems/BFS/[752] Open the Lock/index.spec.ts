import { describe, expect, it } from 'vitest';
import { openLock } from '.';

describe.skip('openLock', () => {
  it('should return 6 for deadends = ["0201","0101","0102","1212","2002"], target = "0202"', () => {
    const deadends = ['0201', '0101', '0102', '1212', '2002'];
    const target = '0202';

    const result = openLock(deadends, target);

    expect(result).toBe(6);
  });

  it('should return 1 for deadends = ["8888"], target = "0009"', () => {
    const deadends = ['8888'];
    const target = '0009';

    const result = openLock(deadends, target);

    expect(result).toBe(1);
  });

  it('should return 0 for deadends = ["0201","0101","0102","1212","2002"], target = "0000"', () => {
    const deadends = ['0201', '0101', '0102', '1212', '2002'];
    const target = '0000';

    const result = openLock(deadends, target);

    expect(result).toBe(0);
  });

  it('should return -1 for deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"', () => {
    const deadends = ['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'];
    const target = '8888';

    const result = openLock(deadends, target);

    expect(result).toBe(-1);
  });

  it('should return -1 for deadends has "0000"', () => {
    const deadends = ['0000'];
    const target = '8888';

    const result = openLock(deadends, target);

    expect(result).toBe(-1);
  });
});
