import { describe, expect, it } from 'vitest';
import { pushDominoes } from '.';

describe.skip('pushDominoes', () => {
  it('should return "RR.L" for dominoes = "RR.L"', () => {
    const dominoes = 'RR.L';
    const result = pushDominoes(dominoes);
    expect(result).toBe('RR.L');
  });

  it('should return "LL.RR.LLRRLL.." for dominoes = ".L.R...LR..L.."', () => {
    const dominoes = '.L.R...LR..L..';
    const result = pushDominoes(dominoes);
    expect(result).toBe('LL.RR.LLRRLL..');
  });
});
