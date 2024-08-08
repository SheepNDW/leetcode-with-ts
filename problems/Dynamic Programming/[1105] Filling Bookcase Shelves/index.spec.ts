import { describe, expect, it } from 'vitest';
import { minHeightShelves } from '.';

describe.skip('minHeightShelves', () => {
  it('should return 6 for books = [[1, 1], [2, 3], [2, 3], [1, 1], [1, 1], [1, 1], [1, 2]] and shelfWidth = 4', () => {
    const books = [
      [1, 1],
      [2, 3],
      [2, 3],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 2],
    ];
    const shelfWidth = 4;

    const result = minHeightShelves(books, shelfWidth);

    expect(result).toBe(6);
  });

  it('should return 4 for books = [[1,3],[2,4],[3,2]] and shelfWidth = 6', () => {
    const books = [
      [1, 3],
      [2, 4],
      [3, 2],
    ];
    const shelfWidth = 6;

    const result = minHeightShelves(books, shelfWidth);

    expect(result).toBe(4);
  });
});
