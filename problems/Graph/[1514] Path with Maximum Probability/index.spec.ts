import { describe, expect, it } from 'vitest';
import { maxProbability } from '.';

describe.skip('maxProbability', () => {
  it('should return 0.25 for n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2', () => {
    const n = 3;
    const edges = [
      [0, 1],
      [1, 2],
      [0, 2],
    ];
    const succProb = [0.5, 0.5, 0.2];
    const start = 0;
    const end = 2;

    const result = maxProbability(n, edges, succProb, start, end);

    expect(result).toBe(0.25);
  });

  it('should return 0.3 for n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.3], start = 0, end = 2', () => {
    const n = 3;
    const edges = [
      [0, 1],
      [1, 2],
      [0, 2],
    ];
    const succProb = [0.5, 0.5, 0.3];
    const start = 0;
    const end = 2;

    const result = maxProbability(n, edges, succProb, start, end);

    expect(result).toBe(0.3);
  });

  it('should return 0 for n = 3, edges = [[0,1]], succProb = [0.5], start = 0, end = 2', () => {
    const n = 3;
    const edges = [[0, 1]];
    const succProb = [0.5];
    const start = 0;
    const end = 2;

    const result = maxProbability(n, edges, succProb, start, end);

    expect(result).toBe(0);
  });
});
