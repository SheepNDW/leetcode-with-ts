import { describe, expect, it } from 'vitest';
import { createList } from '../../utils/list';
import { reverseBetween } from '.';

describe('reverseBetween', () => {
  it('should reverse the sublist from position 2 to 4', () => {
    const list = createList([1, 2, 3, 4, 5]);
    const left = 2;
    const right = 4;

    const newList = reverseBetween(list, left, right);

    expect(newList).toEqual(createList([1, 4, 3, 2, 5]));
  });

  it('should return the same list if left and right are the same', () => {
    const list = createList([5]);
    const left = 1;
    const right = 1;

    const newList = reverseBetween(list, left, right);

    expect(newList).toEqual(createList([5]));
  });

  it('should return the same list if it has only one node', () => {
    const list = createList([1]);
    const left = 1;
    const right = 1;

    const newList = reverseBetween(list, left, right);

    expect(newList).toEqual(createList([1]));
  });

  it('should handle negative numbers', () => {
    const list = createList([-1, -2, -3, -4, -5]);
    const left = 2;
    const right = 4;

    const newList = reverseBetween(list, left, right);

    expect(newList).toEqual(createList([-1, -4, -3, -2, -5]));
  });

  it('should reverse the entire list if left is 1 and right is n', () => {
    const list = createList([1, 2, 3, 4, 5]);
    const left = 1;
    const right = 5;

    const newList = reverseBetween(list, left, right);

    expect(newList).toEqual(createList([5, 4, 3, 2, 1]));
  });
});
