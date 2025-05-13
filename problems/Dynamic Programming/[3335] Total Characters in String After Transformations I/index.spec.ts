import { describe, expect, it } from 'vitest';
import { lengthAfterTransformations } from '.';

describe.skip('lengthAfterTransformations', () => {
  it('example 1', () => {
    const s = 'abcyy';
    const t = 2;

    const result = lengthAfterTransformations(s, t);

    expect(result).toBe(7);
  });

  it('example 2', () => {
    const s = 'azbk';
    const t = 1;

    const result = lengthAfterTransformations(s, t);

    expect(result).toBe(5);
  });

  it('tle test', () => {
    const s = 'jqktcurgdvlibczdsvnsg';
    const t = 7517;

    const result = lengthAfterTransformations(s, t);

    expect(result).toBe(79033769);
  });
});
