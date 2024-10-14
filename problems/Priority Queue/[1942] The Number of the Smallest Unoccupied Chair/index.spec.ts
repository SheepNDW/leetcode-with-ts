import { describe, expect, it } from 'vitest';
import { smallestChair } from '.';

describe.skip('smallestChair', () => {
  it('should return 1 for times = [[1,4],[2,3],[4,6]], targetFriend = 1', () => {
    const times = [
      [1, 4],
      [2, 3],
      [4, 6],
    ];
    const targetFriend = 1;

    const result = smallestChair(times, targetFriend);

    expect(result).toBe(1);
  });

  it('should return 2 for times = [[3,10],[1,5],[2,6]], targetFriend = 0', () => {
    const times = [
      [3, 10],
      [1, 5],
      [2, 6],
    ];
    const targetFriend = 0;

    const result = smallestChair(times, targetFriend);

    expect(result).toBe(2);
  });
});
