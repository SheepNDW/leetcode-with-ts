import { describe, expect, it } from 'vitest';
import { isInterleave } from '.';

describe('isInterleave', () => {
  it('should return true when s3 can be obtained by interleaving s1 and s2', () => {
    const s1 = 'aabcc';
    const s2 = 'dbbca';
    const s3 = 'aadbbcbcac';

    const result = isInterleave(s1, s2, s3);

    expect(result).toEqual(true);
  });

  it('should return false when it is impossible to interleave s1 and s2 to obtain s3', () => {
    const s1 = 'aabcc';
    const s2 = 'dbbca';
    const s3 = 'aadbbbaccc';

    const result = isInterleave(s1, s2, s3);

    expect(result).toEqual(false);
  });

  it('should return true when all strings are empty', () => {
    const s1 = '';
    const s2 = '';
    const s3 = '';

    const result = isInterleave(s1, s2, s3);

    expect(result).toEqual(true);
  });

  it('should return false when s1 and s2 length sum is not equal to s3', () => {
    const s1 = 'abc';
    const s2 = 'def';
    const s3 = 'abcdefg'; // Extra character 'g'

    const result = isInterleave(s1, s2, s3);

    expect(result).toEqual(false);
  });
});
