import { describe, expect, it } from 'vitest';
import { minimumTeachings } from '.';

describe('minimumTeachings', () => {
  it('example 1', () => {
    const n = 2;
    const languages = [[1], [2], [1, 2]];
    const friendships = [
      [1, 2],
      [1, 3],
      [2, 3],
    ];

    const result = minimumTeachings(n, languages, friendships);

    expect(result).toBe(1);
  });

  it('example 2', () => {
    const n = 3;
    const languages = [[2], [1, 3], [1, 2], [3]];
    const friendships = [
      [1, 4],
      [1, 2],
      [3, 4],
      [2, 3],
    ];

    const result = minimumTeachings(n, languages, friendships);

    expect(result).toBe(2);
  });
});
