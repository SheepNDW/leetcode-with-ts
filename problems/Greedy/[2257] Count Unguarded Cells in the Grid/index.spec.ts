import { describe, expect, it } from 'vitest';
import { countUnguarded } from '.';

describe.skip('countUnguarded', () => {
  it('should return 7', () => {
    const m = 4;
    const n = 6;
    const guards = [
      [0, 0],
      [1, 1],
      [2, 3],
    ];
    const walls = [
      [0, 1],
      [2, 2],
      [1, 4],
    ];

    const result = countUnguarded(m, n, guards, walls);

    expect(result).toEqual(7);
  });

  it('should return 4', () => {
    const m = 3;
    const n = 3;
    const guards = [[1, 1]];
    const walls = [
      [0, 1],
      [1, 0],
      [2, 1],
      [1, 2],
    ];

    const result = countUnguarded(m, n, guards, walls);

    expect(result).toEqual(4);
  });
});
