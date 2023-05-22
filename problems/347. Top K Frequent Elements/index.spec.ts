import { describe, expect, it } from 'vitest';
import { topKFrequent } from '.';

describe('topKFrequent', () => {
  it('Should return the top k frequent numbers when multiple numbers occur frequently', () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
  });

  it('Should return the number itself when there is only one number in the input', () => {
    expect(topKFrequent([1], 1)).toEqual([1]);
  });

  it('Should correctly return the most frequent negative number for negative inputs', () => {
    expect(topKFrequent([-1, -1], 1)).toEqual([-1]);
  });
});
